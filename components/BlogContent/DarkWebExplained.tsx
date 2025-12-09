import React from 'react';

export function DarkWebExplainedContent() {
  return (
    <>
      <p className="lead">
        The "dark web" is often portrayed in media as a mysterious underworld of
        criminal activity. While it does host illegal marketplaces, the reality
        is far more nuanced. Understanding what the dark web actually is — and
        isn't — helps separate fact from fiction and reveals its legitimate uses
        for privacy and free speech.
      </p>

      <h2>The Three Layers of the Internet</h2>
      <p>
        To understand the dark web, you first need to understand how the
        internet is structured:
      </p>

      <h3>Surface Web (4-5%)</h3>
      <p>
        This is the internet most people know — websites indexed by search
        engines like Google, Bing, and DuckDuckGo. When you search for something
        and click a result, you're browsing the surface web.
      </p>
      <ul>
        <li>News sites, social media, online stores</li>
        <li>Publicly accessible to anyone</li>
        <li>Indexed and searchable</li>
        <li>Examples: Wikipedia, YouTube, Amazon</li>
      </ul>

      <h3>Deep Web (90-95%)</h3>
      <p>
        The deep web is simply content not indexed by search engines. Despite
        its ominous name, you use it every day:
      </p>
      <ul>
        <li>Your email inbox</li>
        <li>Online banking portals</li>
        <li>Private social media profiles</li>
        <li>Medical records and databases</li>
        <li>Academic databases and journals</li>
        <li>Company intranets</li>
        <li>Paywalled content</li>
      </ul>
      <p>
        The deep web is massive because most online content requires
        authentication or isn't meant to be publicly searchable.
      </p>

      <h3>Dark Web (0.01%)</h3>
      <p>
        A small portion of the deep web that requires special software (like
        Tor) to access. Sites use encryption and routing techniques to hide both
        the user's and the server's identity.
      </p>

      <h2>How the Dark Web Works</h2>

      <h3>Onion Routing</h3>
      <p>
        The dark web primarily operates through the Tor (The Onion Router)
        network. When you access a dark web site:
      </p>
      <ol>
        <li>Your connection bounces through multiple encrypted relays</li>
        <li>Each relay only knows the previous and next hop</li>
        <li>No single point can see both your identity and destination</li>
        <li>The website itself is also hidden behind layers of encryption</li>
      </ol>

      <h3>.onion Addresses</h3>
      <p>
        Dark web sites use .onion addresses — long strings of random characters
        like:
      </p>
      <code>
        facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion
      </code>
      <p>
        These addresses are generated cryptographically and can only be accessed
        through Tor. They provide anonymity for both visitors and the site
        operators.
      </p>

      <h2>What's Actually on the Dark Web?</h2>

      <h3>Legitimate Uses</h3>
      <p>
        Contrary to popular belief, much of the dark web serves legitimate
        purposes:
      </p>

      <h4>Privacy-Focused Services</h4>
      <ul>
        <li>
          <strong>ProtonMail:</strong> Encrypted email service with .onion
          access
        </li>
        <li>
          <strong>DuckDuckGo:</strong> Privacy-focused search engine
        </li>
        <li>
          <strong>Facebook:</strong> Yes, Facebook has an official .onion site
          for users in censored countries
        </li>
      </ul>

      <h4>Journalism and Whistleblowing</h4>
      <ul>
        <li>
          <strong>SecureDrop:</strong> Used by major news organizations (NY
          Times, Washington Post, The Guardian) for anonymous tips
        </li>
        <li>
          <strong>WikiLeaks:</strong> Document submission platform
        </li>
        <li>
          Journalists in authoritarian countries use the dark web to communicate
          safely
        </li>
      </ul>

      <h4>Circumventing Censorship</h4>
      <ul>
        <li>
          Citizens in countries like China, Iran, and North Korea use Tor to
          access blocked information
        </li>
        <li>
          <strong>BBC News:</strong> Offers a .onion site for censored regions
        </li>
        <li>
          Human rights organizations operate on the dark web to reach oppressed
          populations
        </li>
      </ul>

      <h4>Privacy Communities</h4>
      <ul>
        <li>Forums discussing privacy tools and techniques</li>
        <li>Cryptocurrency discussions</li>
        <li>Cybersecurity research communities</li>
        <li>Activist coordination in oppressive regimes</li>
      </ul>

      <h3>The Illegal Side</h3>
      <p>
        The dark web does host illegal activities, which is what draws most
        media attention:
      </p>
      <ul>
        <li>
          <strong>Marketplaces:</strong> Drug sales, stolen data, counterfeit
          goods
        </li>
        <li>
          <strong>Hacking services:</strong> Malware, DDoS attacks for hire
        </li>
        <li>
          <strong>Fraud:</strong> Stolen credit cards, identity documents
        </li>
        <li>
          <strong>Illegal content:</strong> Various forms of prohibited material
        </li>
      </ul>
      <p>
        <strong>Important:</strong> Accessing or participating in illegal
        activities on the dark web is still illegal. Law enforcement agencies
        actively monitor and have successfully shut down many criminal
        operations.
      </p>

      <h2>Famous Dark Web Cases</h2>

      <h3>Silk Road (2011-2013)</h3>
      <p>
        The first major dark web marketplace, primarily for drugs. Run by "Dread
        Pirate Roberts" (Ross Ulbricht), it was shut down by the FBI in 2013.
        Ulbricht is serving life in prison. The case demonstrated that dark web
        anonymity isn't absolute.
      </p>

      <h3>AlphaBay (2014-2017)</h3>
      <p>
        Became the largest dark web market after Silk Road's closure. Shut down
        in a coordinated international operation. Its founder was arrested in
        Thailand.
      </p>

      <h3>Successful Law Enforcement</h3>
      <p>
        Despite the anonymity, authorities have repeatedly proven they can track
        down dark web criminals through:
      </p>
      <ul>
        <li>Operational security mistakes by criminals</li>
        <li>Undercover operations</li>
        <li>Tracking cryptocurrency transactions</li>
        <li>Exploiting software vulnerabilities</li>
        <li>Old-fashioned detective work</li>
      </ul>

      <h2>Dark Web Myths vs Reality</h2>

      <h3>Myth: "Everything on the dark web is illegal"</h3>
      <p>
        <strong>Reality:</strong> Many legitimate organizations maintain .onion
        sites. The dark web is a tool — like a kitchen knife, it can be used for
        good or bad purposes.
      </p>

      <h3>Myth: "You'll be hacked immediately if you visit"</h3>
      <p>
        <strong>Reality:</strong> Simply browsing with Tor doesn't make you
        vulnerable. Risks come from downloading files, enabling scripts on
        untrusted sites, or engaging in illegal activities.
      </p>

      <h3>Myth: "The dark web is huge"</h3>
      <p>
        <strong>Reality:</strong> The dark web is tiny compared to the regular
        internet. Estimates suggest only tens of thousands of .onion sites
        exist, many of which are inactive.
      </p>

      <h3>Myth: "You're completely anonymous"</h3>
      <p>
        <strong>Reality:</strong> Tor provides strong anonymity but isn't
        perfect. User mistakes, sophisticated attacks, and law enforcement
        techniques can compromise anonymity.
      </p>

      <h3>Myth: "Hiring hitmen on the dark web"</h3>
      <p>
        <strong>Reality:</strong> These "services" are virtually all scams. No
        verified cases of dark web hitman services actually existing. They're
        either scams taking money or law enforcement honeypots.
      </p>

      <h2>How to Access the Dark Web Safely</h2>
      <p>
        <strong>Disclaimer:</strong> This information is for educational
        purposes. Never access illegal content or engage in illegal activities.
      </p>

      <h3>Requirements</h3>
      <ol>
        <li>
          <strong>Tor Browser:</strong> Download only from the official
          torproject.org website
        </li>
        <li>
          <strong>Security awareness:</strong> Understand the risks before
          exploring
        </li>
        <li>
          <strong>Common sense:</strong> If something seems too good to be true
          or illegal, avoid it
        </li>
      </ol>

      <h3>Safety Guidelines</h3>
      <ul>
        <li>
          <strong>Never download files:</strong> They may contain malware
        </li>
        <li>
          <strong>Keep JavaScript disabled:</strong> Use the "Safest" security
          level in Tor Browser
        </li>
        <li>
          <strong>Don't provide personal information:</strong> Assume everything
          is a potential scam
        </li>
        <li>
          <strong>Don't make purchases:</strong> Besides legality issues, most
          "vendors" are scammers
        </li>
        <li>
          <strong>Use a VPN additionally:</strong> For extra privacy layer
        </li>
        <li>
          <strong>Consider using a virtual machine:</strong> Isolates any
          potential threats
        </li>
      </ul>

      <h3>Legitimate .onion Sites to Start</h3>
      <ul>
        <li>DuckDuckGo search engine</li>
        <li>ProtonMail email</li>
        <li>The New York Times</li>
        <li>BBC News</li>
        <li>Facebook (for users in censored countries)</li>
      </ul>

      <h2>The Future of the Dark Web</h2>

      <h3>Increasing Legitimate Use</h3>
      <p>
        As privacy concerns grow and surveillance expands, more legitimate
        organizations are establishing dark web presences. Major tech companies
        and news organizations now offer .onion access.
      </p>

      <h3>Law Enforcement Adaptation</h3>
      <p>
        Authorities are becoming more sophisticated at investigating dark web
        crime. While the technology provides anonymity, human mistakes and
        advanced forensics continue to lead to arrests.
      </p>

      <h3>Alternative Networks</h3>
      <p>Besides Tor, other anonymous networks exist:</p>
      <ul>
        <li>
          <strong>I2P:</strong> Focuses on internal services rather than
          accessing the regular internet
        </li>
        <li>
          <strong>Freenet:</strong> Decentralized, censorship-resistant network
        </li>
        <li>
          <strong>ZeroNet:</strong> Peer-to-peer network using Bitcoin
          cryptography
        </li>
      </ul>

      <h2>Should You Explore the Dark Web?</h2>

      <h3>Reasons You Might</h3>
      <ul>
        <li>Educational curiosity about how it works</li>
        <li>Legitimate privacy needs</li>
        <li>Accessing content censored in your country</li>
        <li>Journalism or research purposes</li>
        <li>Testing your organization's security</li>
      </ul>

      <h3>Reasons to Be Cautious</h3>
      <ul>
        <li>Easy to accidentally encounter disturbing content</li>
        <li>Scams are everywhere</li>
        <li>Some content is illegal to even view</li>
        <li>Malware risks if not careful</li>
        <li>May attract unwanted attention in some jurisdictions</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The dark web is neither the criminal paradise nor the mysterious
        underworld that media often portrays. It's a technology — a tool that
        enables anonymity online. Like any tool, it can be used for good or ill.
      </p>
      <p>
        For journalists, activists, and citizens living under oppressive
        regimes, the dark web provides vital protection. For privacy-conscious
        individuals, it offers services free from surveillance. For criminals,
        it provides a marketplace — though one that law enforcement continues to
        successfully infiltrate.
      </p>
      <p>
        Understanding the dark web helps demystify it and enables informed
        discussions about online privacy, anonymity, and the balance between
        security and freedom on the internet.
      </p>
    </>
  );
}
