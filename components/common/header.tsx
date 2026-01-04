import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <Sparkles className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 blur-xl bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            StyleAI
          </span>
        </Link>

        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-primary text-foreground/80"
          >
            Home
          </Link>
          <Link
            href="/recommend"
            className="transition-colors hover:text-primary text-foreground/80"
          >
            Try Now
          </Link>
          <Link
            href="/recommend"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}