import Link from 'next/link';
import { SquareAd } from './AdComponents';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Ad */}
        {/* <SquareAd className="mb-12" /> */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
              IP Tracker
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Free, accurate, and instant IP geolocation service. Discover your
              public IP address and get detailed information about any IP
              worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
              Tools
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  IP Lookup
                </Link>
              </li>
              <li>
                <span className="text-gray-400">IPv6 Lookup (Coming Soon)</span>
              </li>
              <li>
                <span className="text-gray-400">
                  Bulk IP Lookup (Coming Soon)
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
              Information
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  About
                </Link>
              </li>
              <li>
                <span className="text-gray-400">Privacy Policy</span>
              </li>
              <li>
                <span className="text-gray-400">Terms of Service</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400">API Documentation</span>
              </li>
              <li>
                <span className="text-gray-400">Developer Guide</span>
              </li>
              <li>
                <span className="text-gray-400">Network Tools</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © 2025 IP Tracker. All rights reserved. |
            <span className="ml-1">
              Built with Next.js and powered by real-time geolocation data.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
