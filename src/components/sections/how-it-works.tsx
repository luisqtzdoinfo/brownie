import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Package, Smile } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      title: 'Escolha Sua Felicidade',
      description: 'Navegue pela nossa seleção de brownies decadentes e escolha seus favoritos. Adicione ao carrinho e prepare-se para um deleite.',
    },
    {
      icon: <Package className="h-10 w-10 text-primary" />,
      title: 'Checkout Seguro',
      description: 'Conclua seu pedido com nosso processo de checkout seguro e fácil de usar. Começaremos a assar imediatamente.',
    },
    {
      icon: <Smile className="h-10 w-10 text-primary" />,
      title: 'Aproveite e Compartilhe',
      description: 'Seus brownies recém-assados chegarão à sua porta. Aproveite a felicidade e compartilhe o amor (ou não, não vamos julgar!).',
    },
  ];

  return (
    <section id="recipes">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
              Passo a Passo
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
              Do Nosso Forno Para a Sua Porta
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Conseguir nossos brownies maravilhosos é tão fácil quanto 1-2-3. Veja como nosso processo simples funciona.
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
