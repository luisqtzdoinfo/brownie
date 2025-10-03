'use server';

/**
 * @fileOverview AI-powered brownie recommendation flow.
 *
 * - brownieRecommendation - A function that recommends a brownie flavor or recipe based on user preferences.
 * - BrownieRecommendationInput - The input type for the brownieRecommendation function.
 * - BrownieRecommendationOutput - The return type for the brownieRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BrownieRecommendationInputSchema = z.object({
  userPreferences: z
    .string()
    .describe('A description of the users brownie flavor preferences'),
  browsingHistory: z
    .string()
    .describe('A summary of the users browsing history on the site.'),
});
export type BrownieRecommendationInput = z.infer<
  typeof BrownieRecommendationInputSchema
>;

const BrownieRecommendationOutputSchema = z.object({
  recommendation: z
    .string()
    .describe('The recommended brownie flavor or recipe.'),
  reason: z.string().describe('The reason for the recommendation.'),
});
export type BrownieRecommendationOutput = z.infer<
  typeof BrownieRecommendationOutputSchema
>;

export async function brownieRecommendation(
  input: BrownieRecommendationInput
): Promise<BrownieRecommendationOutput> {
  return brownieRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'brownieRecommendationPrompt',
  input: {schema: BrownieRecommendationInputSchema},
  output: {schema: BrownieRecommendationOutputSchema},
  prompt: `You are a brownie expert. A user has the following preferences: {{{userPreferences}}}. Their browsing history includes: {{{browsingHistory}}}. Recommend them a brownie flavor or recipe and explain why. Return the recommendation and the reason.

Recommendation: {{recommendation}}
Reason: {{reason}}`,
});

const brownieRecommendationFlow = ai.defineFlow(
  {
    name: 'brownieRecommendationFlow',
    inputSchema: BrownieRecommendationInputSchema,
    outputSchema: BrownieRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
