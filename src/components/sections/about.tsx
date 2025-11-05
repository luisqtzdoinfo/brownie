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
              Nosso Segredo
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
              Mais do que Apenas um Brownie
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed">
              Na Academia do Brownie, acreditamos que um ótimo brownie pode tornar qualquer dia melhor. É por isso que colocamos nossos corações em cada fornada, usando apenas ingredientes premium para criar uma experiência de sabor inesquecível.
            </p>
            <ul className="grid gap-4">
              <li className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Chocolate Premium</h3>
                  <p className="text-muted-foreground">Usamos chocolate belga de alta qualidade para um sabor profundo e rico.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Ingredientes Frescos da Fazenda</h3>
                  <p className="text-muted-foreground">Manteiga orgânica, ovos de galinhas criadas soltas e farinha não branqueada fazem toda a diferença.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Assado com Amor</h3>
                  <p className="text-muted-foreground">Cada brownie é feito à mão em pequenos lotes para garantir a perfeição.</p>
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
