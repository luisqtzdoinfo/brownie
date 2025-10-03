import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-brownie');

  return (
    <section id="about" className="bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
              Our Secret
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
              More Than Just a Brownie
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed">
              At Brownie Bliss Hub, we believe that a great brownie can make any day better. That&apos;s why we pour our hearts into every batch, using only premium ingredients to create an unforgettable taste experience.
            </p>
            <ul className="grid gap-4">
              <li className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Premium Chocolate</h3>
                  <p className="text-muted-foreground">We use high-quality Belgian chocolate for a deep, rich flavor.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Farm-Fresh Ingredients</h3>
                  <p className="text-muted-foreground">Organic butter, free-range eggs, and unbleached flour make all the difference.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Baked with Love</h3>
                  <p className="text-muted-foreground">Each brownie is handcrafted in small batches to ensure perfection.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
