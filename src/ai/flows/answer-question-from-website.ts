'use server';
/**
 * @fileOverview Un agente de IA que responde preguntas sobre los servicios de ArtDent utilizando contenido del sitio web de la clínica.
 *
 * - answerQuestionFromWebsite - Una función que responde la pregunta de un usuario sobre los servicios de ArtDent.
 * - AnswerQuestionFromWebsiteInput - El tipo de entrada para la función answerQuestionFromWebsite.
 * - AnswerQuestionFromWebsiteOutput - El tipo de retorno para la función answerQuestionFromWebsite.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerQuestionFromWebsiteInputSchema = z.object({
  question: z.string().describe('La pregunta del usuario sobre los servicios de ArtDent.'),
  websiteContent: z
    .string()
    .describe('El contenido del sitio web de ArtDent para usar al responder la pregunta.'),
});
export type AnswerQuestionFromWebsiteInput = z.infer<typeof AnswerQuestionFromWebsiteInputSchema>;

const AnswerQuestionFromWebsiteOutputSchema = z.object({
  answer: z.string().describe('La respuesta a la pregunta del usuario.'),
});
export type AnswerQuestionFromWebsiteOutput = z.infer<typeof AnswerQuestionFromWebsiteOutputSchema>;

export async function answerQuestionFromWebsite(input: AnswerQuestionFromWebsiteInput): Promise<AnswerQuestionFromWebsiteOutput> {
  return answerQuestionFromWebsiteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerQuestionFromWebsitePrompt',
  input: {schema: AnswerQuestionFromWebsiteInputSchema},
  output: {schema: AnswerQuestionFromWebsiteOutputSchema},
  prompt: `Eres un asistente de IA que responde preguntas sobre los servicios de ArtDent.
  Utiliza el siguiente contenido del sitio web de ArtDent para responder la pregunta del usuario.
  Si el contenido no contiene la respuesta, responde que no puedes responder la pregunta utilizando el contenido proporcionado.

  Contenido del Sitio Web: {{{websiteContent}}}

  Pregunta: {{{question}}}
  `,
  config: {
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
    ],
  },
});

const answerQuestionFromWebsiteFlow = ai.defineFlow(
  {
    name: 'answerQuestionFromWebsiteFlow',
    inputSchema: AnswerQuestionFromWebsiteInputSchema,
    outputSchema: AnswerQuestionFromWebsiteOutputSchema,
  },
  async input => {
    const response = await prompt(input);
    if (response.output === null) {
      let reason = "Razón desconocida para una salida nula.";
      if (response.candidates.length > 0 && response.candidates[0].finishReason) {
        reason = `La generación de respuesta del modelo falló. Razón: ${response.candidates[0].finishReason}.`;
        if (response.candidates[0].finishMessage) {
          reason += ` Mensaje: ${response.candidates[0].finishMessage}.`;
        }
      }
      console.error("La salida de la respuesta de IA fue nula.", reason, "Respuesta completa:", JSON.stringify(response, null, 2));
      throw new Error('El modelo de IA no generó una respuesta válida. Esto podría deberse a filtros de seguridad o a la incapacidad de formatear la respuesta.');
    }
    return response.output;
  }
);
