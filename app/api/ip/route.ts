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

  // Try ipapi.co first, then ipwho.is
  const providers = [
    {
      base: 'https://ipapi.co',
      format: (ip: string) => (ip ? `/${ip}/json/` : '/json/'),
    },
    { base: 'https://ipwho.is', format: (ip: string) => (ip ? `/${ip}` : '/') },
  ];

  for (const { base, format } of providers) {
    try {
      const url = base + format(ip);
      const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
      const data = await res.json();

      if (data.error || data.success === false) continue;

      CACHE.set(cacheKey, { data, expires: Date.now() + 5 * 60 * 1000 });
      return NextResponse.json(data);
    } catch {
      continue;
    }
  }

  return NextResponse.json(
    { error: 'Failed to fetch IP data' },
    { status: 503 },
  );
}
