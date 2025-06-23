"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Loader2, Send, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { answerQuestionFromWebsite, type AnswerQuestionFromWebsiteOutput } from '@/ai/flows/answer-question-from-website';
import { artDentWebsiteContent } from '@/data/website-content';

const formSchema = z.object({
  question: z.string().min(5, { message: "La pregunta debe tener al menos 5 caracteres." }).max(200, { message: "La pregunta debe tener como máximo 200 caracteres." }),
});

type FormData = z.infer<typeof formSchema>;

interface Message {
  type: 'user' | 'ai';
  text: string;
}

const ChatbotWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { type: 'ai', text: "¡Hola! Soy Denty, el asistente virtual de ArtDent. ¿En qué puedo ayudarte hoy?" }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const scrollAreaContentRef = useRef<HTMLDivElement>(null);
    const viewportRef = useRef<HTMLDivElement>(null);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            question: "",
        },
    });

    useEffect(() => {
        if (viewportRef.current) {
            viewportRef.current.scrollTo({
                top: viewportRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages]);

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
        <div className="fixed bottom-6 right-6 z-50 w-[350px]">
            {/* Chat Window */}
            <div className={cn(
                "absolute right-0 bottom-[calc(4rem+1rem)] transition-all duration-300 ease-in-out",
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            )}>
                <Card className="w-full h-[500px] shadow-2xl rounded-xl flex flex-col bg-card">
                    <CardHeader className="bg-primary text-primary-foreground rounded-t-xl flex-row items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                            <Bot size={24} />
                            <CardTitle className="text-xl font-headline">Asistente Virtual</CardTitle>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 hover:bg-primary/80 text-primary-foreground rounded-full">
                            <X size={20} />
                        </Button>
                    </CardHeader>
                    <CardContent className="flex-1 p-0 overflow-hidden">
                        <ScrollArea className="h-full w-full" viewportRef={viewportRef}>
                           <div className="p-4 space-y-4" ref={scrollAreaContentRef}>
                                {messages.map((msg, index) => (
                                    <div key={index} className={`flex items-end gap-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        {msg.type === 'ai' && <Bot size={24} className="flex-shrink-0 rounded-full bg-muted text-muted-foreground p-1 self-start" />}
                                        <div className={`p-3 rounded-lg max-w-[80%] whitespace-pre-wrap ${
                                            msg.type === 'user'
                                                ? 'bg-primary text-primary-foreground rounded-br-none'
                                                : 'bg-muted text-muted-foreground rounded-bl-none'
                                        }`}>
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex items-end gap-2 justify-start">
                                        <Bot size={24} className="flex-shrink-0 rounded-full bg-muted text-muted-foreground p-1 self-start" />
                                        <div className="p-3 rounded-lg bg-muted text-muted-foreground rounded-bl-none flex items-center gap-2">
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                            <span>Pensando...</span>
                                        </div>
                                    </div>
                                )}
                           </div>
                        </ScrollArea>
                    </CardContent>
                    <CardFooter className="p-4 border-t">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                                <FormField
                                    control={form.control}
                                    name="question"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className="relative flex items-center">
                                                    <Input
                                                        placeholder="Escribe un mensaje..."
                                                        {...field}
                                                        className="pr-12"
                                                        disabled={isLoading}
                                                        autoComplete="off"
                                                    />
                                                    <Button
                                                        type="submit"
                                                        size="icon"
                                                        className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                                                        disabled={isLoading || !field.value}
                                                        aria-label="Enviar"
                                                    >
                                                        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                                                    </Button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                    </CardFooter>
                </Card>
            </div>
            {/* Chat Trigger Button */}
            <div className="flex justify-end">
                <Button
                    size="lg"
                    className={cn(
                        "rounded-full w-16 h-16 shadow-lg flex items-center justify-center transition-all transform hover:scale-110",
                        isOpen && "scale-0 opacity-0 pointer-events-none"
                    )}
                    onClick={() => setIsOpen(true)}
                    aria-label="Abrir chat"
                >
                    <Bot size={32} />
                </Button>
            </div>
        </div>
    );
};

export default ChatbotWidget;
