import React from 'react';

export function InternetSecurityTipsContent() {
  return (
    <>
      <p className="lead">
        In an increasingly connected world, protecting yourself online is no
        longer optional — it's essential. From identity theft to ransomware
        attacks, cyber threats are more sophisticated than ever. This
        comprehensive guide covers practical security measures everyone should
        implement to stay safe online.
      </p>

      <h2>Why Internet Security Matters</h2>
      <p>
        Every day, millions of cyberattacks occur worldwide. The consequences of
        falling victim to these attacks can be severe:
      </p>
      <ul>
        <li>
          <strong>Financial loss:</strong> Stolen credit cards, drained bank
          accounts, fraudulent purchases
        </li>
        <li>
          <strong>Identity theft:</strong> Criminals using your personal
          information to open accounts or commit fraud
        </li>
        <li>
          <strong>Privacy invasion:</strong> Personal photos, messages, and
          documents exposed or leaked
        </li>
        <li>
          <strong>Ransomware:</strong> Files encrypted and held hostage for
          payment
        </li>
        <li>
          <strong>Reputation damage:</strong> Compromised social media accounts
          posting harmful content
        </li>
      </ul>

      <h2>Password Security: Your First Line of Defense</h2>

      <h3>Creating Strong Passwords</h3>
      <p>
        Weak passwords remain one of the most common security vulnerabilities.
        Follow these guidelines:
      </p>
      <ul>
        <li>
          <strong>Length matters most:</strong> Aim for at least 16 characters;
          longer is better
        </li>
        <li>
          <strong>Use a passphrase:</strong> "correct-horse-battery-staple" is
          stronger than "P@ssw0rd!"
        </li>
        <li>
          <strong>Mix character types:</strong> Combine uppercase, lowercase,
          numbers, and symbols
        </li>
        <li>
          <strong>Avoid personal information:</strong> No birthdays, pet names,
          or addresses
        </li>
        <li>
          <strong>Never reuse passwords:</strong> Each account should have a
          unique password
        </li>
      </ul>

      <h3>Use a Password Manager</h3>
      <p>Password managers are essential tools that:</p>
      <ul>
        <li>Generate strong, random passwords for each account</li>
        <li>Store passwords securely with encryption</li>
        <li>Auto-fill login forms to prevent keyloggers</li>
        <li>Sync across all your devices</li>
        <li>Alert you to compromised passwords</li>
      </ul>
      <p>
        Popular options include Bitwarden (free/open-source), 1Password,
        Dashlane, and LastPass. The small investment is worth the significant
        security improvement.
      </p>

      <h3>Enable Two-Factor Authentication (2FA)</h3>
      <p>2FA adds a second verification step beyond your password:</p>
      <ul>
        <li>
          <strong>Authenticator apps (recommended):</strong> Google
          Authenticator, Microsoft Authenticator, Authy
        </li>
        <li>
          <strong>Hardware keys (most secure):</strong> YubiKey, Google Titan
          Security Key
        </li>
        <li>
          <strong>SMS codes (better than nothing):</strong> Vulnerable to SIM
          swapping but still adds protection
        </li>
      </ul>
      <p>
        Enable 2FA on all critical accounts: email, banking, social media, cloud
        storage, and any account with sensitive data.
      </p>

      <h2>Protecting Your Network</h2>

      <h3>Secure Your Home Wi-Fi</h3>
      <ol>
        <li>
          <strong>Change default router credentials:</strong> Factory usernames
          and passwords are publicly known
        </li>
        <li>
          <strong>Use WPA3 encryption:</strong> If unavailable, use WPA2-AES
          (never WEP or WPA)
        </li>
        <li>
          <strong>Create a strong Wi-Fi password:</strong> At least 20
          characters, random and unique
        </li>
        <li>
          <strong>Update router firmware:</strong> Manufacturers release
          security patches regularly
        </li>
        <li>
          <strong>Disable WPS:</strong> Wi-Fi Protected Setup has known
          vulnerabilities
        </li>
        <li>
          <strong>Create a guest network:</strong> Isolate visitors and IoT
          devices from your main network
        </li>
      </ol>

      <h3>Use a VPN on Public Wi-Fi</h3>
      <p>
        Public Wi-Fi networks at cafes, airports, and hotels are prime hunting
        grounds for hackers. A VPN:
      </p>
      <ul>
        <li>Encrypts all your internet traffic</li>
        <li>Prevents eavesdropping on unsecured networks</li>
        <li>Hides your browsing activity from network operators</li>
        <li>Protects sensitive data like passwords and banking information</li>
      </ul>
      <p>
        Choose a reputable VPN provider with a no-logs policy and avoid free
        VPNs that may sell your data.
      </p>

      <h2>Safe Browsing Practices</h2>

      <h3>Recognize Phishing Attempts</h3>
      <p>Phishing remains the most common attack vector. Watch for:</p>
      <ul>
        <li>
          <strong>Suspicious sender addresses:</strong> Look carefully —
          "support@amaz0n.com" is not Amazon
        </li>
        <li>
          <strong>Urgency and threats:</strong> "Your account will be closed in
          24 hours!"
        </li>
        <li>
          <strong>Generic greetings:</strong> "Dear Customer" instead of your
          name
        </li>
        <li>
          <strong>Spelling and grammar errors:</strong> Legitimate companies
          proofread their emails
        </li>
        <li>
          <strong>Suspicious links:</strong> Hover over links to see the real
          destination URL
        </li>
        <li>
          <strong>Unexpected attachments:</strong> Never open attachments you
          weren't expecting
        </li>
      </ul>

      <h3>Verify Website Security</h3>
      <p>Before entering sensitive information:</p>
      <ul>
        <li>
          <strong>Check for HTTPS:</strong> Look for the padlock icon and
          "https://" in the URL
        </li>
        <li>
          <strong>Verify the domain:</strong> Phishing sites use similar-looking
          domains (e.g., "paypa1.com")
        </li>
        <li>
          <strong>Look for trust indicators:</strong> Contact information,
          privacy policy, physical address
        </li>
        <li>
          <strong>Research unknown sites:</strong> Check reviews and reputation
          before making purchases
        </li>
      </ul>

      <h3>Keep Software Updated</h3>
      <p>Software updates often include critical security patches:</p>
      <ul>
        <li>Enable automatic updates for your operating system</li>
        <li>Update browsers immediately when prompted</li>
        <li>Keep all applications current, especially security software</li>
        <li>Regularly update router and IoT device firmware</li>
        <li>Uninstall software you no longer use</li>
      </ul>

      <h2>Device Security</h2>

      <h3>Computer Protection</h3>
      <ul>
        <li>
          <strong>Use antivirus software:</strong> Windows Defender is good;
          consider Bitdefender or Malwarebytes for additional protection
        </li>
        <li>
          <strong>Enable firewall:</strong> Both hardware (router) and software
          (OS) firewalls
        </li>
        <li>
          <strong>Encrypt your hard drive:</strong> BitLocker (Windows) or
          FileVault (macOS)
        </li>
        <li>
          <strong>Lock your screen:</strong> Require password after brief
          inactivity
        </li>
        <li>
          <strong>Disable auto-run:</strong> Prevent malware from USB drives
          executing automatically
        </li>
      </ul>

      <h3>Mobile Device Security</h3>
      <ul>
        <li>
          <strong>Use screen lock:</strong> PIN, pattern, fingerprint, or face
          recognition
        </li>
        <li>
          <strong>Keep iOS/Android updated:</strong> Security patches are
          released frequently
        </li>
        <li>
          <strong>Only install apps from official stores:</strong> Avoid
          sideloading APKs
        </li>
        <li>
          <strong>Review app permissions:</strong> Does a flashlight app really
          need access to your contacts?
        </li>
        <li>
          <strong>Enable remote wipe:</strong> Find My iPhone / Find My Device
          can protect data if lost
        </li>
        <li>
          <strong>Encrypt your device:</strong> Usually enabled by default on
          modern phones
        </li>
      </ul>

      <h2>Social Media Security</h2>

      <h3>Protect Your Accounts</h3>
      <ul>
        <li>Use unique, strong passwords for each platform</li>
        <li>Enable 2FA on all social media accounts</li>
        <li>Review connected third-party apps and remove unused ones</li>
        <li>Log out of sessions on devices you no longer use</li>
      </ul>

      <h3>Manage Your Privacy</h3>
      <ul>
        <li>
          <strong>Limit public information:</strong> Reduce what strangers can
          see about you
        </li>
        <li>
          <strong>Be cautious about location sharing:</strong> Posting real-time
          location can be risky
        </li>
        <li>
          <strong>Think before you post:</strong> Once online, content is
          difficult to remove completely
        </li>
        <li>
          <strong>Be wary of social engineering:</strong> Scammers use public
          info to seem legitimate
        </li>
      </ul>

      <h2>Email Security</h2>

      <h3>Protect Your Email Account</h3>
      <p>Your email is often the key to all your other accounts:</p>
      <ul>
        <li>Use a very strong, unique password</li>
        <li>Enable 2FA — preferably with an authenticator app</li>
        <li>Set up account recovery options (backup email, phone)</li>
        <li>Review account activity regularly for suspicious access</li>
        <li>Never share your email password with anyone</li>
      </ul>

      <h3>Email Best Practices</h3>
      <ul>
        <li>
          Don't click links in unexpected emails — navigate directly to sites
        </li>
        <li>
          Verify requests for money or sensitive info through another channel
        </li>
        <li>Be skeptical of "too good to be true" offers</li>
        <li>Report phishing attempts to your email provider</li>
        <li>
          Use encrypted email for sensitive communications (ProtonMail,
          Tutanota)
        </li>
      </ul>

      <h2>Financial Security Online</h2>

      <h3>Safe Online Banking</h3>
      <ul>
        <li>Only access banking on secure, private networks</li>
        <li>Type the URL directly — never click links in emails</li>
        <li>Log out completely after each session</li>
        <li>Enable transaction alerts</li>
        <li>Review statements regularly for unauthorized charges</li>
        <li>Consider using a dedicated browser or profile for banking</li>
      </ul>

      <h3>Safe Online Shopping</h3>
      <ul>
        <li>Use credit cards (better fraud protection than debit)</li>
        <li>Consider virtual card numbers for online purchases</li>
        <li>Shop only on reputable, secure websites</li>
        <li>Be cautious of deals that seem too good to be true</li>
        <li>Keep records of purchases and confirmations</li>
      </ul>

      <h2>Backup and Recovery</h2>

      <h3>The 3-2-1 Backup Rule</h3>
      <ul>
        <li>
          <strong>3 copies</strong> of your important data
        </li>
        <li>
          <strong>2 different types</strong> of storage media
        </li>
        <li>
          <strong>1 copy offsite</strong> or in the cloud
        </li>
      </ul>
      <p>
        Regular backups protect against ransomware, hardware failure, and
        accidental deletion.
      </p>

      <h3>Backup Options</h3>
      <ul>
        <li>
          <strong>Cloud storage:</strong> Google Drive, iCloud, OneDrive,
          Dropbox (encrypt sensitive files)
        </li>
        <li>
          <strong>External hard drives:</strong> Keep one disconnected when not
          backing up
        </li>
        <li>
          <strong>NAS devices:</strong> Network-attached storage for home
          backups
        </li>
        <li>
          <strong>Dedicated backup services:</strong> Backblaze, Carbonite for
          automatic backups
        </li>
      </ul>

      <h2>Responding to Security Incidents</h2>

      <h3>If Your Account is Compromised</h3>
      <ol>
        <li>
          Change the password immediately (from a different, secure device)
        </li>
        <li>Enable 2FA if not already active</li>
        <li>Review recent account activity</li>
        <li>
          Check for unauthorized changes (email forwarding, recovery options)
        </li>
        <li>Log out of all other sessions</li>
        <li>Alert your contacts if the attacker may message them</li>
      </ol>

      <h3>If Your Device is Infected</h3>
      <ol>
        <li>Disconnect from the internet to prevent data exfiltration</li>
        <li>Run antivirus/anti-malware scans</li>
        <li>Change passwords from a clean device</li>
        <li>Consider a complete system reset for severe infections</li>
        <li>Restore from a clean backup</li>
        <li>Update all software before reconnecting</li>
      </ol>

      <h2>Security Checklist</h2>
      <p>Use this checklist to evaluate your security posture:</p>
      <ul>
        <li>☐ Using a password manager with unique passwords</li>
        <li>☐ 2FA enabled on all critical accounts</li>
        <li>☐ Router using WPA2/WPA3 with strong password</li>
        <li>☐ All software and OS up to date</li>
        <li>☐ Antivirus active and current</li>
        <li>☐ Regular backups in place</li>
        <li>☐ VPN for public Wi-Fi</li>
        <li>☐ Privacy settings reviewed on social media</li>
        <li>☐ Can recognize phishing attempts</li>
        <li>☐ Screen lock on all devices</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Internet security isn't about being paranoid — it's about being
        prepared. By implementing the practices outlined in this guide, you
        significantly reduce your risk of falling victim to cyberattacks.
      </p>
      <p>
        Remember that security is not a one-time task but an ongoing process.
        Stay informed about new threats, regularly review your security
        settings, and maintain good digital hygiene.
      </p>
      <p>
        The time invested in securing your digital life is minimal compared to
        the potential cost of a security breach. Start with the basics — strong
        passwords and 2FA — and gradually implement additional measures. Your
        future self will thank you.
      </p>
    </>
  );
}
