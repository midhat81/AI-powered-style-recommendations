import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="font-bold text-lg">StyleAI</h3>
            <p className="text-sm text-gray-600">
              AI-powered outfit recommendations tailored to your style.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/recommend" className="text-gray-600 hover:text-gray-900">
                  Try Now
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm">About</h4>
            <p className="text-sm text-gray-600">
              Powered by Next.js and Google Gemini AI
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            © 2025 StyleAI • Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> for fashion
          </p>
        </div>
      </div>
    </footer>
  );
}