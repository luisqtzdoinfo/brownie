import Link from 'next/link';
import { Sprout, Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/40 w-full">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Sprout className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Brownie Bliss Hub</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Crafting the most blissful brownies you&apos;ve ever tasted.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Quick Links</h3>
          <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link>
          <Link href="#recipes" className="text-sm text-muted-foreground hover:text-foreground">Recipes</Link>
          <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Legal</h3>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-muted/20">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Brownie Bliss Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
