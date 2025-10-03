import { Card, CardContent } from '@/components/ui/card';
import { Gem, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function GuaranteeSection() {
  const guarantees = [
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: '100% Bliss Guarantee',
      description: 'If you\'re not absolutely in love with your brownies, we\'ll make it right. Your satisfaction is our top priority.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: 'Secure Payments',
      description: 'Your payment information is safe with us. We use industry-standard encryption to protect your data.',
    },
    {
      icon: <Gem className="h-8 w-8 text-primary" />,
      title: 'Quality You Can Taste',
      description: 'We stand by the quality of our ingredients and our baking process. Only the best for our customers.',
    },
  ];

  return (
    <section className="bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {guarantees.map((guarantee) => (
            <div key={guarantee.title} className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">{guarantee.icon}</div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-headline">{guarantee.title}</h3>
                <p className="text-sm text-muted-foreground">{guarantee.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
