import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Package, Smile } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      title: 'Choose Your Bliss',
      description: 'Browse our selection of decadent brownies and pick your favorites. Add them to your cart and get ready for a treat.',
    },
    {
      icon: <Package className="h-10 w-10 text-primary" />,
      title: 'Secure Checkout',
      description: 'Complete your order with our secure and easy-to-use checkout process. We\'ll get to baking right away.',
    },
    {
      icon: <Smile className="h-10 w-10 text-primary" />,
      title: 'Enjoy & Share',
      description: 'Your freshly baked brownies will arrive at your doorstep. Enjoy the bliss and share the love (or don\'t, we won\'t judge!).',
    },
  ];

  return (
    <section id="recipes">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
              Step-by-Step
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
              From Our Oven to Your Door
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Getting your hands on our blissful brownies is as easy as 1-2-3. Here’s how our simple process works.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  {step.icon}
                </div>
                <CardTitle className="font-headline pt-4">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
