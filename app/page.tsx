import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container px-4 md:px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8 animate-fadeIn">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            Powered by Google Gemini AI
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            Discover Your Perfect{' '}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Style
            </span>{' '}
            in Seconds
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Upload your photo, choose your vibe, and let AI create personalized outfit recommendations tailored just for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/recommend"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              Start Styling
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container px-4 md:px-6 py-24 bg-muted/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose StyleAI?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the future of personal styling with AI-powered recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-background border hover:shadow-lg transition-shadow">
            <div className="p-3 rounded-full bg-primary/10">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">AI-Powered</h3>
            <p className="text-muted-foreground">
              Advanced Google Gemini AI analyzes your style preferences and creates perfect outfit combinations
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-background border hover:shadow-lg transition-shadow">
            <div className="p-3 rounded-full bg-primary/10">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Instant Results</h3>
            <p className="text-muted-foreground">
              Get personalized outfit recommendations in seconds. No waiting, no hassle
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-background border hover:shadow-lg transition-shadow">
            <div className="p-3 rounded-full bg-primary/10">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">100% Free</h3>
            <p className="text-muted-foreground">
              No subscriptions, no hidden fees. Enjoy unlimited style recommendations completely free
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6 py-24">
        <div className="rounded-lg bg-primary p-12 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Style?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands discovering their perfect look with AI
          </p>
          <Link
            href="/recommend"
            className="inline-flex items-center justify-center rounded-md bg-background px-8 py-3 text-base font-medium text-foreground shadow-lg hover:bg-background/90 transition-all hover:scale-105"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}