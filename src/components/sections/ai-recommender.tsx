'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getBrownieRecommendation } from '@/app/actions';
import { Loader2, Wand2 } from 'lucide-react';

const formSchema = z.object({
  chocolateType: z.enum(['dark', 'milk', 'white'], {
    required_error: 'You need to select a chocolate type.',
  }),
  texture: z.enum(['fudgy', 'chewy', 'cakey'], {
    required_error: 'You need to select a texture preference.',
  }),
  occasion: z.enum(['party', 'gift', 'treat'], {
    required_error: 'You need to select an occasion.',
  }),
});

type BrownieRecommendation = {
  name: string;
  description: string;
};

export default function AiRecommender() {
  const [recommendation, setRecommendation] = useState<BrownieRecommendation | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecommendation(null);
    const result = await getBrownieRecommendation(values);
    setRecommendation(result);
    setIsLoading(false);
  }

  return (
    <section className="bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
              Find Your Perfect Brownie
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed">
              Overwhelmed by all the delicious options? Let our AI-powered Brownie Bot help you find the perfect match for your taste.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="chocolateType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Favorite Chocolate?</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="dark" /></FormControl>
                            <FormLabel className="font-normal">Deep & Dark</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="milk" /></FormControl>
                            <FormLabel className="font-normal">Smooth Milk</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="white" /></FormControl>
                            <FormLabel className="font-normal">Creamy White</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="texture"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Ideal Texture?</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                           <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="fudgy" /></FormControl>
                            <FormLabel className="font-normal">Ultra Fudgy</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="chewy" /></FormControl>
                            <FormLabel className="font-normal">Perfectly Chewy</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="cakey" /></FormControl>
                            <FormLabel className="font-normal">Light & Cakey</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                  Find My Brownie
                </Button>
              </form>
            </Form>
          </div>
          <div className="flex items-center justify-center min-h-[300px]">
            {isLoading && <Loader2 className="h-12 w-12 animate-spin text-primary" />}
            {recommendation && !isLoading && (
              <Card className="w-full max-w-md shadow-2xl animate-in fade-in-50 zoom-in-95">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl flex items-center gap-2">
                    <Wand2 className="h-6 w-6 text-primary"/>
                    Your Perfect Match!
                  </CardTitle>
                  <CardDescription>Our AI recommends...</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold font-headline">{recommendation.name}</h3>
                  <p className="text-muted-foreground">{recommendation.description}</p>
                </CardContent>
              </Card>
            )}
            {!recommendation && !isLoading && (
               <Card className="w-full max-w-md bg-muted/50 border-dashed">
                <CardContent className="flex flex-col items-center justify-center text-center p-12 space-y-4">
                  <Wand2 className="h-12 w-12 text-muted-foreground"/>
                  <p className="text-muted-foreground">Your personalized brownie recommendation will appear here!</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
