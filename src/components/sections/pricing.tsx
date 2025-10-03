import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      title: 'The Solo Bliss',
      price: '$4.99',
      description: 'A single, perfect brownie for a personal treat.',
      features: ['1 Classic Fudge Brownie', 'Perfect for one'],
    },
    {
      title: 'Blissful Box',
      price: '$24.99',
      isPopular: true,
      description: 'A box of 6 brownies. Mix and match your favorites!',
      features: ['6 Brownies of Your Choice', 'Great for sharing', '10% Discount'],
    },
    {
      title: 'The Party Pack',
      price: '$44.99',
      description: 'A party-sized pack of 12 brownies for any celebration.',
      features: ['12 Brownies of Your Choice', 'Best value', 'Perfect for events'],
    },
  ];

  return (
    <section id="pricing">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
              Choose Your Bliss Package
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              We have the perfect package for every occasion and craving. Simple, transparent pricing.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.title} className={`flex flex-col ${plan.isPopular ? 'border-primary ring-2 ring-primary shadow-lg' : ''}`}>
              {plan.isPopular && <div className="bg-primary text-primary-foreground text-sm font-semibold text-center py-1 rounded-t-lg">Most Popular</div>}
              <CardHeader>
                <CardTitle className="font-headline">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                <div className="text-4xl font-bold">{plan.price}</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.isPopular ? 'default' : 'secondary'}>Buy Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
