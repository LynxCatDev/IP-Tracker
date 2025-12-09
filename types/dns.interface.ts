export interface DNSRecord {
  type: string;
  value: string;
  ttl?: number;
}

export interface DNSResult {
  domain: string;
  records: DNSRecord[];
  resolvedAt: string;
}
