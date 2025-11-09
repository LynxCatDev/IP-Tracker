import React from 'react';

export function UnderstandingDNSContent() {
  return (
    <>
      <p className="lead">
        Every time you visit a website, your computer performs a DNS lookup
        behind the scenes. The Domain Name System is one of the internet's most
        critical yet least understood components. Let's explore how it works and
        why it matters.
      </p>

      <h2>What is DNS?</h2>
      <p>
        DNS (Domain Name System) is like the internet's phone book. While humans
        prefer to use memorable website names like "google.com" or
        "youtube.com," computers communicate using IP addresses like{' '}
        <code>172.217.14.206</code>. DNS translates human-friendly domain names
        into the IP addresses that computers need to locate and connect to
        websites.
      </p>

      <p>
        Without DNS, you would have to memorize long strings of numbers to visit
        your favorite websites. Imagine having to type{' '}
        <code>142.250.185.78</code> every time you wanted to search on Google!
      </p>

      <h2>How DNS Works: The Lookup Process</h2>

      <p>
        When you type a website address into your browser, a complex process
        happens in milliseconds:
      </p>

      <h3>Step 1: Browser Cache Check</h3>
      <p>
        Your browser first checks its own cache to see if it recently looked up
        this domain name. If found, it uses the cached IP address immediately,
        saving time.
      </p>

      <h3>Step 2: Operating System Cache</h3>
      <p>
        If not in the browser cache, your operating system checks its own DNS
        cache. This is a local storage of recently resolved domain names.
      </p>

      <h3>Step 3: Recursive DNS Resolver</h3>
      <p>
        If the address isn't cached locally, your computer contacts a recursive
        DNS resolver (usually provided by your ISP or a service like Google DNS
        or Cloudflare DNS). This resolver acts as a middleman that will do the
        heavy lifting of finding the IP address.
      </p>

      <h3>Step 4: Root Name Server</h3>
      <p>
        The recursive resolver starts by asking a root name server. There are 13
        sets of root servers distributed worldwide (though they're actually
        hundreds of servers using anycast routing). The root server doesn't know
        the IP address but can direct the resolver to the appropriate Top-Level
        Domain (TLD) server (.com, .org, .net, etc.).
      </p>

      <h3>Step 5: TLD Name Server</h3>
      <p>
        The TLD server (for example, the .com server) doesn't have the final
        answer either, but it knows which authoritative name server is
        responsible for the specific domain (like google.com).
      </p>

      <h3>Step 6: Authoritative Name Server</h3>
      <p>
        Finally, the authoritative name server for the domain provides the
        actual IP address. This is the definitive answer for where the website
        is located.
      </p>

      <h3>Step 7: Return and Cache</h3>
      <p>
        The recursive resolver receives the IP address, caches it for future
        requests, and returns it to your computer. Your browser can now connect
        to the website using the IP address.
      </p>

      <h2>DNS Record Types</h2>

      <p>DNS servers store different types of records for various purposes:</p>

      <ul>
        <li>
          <strong>A Record:</strong> Maps a domain name to an IPv4 address
          (e.g., example.com → 93.184.216.34)
        </li>
        <li>
          <strong>AAAA Record:</strong> Maps a domain name to an IPv6 address
        </li>
        <li>
          <strong>CNAME Record:</strong> Creates an alias from one domain to
          another (e.g., www.example.com → example.com)
        </li>
        <li>
          <strong>MX Record:</strong> Specifies mail servers for receiving email
        </li>
        <li>
          <strong>TXT Record:</strong> Holds text information for various
          purposes like email verification and security
        </li>
        <li>
          <strong>NS Record:</strong> Specifies authoritative name servers for a
          domain
        </li>
        <li>
          <strong>SOA Record:</strong> Contains administrative information about
          a domain
        </li>
        <li>
          <strong>PTR Record:</strong> Used for reverse DNS lookups (IP address
          to domain name)
        </li>
      </ul>

      <h2>DNS Caching and TTL</h2>

      <p>
        To improve performance, DNS responses are cached at multiple levels:
      </p>

      <ul>
        <li>Browser cache</li>
        <li>Operating system cache</li>
        <li>Router cache</li>
        <li>ISP's recursive resolver cache</li>
      </ul>

      <p>
        Each DNS record has a TTL (Time To Live) value that specifies how long
        the record can be cached before it must be refreshed. TTL values
        typically range from a few minutes to several days:
      </p>

      <ul>
        <li>
          <strong>Short TTL (60-300 seconds):</strong> Used when changes are
          expected soon
        </li>
        <li>
          <strong>Medium TTL (1-4 hours):</strong> Common for most websites
        </li>
        <li>
          <strong>Long TTL (24-48 hours):</strong> For very stable, rarely
          changing records
        </li>
      </ul>

      <h2>Popular DNS Providers</h2>

      <p>
        While most people use their ISP's default DNS servers, alternative DNS
        providers offer various benefits:
      </p>

      <h3>Google Public DNS (8.8.8.8 / 8.8.4.4)</h3>
      <ul>
        <li>Fast and reliable</li>
        <li>Free to use</li>
        <li>Strong infrastructure</li>
        <li>Some privacy concerns due to Google's data collection</li>
      </ul>

      <h3>Cloudflare DNS (1.1.1.1 / 1.0.0.1)</h3>
      <ul>
        <li>Emphasis on privacy (claims not to log queries)</li>
        <li>Very fast performance</li>
        <li>Free to use</li>
        <li>Privacy-focused policies</li>
      </ul>

      <h3>Quad9 (9.9.9.9)</h3>
      <ul>
        <li>Blocks malicious domains</li>
        <li>Privacy-focused (no personal data logging)</li>
        <li>Free to use</li>
        <li>Security-first approach</li>
      </ul>

      <h3>OpenDNS (208.67.222.222 / 208.67.220.220)</h3>
      <ul>
        <li>Customizable content filtering</li>
        <li>Phishing protection</li>
        <li>Free and paid tiers</li>
        <li>Parental controls available</li>
      </ul>

      <h2>DNS Security Concerns</h2>

      <h3>DNS Hijacking</h3>
      <p>
        Attackers can redirect your DNS queries to malicious servers, sending
        you to fake websites designed to steal your information. This can happen
        through:
      </p>
      <ul>
        <li>Router compromise</li>
        <li>Malware on your device</li>
        <li>ISP-level attacks</li>
      </ul>

      <h3>DNS Spoofing/Cache Poisoning</h3>
      <p>
        Attackers inject false DNS records into a resolver's cache, causing it
        to return incorrect IP addresses. This can redirect users to malicious
        sites while they think they're visiting legitimate ones.
      </p>

      <h3>DNS Amplification Attacks</h3>
      <p>
        Attackers exploit DNS servers to launch DDoS (Distributed Denial of
        Service) attacks by sending small queries that generate large responses,
        overwhelming target systems.
      </p>

      <h3>Privacy Concerns</h3>
      <p>Traditional DNS queries are unencrypted, meaning:</p>
      <ul>
        <li>Your ISP can see every website you visit</li>
        <li>DNS queries can be intercepted and monitored</li>
        <li>Your browsing history can be tracked and sold</li>
        <li>Government surveillance can capture DNS traffic</li>
      </ul>

      <h2>DNS Security Solutions</h2>

      <h3>DNSSEC (DNS Security Extensions)</h3>
      <p>
        DNSSEC adds digital signatures to DNS records, ensuring that responses
        haven't been tampered with. It helps prevent DNS spoofing and cache
        poisoning but doesn't encrypt queries.
      </p>

      <h3>DNS over HTTPS (DoH)</h3>
      <p>
        DoH encrypts DNS queries by sending them over HTTPS connections,
        preventing ISPs and others from seeing which websites you're visiting.
        Supported by modern browsers like Firefox and Chrome.
      </p>

      <h3>DNS over TLS (DoT)</h3>
      <p>
        Similar to DoH, DoT encrypts DNS queries but uses a dedicated port (853)
        and the TLS protocol. Provides privacy but is easier for networks to
        block than DoH.
      </p>

      <h2>How to Change Your DNS Settings</h2>

      <h3>On Windows</h3>
      <ol>
        <li>Open Network Settings</li>
        <li>Click "Change adapter options"</li>
        <li>Right-click your connection and select "Properties"</li>
        <li>Select "Internet Protocol Version 4 (TCP/IPv4)"</li>
        <li>Click "Properties"</li>
        <li>Select "Use the following DNS server addresses"</li>
        <li>Enter your preferred DNS servers</li>
      </ol>

      <h3>On macOS</h3>
      <ol>
        <li>Open System Preferences → Network</li>
        <li>Select your connection and click "Advanced"</li>
        <li>Go to the DNS tab</li>
        <li>Click + to add DNS servers</li>
        <li>Enter your preferred DNS addresses</li>
      </ol>

      <h3>On Router (Affects All Devices)</h3>
      <ol>
        <li>Access your router's admin panel (usually 192.168.1.1)</li>
        <li>Log in with admin credentials</li>
        <li>Find DNS settings (often under WAN or Internet settings)</li>
        <li>Enter your preferred DNS servers</li>
        <li>Save and restart router</li>
      </ol>

      <h2>DNS Performance and Troubleshooting</h2>

      <h3>Testing DNS Speed</h3>
      <p>You can test DNS resolver speed using tools like:</p>
      <ul>
        <li>DNSPerf.com for global DNS performance statistics</li>
        <li>
          <code>nslookup</code> command-line tool for manual testing
        </li>
        <li>DNS Benchmark tools for comparing multiple providers</li>
      </ul>

      <h3>Common DNS Issues</h3>
      <ul>
        <li>
          <strong>"DNS server not responding":</strong> Try changing DNS servers
          or restarting router
        </li>
        <li>
          <strong>Slow website loading:</strong> Could be slow DNS resolution;
          test alternative DNS providers
        </li>
        <li>
          <strong>Can't access certain websites:</strong> DNS cache might be
          corrupted; flush DNS cache
        </li>
        <li>
          <strong>Wrong website loading:</strong> Possible DNS hijacking; scan
          for malware
        </li>
      </ul>

      <h3>Flushing DNS Cache</h3>
      <p>To clear your local DNS cache:</p>
      <ul>
        <li>
          <strong>Windows:</strong> <code>ipconfig /flushdns</code>
        </li>
        <li>
          <strong>macOS:</strong>{' '}
          <code>
            sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
          </code>
        </li>
        <li>
          <strong>Linux:</strong>{' '}
          <code>sudo systemd-resolve --flush-caches</code>
        </li>
      </ul>

      <h2>Conclusion</h2>

      <p>
        DNS is a fundamental part of how the internet works, translating
        human-friendly domain names into computer-readable IP addresses. While
        it operates invisibly in the background, understanding DNS helps you:
      </p>

      <ul>
        <li>Improve your internet speed by choosing faster DNS servers</li>
        <li>Enhance security by using DNS providers with threat protection</li>
        <li>
          Protect privacy through encrypted DNS protocols like DoH and DoT
        </li>
        <li>Troubleshoot connection issues more effectively</li>
        <li>Make informed decisions about your internet configuration</li>
      </ul>

      <p>
        As cyber threats evolve and privacy becomes increasingly important,
        understanding and properly configuring your DNS settings is a simple yet
        powerful step toward a faster, safer, and more private internet
        experience.
      </p>
    </>
  );
}
