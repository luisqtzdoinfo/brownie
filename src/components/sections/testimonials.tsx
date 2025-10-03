'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Jessica M.',
      avatarId: 'testimonial-1',
      quote: "These are hands down the best brownies I've ever had. So fudgy and rich! I'm officially addicted.",
    },
    {
      id: 2,
      name: 'David L.',
      avatarId: 'testimonial-2',
      quote: 'I ordered a box for my office and everyone was blown away. The quality is incredible. Will be ordering again!',
    },
    {
      id: 3,
      name: 'Sarah K.',
      avatarId: 'testimonial-3',
      quote: 'The perfect treat for any occasion. The delivery was fast and the brownies were so fresh. 10/10!',
    },
  ];

  return (
    <section id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
              Social Proof
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Don&apos;t just take our word for it. Here&apos;s what brownie lovers think about our creations.
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
