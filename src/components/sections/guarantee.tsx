import { Card, CardContent } from '@/components/ui/card';
import { Gem, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function GuaranteeSection() {
  const guarantees = [
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: 'Garantia de 100% de Felicidade',
      description: 'Se você não se apaixonar absolutamente pelos seus brownies, nós resolveremos. Sua satisfação é nossa principal prioridade.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: 'Pagamentos Seguros',
      description: 'Suas informações de pagamento estão seguras conosco. Usamos criptografia padrão da indústria para proteger seus dados.',
    },
    {
      icon: <Gem className="h-8 w-8 text-primary" />,
      title: 'Qualidade que Você Pode Provar',
      description: 'Nós garantimos a qualidade dos nossos ingredientes e nosso processo de cozimento. Apenas o melhor para nossos clientes.',
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
