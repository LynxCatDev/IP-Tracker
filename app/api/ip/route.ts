// app/api/ip/route.ts not used
import { NextRequest, NextResponse } from 'next/server';

const CACHE = new Map<string, { data: any; expires: number }>();

export async function GET(req: NextRequest) {
  let ip = req.nextUrl.searchParams.get('ip');
  if (!ip) {
    // Try to get real client IP from x-forwarded-for header
    const forwarded = req.headers.get('x-forwarded-for');
    if (forwarded) {
      ip = forwarded.split(',')[0].trim();
    } else {
      ip = '';
    }
  }
  const cacheKey = ip || 'auto';

  // Check cache (5 min)
  const cached = CACHE.get(cacheKey);
  if (cached && cached.expires > Date.now()) {
    return NextResponse.json(cached.data);
  }

  // Try both providers and collect errors
  const providers = [
    {
      base: 'https://ipapi.co',
      format: (ip: string) => (ip ? `/${ip}/json/` : '/json/'),
      name: 'ipapi.co',
    },
    {
      base: 'https://ipwho.is',
      format: (ip: string) => (ip ? `/${ip}` : '/'),
      name: 'ipwho.is',
    },
  ];

  let lastError = null;
  for (const { base, format, name } of providers) {
    try {
      const url = base + format(ip);
      const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
      const data = await res.json();

      if (data.error || data.success === false) {
        lastError = data.error || data.message || `Unknown error from ${name}`;
        console.error(`[IP API] ${name} error:`, data.error || data.message);
        continue;
      }

      CACHE.set(cacheKey, { data, expires: Date.now() + 5 * 60 * 1000 });
      return NextResponse.json(data);
    } catch (err) {
      lastError = err instanceof Error ? err.message : String(err);
      console.error(`[IP API] ${name} fetch error:`, err);
      continue;
    }
  }

  return NextResponse.json(
    { error: 'Failed to fetch IP data', details: lastError },
    { status: 503 },
  );
}
