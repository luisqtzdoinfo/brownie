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
    return { error: "Invalid data provided." };
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
  //   return { success: "Message sent successfully!" };
  // } catch (error) {
  //   console.error("Error writing to Firestore: ", error);
  //   return { error: "Could not save message. Please try again later." };
  // }

  console.log("Contact form submitted:", parsed.data);
  // Simulating a successful submission without a database
  return { success: "Message sent successfully!" };
}

const browniePreferencesSchema = z.object({
  chocolateType: z.enum(['dark', 'milk', 'white']),
  texture: z.enum(['fudgy', 'chewy', 'cakey']),
  occasion: z.enum(['party', 'gift', 'treat']),
});

// This is a mock implementation of the AI recommendation feature.
export async function getBrownieRecommendation(preferences: z.infer<typeof browniePreferencesSchema>) {
  console.log("Getting AI recommendation for:", preferences);

  // Simulate AI processing time
  await new Promise(res => setTimeout(res, 1500));
  
  // Mock logic based on preferences
  if (preferences.chocolateType === 'dark' && preferences.texture === 'fudgy') {
    return {
      name: "The Midnight Fudge",
      description: "An intensely rich dark chocolate brownie with a dense, fudgy core. Perfect for the ultimate chocolate purist."
    };
  }
  if (preferences.chocolateType === 'white' ) {
    return {
      name: "The Blondie Dream",
      description: "A chewy, buttery blondie packed with white chocolate chunks and a hint of vanilla. A delightful twist on the classic."
    };
  }
  if (preferences.texture === 'cakey') {
    return {
        name: "The Classic Cake Brownie",
        description: "A light, cake-like brownie with a delicate crumb and a rich chocolate flavor. Great with a scoop of ice cream."
    };
  }

  // Default recommendation
  return {
    name: "The Signature Bliss",
    description: "Our all-around favorite! A perfectly balanced milk chocolate brownie that's both chewy and fudgy. A true crowd-pleaser."
  };
}
