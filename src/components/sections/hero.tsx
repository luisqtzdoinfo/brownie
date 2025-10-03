import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-brownie');

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white py-0">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover -z-10"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground">
            Indulge in Pure Bliss
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Experience the richest, fudgiest, and most decadent brownies, handcrafted with love and the finest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#pricing">Order Your Bliss</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
