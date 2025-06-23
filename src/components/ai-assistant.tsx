"use client";

import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { answerQuestionFromWebsite, type AnswerQuestionFromWebsiteOutput } from '@/ai/flows/answer-question-from-website';
import { artDentWebsiteContent } from '@/data/website-content';
import { Bot, Loader2, Send, User } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { motion } from 'framer-motion';

const formSchema = z.object({
  question: z.string().min(5, { message: "La pregunta debe tener al menos 5 caracteres." }).max(200, { message: "La pregunta debe tener como máximo 200 caracteres." }),
});

type FormData = z.infer<typeof formSchema>;

interface Message {
  type: 'user' | 'ai';
  text: string;
}

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setMessages(prev => [...prev, { type: 'user', text: data.question }]);
    form.reset(); 

    try {
      const result: AnswerQuestionFromWebsiteOutput = await answerQuestionFromWebsite({
        question: data.question,
        websiteContent: artDentWebsiteContent,
      });
      setMessages(prev => [...prev, { type: 'ai', text: result.answer }]);
    } catch (error) {
      console.error("Error del Asistente IA:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo obtener una respuesta del asistente de IA. Por favor, inténtelo de nuevo.",
      });
       setMessages(prev => [...prev, { type: 'ai', text: "Lo siento, encontré un error y no pude procesar su solicitud." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section 
      id="ai-assistant" 
      className="bg-background"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: 'easeInOut' }}
    >
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-xl rounded-xl overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground p-6">
            <div className="flex items-center gap-3">
              <Bot size={32} />
              <CardTitle className="text-2xl font-headline">Asistente de Información IA</CardTitle>
            </div>
            <CardDescription className="text-primary-foreground/80 mt-1">
              Haga una pregunta sobre los servicios, horarios o políticas de ArtDent.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <ScrollArea className="h-[300px] w-full pr-4 mb-6 border rounded-md p-4 bg-muted/30">
              {messages.length === 0 && !isLoading && (
                <p className="text-muted-foreground text-center py-10">¡Pregúntame lo que sea sobre ArtDent!</p>
              )}
              {messages.map((msg, index) => (
                <div key={index} className={`flex mb-4 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-lg max-w-[80%] flex items-start gap-2 ${
                    msg.type === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {msg.type === 'ai' && <Bot size={20} className="flex-shrink-0 mt-0.5 text-accent"/>}
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    {msg.type === 'user' && <User size={20} className="flex-shrink-0 mt-0.5"/>}
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length-1]?.type === 'user' && ( 
                <div className="flex justify-start mb-4">
                  <div className="p-3 rounded-lg bg-muted text-muted-foreground flex items-center gap-2">
                    <Bot size={20} className="flex-shrink-0 text-accent"/>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Pensando...</span>
                  </div>
                </div>
              )}
            </ScrollArea>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="ai-question" className="sr-only">Su Pregunta</FormLabel>
                      <FormControl>
                        <div className="relative flex items-center">
                          <Input
                            id="ai-question"
                            placeholder="Ej: ¿Cuál es su horario los sábados?"
                            {...field}
                            className="pr-12 py-6"
                            disabled={isLoading}
                            aria-label="Hacer una pregunta al asistente de IA"
                          />
                          <Button 
                            type="submit" 
                            size="icon" 
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9" 
                            disabled={isLoading}
                            aria-label="Enviar pregunta"
                          >
                            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
          <CardFooter className="p-6 bg-muted/50 border-t">
             <p className="text-xs text-muted-foreground">
              El asistente de IA proporciona información basada en el contenido disponible del sitio web. Para consultas críticas o de salud personal, por favor consulte directamente con nuestro personal.
            </p>
          </CardFooter>
        </Card>
      </div>
    </motion.section>
  );
};

export default AiAssistant;
