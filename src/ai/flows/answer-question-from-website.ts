'use server';
/**
 * @fileOverview Un agente de IA que responde preguntas sobre los servicios de ArtDent y puede agendar citas, utilizando contenido del sitio web de la clínica.
 *
 * - answerQuestionFromWebsite - Una función que maneja la conversación con el chatbot, incluyendo la respuesta a preguntas y la reserva de citas.
 * - AnswerQuestionFromWebsiteInput - El tipo de entrada para la función.
 * - AnswerQuestionFromWebsiteOutput - El tipo de retorno para la función.
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

// Herramienta (recurso de API) para que el chatbot agende citas
const bookAppointmentTool = ai.defineTool(
  {
    name: 'bookAppointment',
    description: 'Reserva una cita dental. Primero, reúne TODA la información requerida del usuario: nombre completo, DNI, número de celular, correo electrónico, el servicio que desean, y la fecha y hora preferidas para la cita. No inventes información. Confirma todos los detalles con el usuario antes de llamar a esta herramienta.',
    inputSchema: z.object({
      fullName: z.string().describe('Nombre completo del paciente.'),
      dni: z.string().describe('El número de DNI del paciente.'),
      phone: z.string().describe('El número de celular del paciente.'),
      email: z.string().email().describe('La dirección de correo electrónico del paciente.'),
      service: z.string().describe('El servicio dental para el cual se reserva la cita. Debe ser uno de los servicios ofrecidos.'),
      date: z.string().describe('La fecha deseada para la cita en formato AAAA-MM-DD.'),
      time: z.string().describe('La hora deseada para la cita en formato HH:MM (24 horas).'),
    }),
    outputSchema: z.object({
      success: z.boolean(),
      message: z.string(),
    }),
  },
  async (input) => {
    // En una aplicación real, aquí llamarías a tu base de datos o API para crear la cita.
    console.log('Simulando la reserva de cita con los siguientes datos:', input);
    
    // Simulación de una reserva exitosa
    return {
      success: true,
      message: `¡Perfecto! Se ha agendado tu cita para ${input.service} el ${input.date} a las ${input.time}. Te hemos enviado una confirmación a ${input.email}. ¡Te esperamos!`,
    };
  }
);


export async function answerQuestionFromWebsite(input: AnswerQuestionFromWebsiteInput): Promise<AnswerQuestionFromWebsiteOutput> {
  return answerQuestionFromWebsiteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerQuestionFromWebsitePrompt',
  input: {schema: AnswerQuestionFromWebsiteInputSchema},
  output: {schema: AnswerQuestionFromWebsiteOutputSchema},
  tools: [bookAppointmentTool],
  prompt: `Eres un asistente virtual amigable y servicial para una clínica dental llamada ArtDent. Tu nombre es Denty.

Tu objetivo principal es ayudar a los usuarios respondiendo sus preguntas y asistiéndolos en la reserva de citas.

**Para responder preguntas:**
Utiliza el siguiente contenido del sitio web de ArtDent. Sé conciso y directo en tus respuestas. Si la información no está en el contenido proporcionado, amablemente informa al usuario que no tienes esa información y sugiérele que contacte a la clínica directamente.

**Para reservar citas:**
Si un usuario quiere reservar una cita, DEBES utilizar la herramienta \`bookAppointment\`.
Para hacerlo, primero debes recopilar TODA la información necesaria:
1. Nombre completo del paciente.
2. DNI del paciente.
3. Número de celular.
4. Correo electrónico.
5. El servicio dental que necesita.
6. La fecha y hora que prefiere.

No inventes ningún dato. Pregunta al usuario por cada pieza de información si no la proporciona. Una vez que tengas todos los detalles, confírmalos con el usuario antes de llamar a la herramienta. Después de ejecutar la herramienta, usa el mensaje de éxito o fracaso de la herramienta para formular tu respuesta final al usuario.

Contenido del Sitio Web:
{{{websiteContent}}}

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
  async (input) => {
    const response = await prompt(input);
    const toolCalls = response.toolCalls;

    if (toolCalls && toolCalls.length > 0) {
      // Asumimos una llamada a herramienta a la vez por simplicidad y la ejecutamos.
      const toolResponsePart = await ai.runTool(toolCalls[0]);
      
      // Extraemos el resultado de la herramienta.
      const toolOutput = toolResponsePart.toolResponse.output as { success: boolean; message: string };

      // Devolvemos el mensaje de la herramienta directamente como la respuesta final.
      // Esto es más eficiente que hacer otra llamada al LLM solo para formatear la salida.
      return { answer: toolOutput.message };
    }
    
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
