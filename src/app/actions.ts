"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function handleContactForm(values: z.infer<typeof contactSchema>) {
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return { error: "Dados inválidos fornecidos." };
  }

  // Here, you would typically save the data to Firestore.
  // For example:
  //
  // import { firestore } from '@/lib/firebase';
  //
  // try {
  //   await firestore.collection('contacts').add({
  //     ...parsed.data,
  //     submittedAt: new Date(),
  //   });
  //   return { success: "Mensagem enviada com sucesso!" };
  // } catch (error) {
  //   console.error("Error writing to Firestore: ", error);
  //   return { error: "Não foi possível salvar a mensagem. Por favor, tente novamente mais tarde." };
  // }

  console.log("Contact form submitted:", parsed.data);
  // Simulating a successful submission without a database
  return { success: "Mensagem enviada com sucesso!" };
}

const browniePreferencesSchema = z.object({
  chocolateType: z.enum(['dark', 'milk', 'white']),
  texture: z.enum(['fudgy', 'chewy', 'cakey']),
  occasion: z.enum(['party', 'gift', 'treat']),
});

// This is a mock implementation of the AI recommendation feature.
export async function getBrownieRecommendation(preferences: z.infer<typeof browniePreferencesSchema>) {
  console.log("Obtendo recomendação de IA para:", preferences);

  // Simulate AI processing time
  await new Promise(res => setTimeout(res, 1500));
  
  // Mock logic based on preferences
  if (preferences.chocolateType === 'dark' && preferences.texture === 'fudgy') {
    return {
      name: "O Fudge da Meia-Noite",
      description: "Um brownie de chocolate amargo intensamente rico com um centro denso e cremoso. Perfeito para o purista de chocolate."
    };
  }
  if (preferences.chocolateType === 'white' ) {
    return {
      name: "O Sonho de Blondie",
      description: "Um blondie amanteigado e com pedaços, recheado com pedaços de chocolate branco e um toque de baunilha. Uma deliciosa variação do clássico."
    };
  }
  if (preferences.texture === 'cakey') {
    return {
        name: "O Clássico Brownie Bolo",
        description: "Um brownie leve, com textura de bolo, com uma massa delicada e um rico sabor de chocolate. Ótimo com uma bola de sorvete."
    };
  }

  // Default recommendation
  return {
    name: "A Felicidade Assinatura",
    description: "Nosso favorito de todos! Um brownie de chocolate ao leite perfeitamente equilibrado que é ao mesmo tempo cremoso e com pedaços. Um verdadeiro agrado para todos."
  };
}
