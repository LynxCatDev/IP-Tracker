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

  const isLocalIp = (v?: string) => {
    if (!v) return true;
    // IPv6 loopback
    if (v === '::1') return true;
    // IPv4 loopback
    if (v === '127.0.0.1') return true;
    // IPv4 mapped IPv6 like ::ffff:127.0.0.1
    if (v.startsWith('::ffff:')) {
      const maybeIpv4 = v.split('::ffff:')[1];
      if (maybeIpv4 === '127.0.0.1') return true;
    }
    // RFC1918 ranges
    if (v.startsWith('10.') || v.startsWith('192.168.')) return true;
    if (v.match(/^172\.(1[6-9]|2[0-9]|3[0-1])\./)) return true;
    return false;
  };

  // If we detected a local/reserved address, try to resolve the machine's public IP
  // using a lightweight external service (only for local development).
  if (isLocalIp(ip)) {
    try {
      const r = await fetch('https://api.ipify.org?format=json', {
        signal: AbortSignal.timeout(3000),
      });
      if (r.ok) {
        const j = await r.json();
        if (j?.ip && typeof j.ip === 'string') {
          ip = j.ip;
          console.info('[IP API] resolved public IP via ipify:', ip);
        }
      }
    } catch (err) {
      console.warn(
        '[IP API] ipify lookup failed (continuing with detected ip):',
        err,
      );
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
      const url = base + format(ip ?? '');
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
