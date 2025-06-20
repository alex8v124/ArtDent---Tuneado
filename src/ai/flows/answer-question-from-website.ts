'use server';
/**
 * @fileOverview An AI agent that answers questions about ArtDent's services using content from the clinic's website.
 *
 * - answerQuestionFromWebsite - A function that answers a user's question about ArtDent's services.
 * - AnswerQuestionFromWebsiteInput - The input type for the answerQuestionFromWebsite function.
 * - AnswerQuestionFromWebsiteOutput - The return type for the answerQuestionFromWebsite function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerQuestionFromWebsiteInputSchema = z.object({
  question: z.string().describe('The user question about ArtDent services.'),
  websiteContent: z
    .string()
    .describe('The content of the ArtDent website to use for answering the question.'),
});
export type AnswerQuestionFromWebsiteInput = z.infer<typeof AnswerQuestionFromWebsiteInputSchema>;

const AnswerQuestionFromWebsiteOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question.'),
});
export type AnswerQuestionFromWebsiteOutput = z.infer<typeof AnswerQuestionFromWebsiteOutputSchema>;

export async function answerQuestionFromWebsite(input: AnswerQuestionFromWebsiteInput): Promise<AnswerQuestionFromWebsiteOutput> {
  return answerQuestionFromWebsiteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerQuestionFromWebsitePrompt',
  input: {schema: AnswerQuestionFromWebsiteInputSchema},
  output: {schema: AnswerQuestionFromWebsiteOutputSchema},
  prompt: `You are an AI assistant answering questions about ArtDent's services.
  Use the following content from the ArtDent website to answer the user's question.
  If the content does not contain the answer, respond that you cannot answer the question using the provided content.

  Website Content: {{{websiteContent}}}

  Question: {{{question}}}
  `,
});

const answerQuestionFromWebsiteFlow = ai.defineFlow(
  {
    name: 'answerQuestionFromWebsiteFlow',
    inputSchema: AnswerQuestionFromWebsiteInputSchema,
    outputSchema: AnswerQuestionFromWebsiteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
