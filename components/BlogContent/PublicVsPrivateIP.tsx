import React from 'react';

export function PublicVsPrivateIPContent() {
  return (
    <>
      <p className="lead">
        Every device connected to the internet has an IP address, but did you
        know there are two distinct types? Understanding the difference between
        public and private IP addresses is fundamental to comprehending how the
        internet works and how your home network stays secure.
      </p>

      <h2>What is a Public IP Address?</h2>
      <p>
        A public IP address is a globally unique identifier assigned to your
        network by your Internet Service Provider (ISP). Think of it as your
        home's street address on the internet — it's how the rest of the world
        finds and communicates with your network.
      </p>

      <h3>Key Characteristics of Public IPs</h3>
      <ul>
        <li>
          <strong>Globally unique:</strong> No two devices on the internet can
          have the same public IP address at the same time
        </li>
        <li>
          <strong>Assigned by ISPs:</strong> Your Internet Service Provider
          allocates your public IP from their pool of addresses
        </li>
        <li>
          <strong>Internet routable:</strong> Can be accessed from anywhere on
          the internet
        </li>
        <li>
          <strong>Limited supply:</strong> IPv4 public addresses are scarce,
          which drove the development of private IP addresses and NAT
        </li>
      </ul>

      <h3>How to Find Your Public IP Address</h3>
      <p>Finding your public IP address is simple:</p>
      <ul>
        <li>Use our IP Tracker tool on this website</li>
        <li>Search "what is my IP" in any search engine</li>
        <li>Visit websites like ipinfo.io or whatismyip.com</li>
        <li>Check your router's admin panel (WAN/Internet settings)</li>
      </ul>

      <h2>What is a Private IP Address?</h2>
      <p>
        Private IP addresses are used within local networks (like your home or
        office) to identify individual devices. These addresses are not routable
        on the public internet — they only work within your local network.
      </p>

      <h3>Reserved Private IP Ranges</h3>
      <p>
        The Internet Assigned Numbers Authority (IANA) has reserved three blocks
        of IP addresses specifically for private use:
      </p>
      <ul>
        <li>
          <strong>Class A:</strong> 10.0.0.0 to 10.255.255.255 (10.0.0.0/8) —
          16,777,216 addresses for very large networks
        </li>
        <li>
          <strong>Class B:</strong> 172.16.0.0 to 172.31.255.255 (172.16.0.0/12)
          — 1,048,576 addresses for medium-sized networks
        </li>
        <li>
          <strong>Class C:</strong> 192.168.0.0 to 192.168.255.255
          (192.168.0.0/16) — 65,536 addresses for small networks (most home
          routers use this)
        </li>
      </ul>

      <h3>Key Characteristics of Private IPs</h3>
      <ul>
        <li>
          <strong>Not globally unique:</strong> The same private IP can be used
          in millions of different networks worldwide
        </li>
        <li>
          <strong>Assigned by routers:</strong> Your router assigns private IPs
          to devices using DHCP (Dynamic Host Configuration Protocol)
        </li>
        <li>
          <strong>Not internet routable:</strong> Cannot directly communicate
          with the internet; requires NAT translation
        </li>
        <li>
          <strong>Unlimited supply:</strong> Can be reused in any private
          network
        </li>
      </ul>

      <h3>How to Find Your Private IP Address</h3>
      <p>Finding your private IP depends on your operating system:</p>

      <h4>Windows</h4>
      <ol>
        <li>
          Press Windows + R, type <code>cmd</code>, press Enter
        </li>
        <li>
          Type <code>ipconfig</code> and press Enter
        </li>
        <li>Look for "IPv4 Address" under your network adapter</li>
      </ol>

      <h4>macOS</h4>
      <ol>
        <li>Click the Apple menu → System Preferences → Network</li>
        <li>Select your connection (Wi-Fi or Ethernet)</li>
        <li>Your IP address is displayed on the right</li>
      </ol>

      <h4>Linux</h4>
      <ol>
        <li>Open Terminal</li>
        <li>
          Type <code>ip addr</code> or <code>hostname -I</code>
        </li>
        <li>Look for the address associated with your network interface</li>
      </ol>

      <h4>Mobile Devices</h4>
      <ul>
        <li>
          <strong>iPhone:</strong> Settings → Wi-Fi → tap the (i) next to your
          network
        </li>
        <li>
          <strong>Android:</strong> Settings → Network & Internet → Wi-Fi → tap
          your network → Details
        </li>
      </ul>

      <h2>How NAT Connects Private Networks to the Internet</h2>
      <p>
        Network Address Translation (NAT) is the technology that bridges the gap
        between private and public IP addresses. It's what allows multiple
        devices in your home to share a single public IP address.
      </p>

      <h3>How NAT Works</h3>
      <ol>
        <li>
          Your device (e.g., laptop with IP 192.168.1.5) sends a request to
          visit google.com
        </li>
        <li>
          The request reaches your router, which notes the internal IP and port
        </li>
        <li>
          Your router replaces your private IP with its public IP (e.g.,
          203.0.113.1) and assigns a unique port number
        </li>
        <li>The request goes to Google's servers from your public IP</li>
        <li>Google responds to your public IP and port</li>
        <li>
          Your router receives the response, checks its translation table, and
          forwards the data to your laptop's private IP
        </li>
      </ol>

      <h3>Benefits of NAT</h3>
      <ul>
        <li>
          <strong>IP Address Conservation:</strong> Millions of devices can
          share limited public IPv4 addresses
        </li>
        <li>
          <strong>Built-in Security:</strong> External connections cannot
          directly reach internal devices without port forwarding
        </li>
        <li>
          <strong>Network Flexibility:</strong> Change your internal network
          structure without affecting your public IP
        </li>
      </ul>

      <h2>Public vs Private IP: Side-by-Side Comparison</h2>

      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Public IP</th>
            <th>Private IP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Scope</td>
            <td>Global (entire internet)</td>
            <td>Local (within network only)</td>
          </tr>
          <tr>
            <td>Uniqueness</td>
            <td>Globally unique</td>
            <td>Unique only within network</td>
          </tr>
          <tr>
            <td>Assignment</td>
            <td>By ISP</td>
            <td>By router (DHCP)</td>
          </tr>
          <tr>
            <td>Internet Access</td>
            <td>Direct</td>
            <td>Requires NAT</td>
          </tr>
          <tr>
            <td>Visibility</td>
            <td>Visible to websites</td>
            <td>Hidden from internet</td>
          </tr>
          <tr>
            <td>Example</td>
            <td>203.0.113.45</td>
            <td>192.168.1.100</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>Often additional fees for static</td>
            <td>Free</td>
          </tr>
        </tbody>
      </table>

      <h2>Static vs Dynamic IP Addresses</h2>
      <p>Both public and private IPs can be either static or dynamic:</p>

      <h3>Static IP Addresses</h3>
      <p>
        A static IP never changes. It's manually configured and remains
        constant.
      </p>
      <ul>
        <li>
          <strong>Use cases:</strong> Web servers, email servers, remote access,
          VPN endpoints, networked printers
        </li>
        <li>
          <strong>Pros:</strong> Reliable for hosting, easy remote access,
          consistent DNS records
        </li>
        <li>
          <strong>Cons:</strong> Higher cost for public static IPs, requires
          manual configuration, potential security risk if targeted
        </li>
      </ul>

      <h3>Dynamic IP Addresses</h3>
      <p>A dynamic IP is automatically assigned and may change periodically.</p>
      <ul>
        <li>
          <strong>Use cases:</strong> Home internet connections, mobile devices,
          most personal computers
        </li>
        <li>
          <strong>Pros:</strong> Lower cost, automatic configuration, slight
          privacy benefit from changing IPs
        </li>
        <li>
          <strong>Cons:</strong> Not suitable for hosting, remote access
          requires dynamic DNS services
        </li>
      </ul>

      <h2>Security Implications</h2>

      <h3>Public IP Security Concerns</h3>
      <p>Your public IP address can reveal:</p>
      <ul>
        <li>Your approximate geographic location (city level)</li>
        <li>Your ISP</li>
        <li>Your connection type and speed</li>
      </ul>
      <p>Malicious actors with your public IP could potentially:</p>
      <ul>
        <li>Attempt to exploit vulnerabilities in your router</li>
        <li>Launch targeted DDoS attacks</li>
        <li>Try to access unsecured services on your network</li>
      </ul>

      <h3>How Private IPs Enhance Security</h3>
      <p>Private IP addresses provide a layer of security through obscurity:</p>
      <ul>
        <li>
          Devices behind NAT cannot be directly addressed from the internet
        </li>
        <li>
          Attackers must compromise your router first to reach internal devices
        </li>
        <li>Internal network structure is hidden from external observation</li>
      </ul>

      <h3>Best Practices</h3>
      <ul>
        <li>
          <strong>Use a VPN:</strong> Masks your public IP and encrypts traffic
        </li>
        <li>
          <strong>Keep router firmware updated:</strong> Patches security
          vulnerabilities
        </li>
        <li>
          <strong>Use strong router passwords:</strong> Prevent unauthorized
          access to your network
        </li>
        <li>
          <strong>Disable unused port forwarding:</strong> Reduces attack
          surface
        </li>
        <li>
          <strong>Enable firewall:</strong> Both on your router and devices
        </li>
      </ul>

      <h2>IPv4 Exhaustion and the Role of Private IPs</h2>
      <p>
        The IPv4 address space provides approximately 4.3 billion unique
        addresses. With billions of devices connected to the internet, we've
        essentially run out of public IPv4 addresses.
      </p>
      <p>
        Private IP addresses and NAT were crucial in extending the life of IPv4
        by allowing:
      </p>
      <ul>
        <li>Multiple devices to share a single public IP</li>
        <li>Organizations to use the same private address ranges internally</li>
        <li>The internet to grow beyond its original address limitations</li>
      </ul>
      <p>
        IPv6, with its vastly larger address space, is designed to eventually
        eliminate the need for NAT and private addresses, but the transition is
        gradual and ongoing.
      </p>

      <h2>Common Use Cases</h2>

      <h3>Home Network</h3>
      <p>In a typical home:</p>
      <ul>
        <li>
          <strong>Public IP:</strong> Assigned to your router's WAN port by your
          ISP (e.g., 98.76.54.32)
        </li>
        <li>
          <strong>Private IPs:</strong> Your router assigns to each device —
          laptop (192.168.1.10), phone (192.168.1.11), smart TV (192.168.1.12)
        </li>
      </ul>

      <h3>Business Network</h3>
      <p>Companies often have more complex setups:</p>
      <ul>
        <li>
          Multiple public IPs for different services (web server, email, VPN)
        </li>
        <li>VLANs with different private IP subnets for departments</li>
        <li>DMZ networks for public-facing servers</li>
      </ul>

      <h3>Cloud and Data Centers</h3>
      <p>Cloud providers use both extensively:</p>
      <ul>
        <li>Public IPs for load balancers, gateways, and external services</li>
        <li>Private IPs for internal communication between servers</li>
        <li>Elastic IPs that can move between instances</li>
      </ul>

      <h2>Troubleshooting Tips</h2>

      <h3>Can't Connect to the Internet?</h3>
      <ul>
        <li>
          Check if you have a valid private IP (not 169.254.x.x, which indicates
          DHCP failure)
        </li>
        <li>Verify your router has a public IP assigned</li>
        <li>Restart your router to get a new DHCP lease</li>
      </ul>

      <h3>Remote Access Issues?</h3>
      <ul>
        <li>Confirm port forwarding is correctly configured</li>
        <li>
          Check if your ISP uses Carrier-Grade NAT (CGNAT), which can block
          incoming connections
        </li>
        <li>Consider using a dynamic DNS service if your public IP changes</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Understanding the distinction between public and private IP addresses is
        essential for anyone managing a network or troubleshooting connectivity
        issues. Public IPs serve as your network's identity on the internet,
        while private IPs organize communication within your local network.
      </p>
      <p>
        Together with NAT, these addressing schemes allow billions of devices to
        connect to the internet using a limited pool of public addresses, all
        while providing a basic layer of security that keeps your internal
        devices hidden from direct external access.
      </p>
      <p>
        As the internet continues to evolve with IPv6, the relationship between
        public and private addressing may change, but for now, this dual-IP
        architecture remains the foundation of how we connect our devices to the
        world.
      </p>
    </>
  );
}
