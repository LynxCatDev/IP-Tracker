import React from 'react';

export function WhatIsIPAddressContent() {
  return (
    <>
      <p className="lead">
        Every device connected to the internet has a unique identifier called an
        IP address. Understanding what an IP address is and how it works is
        fundamental to understanding how the internet operates.
      </p>

      <h2>What is an IP Address?</h2>
      <p>
        An IP (Internet Protocol) address is a numerical label assigned to each
        device connected to a computer network that uses the Internet Protocol
        for communication. Think of it as a mailing address for your computer or
        smartphone—it tells the internet where to send information you request.
      </p>

      <p>
        Just like your home address allows the postal service to deliver mail to
        your doorstep, your IP address allows data packets to find their way to
        your device across the vast network of the internet.
      </p>

      <h2>The Two Main Types of IP Addresses</h2>

      <h3>IPv4 Addresses</h3>
      <p>
        IPv4 (Internet Protocol version 4) is the most widely used format. It
        consists of four numbers separated by periods, with each number ranging
        from 0 to 255. For example: <code>192.168.1.1</code> or{' '}
        <code>172.16.254.1</code>
      </p>

      <p>
        IPv4 can provide approximately 4.3 billion unique addresses. While this
        seemed like plenty when the protocol was developed in the 1980s, the
        explosive growth of internet-connected devices has nearly exhausted the
        available IPv4 addresses.
      </p>

      <h3>IPv6 Addresses</h3>
      <p>
        IPv6 (Internet Protocol version 6) was developed to solve the address
        shortage problem. It uses a much longer format consisting of eight
        groups of four hexadecimal digits separated by colons. For example:{' '}
        <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>
      </p>

      <p>
        IPv6 can provide approximately 340 undecillion addresses (that's 340
        followed by 36 zeros), which is more than enough to give every grain of
        sand on Earth its own IP address.
      </p>

      <h2>Public vs. Private IP Addresses</h2>

      <h3>Public IP Addresses</h3>
      <p>
        A public IP address is the address assigned to your network by your
        Internet Service Provider (ISP). This is the address that the rest of
        the internet sees when your device communicates online. Public IP
        addresses are:
      </p>
      <ul>
        <li>Unique across the entire internet</li>
        <li>Assigned by your ISP</li>
        <li>Visible to websites and services you connect to</li>
        <li>Used to route data from the internet to your network</li>
      </ul>

      <h3>Private IP Addresses</h3>
      <p>
        Private IP addresses are used within your local network (home or
        office). Your router assigns private IP addresses to devices on your
        network. These addresses:
      </p>
      <ul>
        <li>
          Are not unique globally—many networks use the same private addresses
        </li>
        <li>Cannot be accessed directly from the internet</li>
        <li>
          Are hidden behind your public IP address through a process called NAT
          (Network Address Translation)
        </li>
        <li>
          Typically fall in these ranges:
          <ul>
            <li>10.0.0.0 to 10.255.255.255</li>
            <li>172.16.0.0 to 172.31.255.255</li>
            <li>192.168.0.0 to 192.168.255.255</li>
          </ul>
        </li>
      </ul>

      <h2>Dynamic vs. Static IP Addresses</h2>

      <h3>Dynamic IP Addresses</h3>
      <p>
        Most home users have dynamic IP addresses, which means the IP address
        can change periodically. Your ISP assigns you an IP address from a pool
        of available addresses, and this address may change when you restart
        your router or after a certain period of time.
      </p>

      <p>Advantages of dynamic IP addresses:</p>
      <ul>
        <li>More cost-effective for ISPs to manage</li>
        <li>Automatically configured—no user intervention needed</li>
        <li>Can provide some privacy benefits as your address changes</li>
      </ul>

      <h3>Static IP Addresses</h3>
      <p>
        A static IP address doesn't change. Once assigned, it remains the same
        until you manually change it or close your account. Static IP addresses
        are typically used by:
      </p>
      <ul>
        <li>Web servers and email servers that need a consistent address</li>
        <li>Businesses running their own services</li>
        <li>Remote access systems that need a reliable connection point</li>
        <li>Gaming servers and VoIP services</li>
      </ul>

      <h2>How IP Addresses Work</h2>

      <p>
        When you type a website address (like google.com) into your browser,
        several things happen:
      </p>

      <ol>
        <li>
          Your computer contacts a DNS (Domain Name System) server to translate
          the website name into its IP address
        </li>
        <li>
          Your device creates a request packet with your IP address as the
          "return address" and the website's IP address as the destination
        </li>
        <li>
          The packet travels through multiple routers across the internet, with
          each router reading the destination IP address to determine where to
          send it next
        </li>
        <li>
          The packet reaches the destination server, which processes the request
        </li>
        <li>
          The server sends response packets back to your IP address using the
          same routing process
        </li>
        <li>Your device receives and displays the website content</li>
      </ol>

      <p>
        This entire process happens in milliseconds, with data packets often
        taking different paths to reach the same destination and being
        reassembled at the receiving end.
      </p>

      <h2>How Are IP Addresses Assigned?</h2>

      <p>
        IP addresses are managed by several organizations working together in a
        hierarchical system:
      </p>

      <ul>
        <li>
          <strong>IANA (Internet Assigned Numbers Authority):</strong> The
          global authority that oversees IP address allocation worldwide
        </li>
        <li>
          <strong>RIRs (Regional Internet Registries):</strong> Five
          organizations that manage IP addresses for different regions of the
          world (ARIN for North America, RIPE NCC for Europe, APNIC for
          Asia-Pacific, LACNIC for Latin America, and AFRINIC for Africa)
        </li>
        <li>
          <strong>ISPs (Internet Service Providers):</strong> Receive blocks of
          IP addresses from RIRs and assign them to customers
        </li>
        <li>
          <strong>Your Router:</strong> Assigns private IP addresses to devices
          on your local network
        </li>
      </ul>

      <h2>Why IP Addresses Matter</h2>

      <p>Understanding IP addresses is important because they:</p>

      <ul>
        <li>
          Enable all internet communication—without them, devices couldn't find
          each other
        </li>
        <li>
          Can reveal your approximate geographic location and ISP information
        </li>
        <li>
          Are used for security purposes, like blocking or allowing access to
          services
        </li>
        <li>Help diagnose network problems and optimize connectivity</li>
        <li>
          Play a role in online privacy and can be used to track your online
          activities
        </li>
      </ul>

      <h2>Conclusion</h2>

      <p>
        IP addresses are the foundation of internet communication, acting as
        unique identifiers that allow billions of devices to connect and
        exchange information. Whether you're browsing websites, streaming
        videos, or sending emails, IP addresses are working behind the scenes to
        make it all possible.
      </p>

      <p>
        As the internet continues to grow, the transition from IPv4 to IPv6 will
        ensure that we never run out of IP addresses, while new technologies and
        protocols continue to make internet communication faster, more secure,
        and more efficient.
      </p>
    </>
  );
}
