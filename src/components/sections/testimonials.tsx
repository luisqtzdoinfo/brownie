'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Jéssica M.',
      avatarId: 'testimonial-1',
      quote: "Sem dúvida, estes são os melhores brownies que já comi. Tão cremosos e ricos! Estou oficialmente viciada.",
    },
    {
      id: 2,
      name: 'David L.',
      avatarId: 'testimonial-2',
      quote: 'Pedi uma caixa para o meu escritório e todos ficaram impressionados. A qualidade é incrível. Vou pedir de novo!',
    },
    {
      id: 3,
      name: 'Sara K.',
      avatarId: 'testimonial-3',
      quote: 'O doce perfeito para qualquer ocasião. A entrega foi rápida e os brownies estavam tão frescos. 10/10!',
    },
  ];

  return (
    <section id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
              Prova Social
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
              O que Nossos Clientes Dizem
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Não acredite apenas na nossa palavra. Veja o que os amantes de brownie pensam sobre nossas criações.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
              return (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                        <Avatar className="w-20 h-20">
                          {avatarImage && (
                            <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />
                          )}
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
                        <p className="font-semibold font-headline text-lg">{testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
