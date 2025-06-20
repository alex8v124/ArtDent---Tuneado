"use client";

import React from 'react';
import { faqs } from '@/data/faqs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronDown } from 'lucide-react';

const InteractiveFAQ: React.FC = () => {
  return (
    <section id="faq" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-10 text-primary">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faqItem) => (
            <AccordionItem key={faqItem.id} value={faqItem.id} className="border-b border-border last:border-b-0 mb-2 rounded-lg shadow-sm bg-card overflow-hidden">
              <AccordionTrigger className="p-6 text-left font-medium text-lg hover:bg-accent/10 transition-colors focus:bg-accent/20">
                <span className="flex-1">{faqItem.question}</span>
                {/* ChevronDown is automatically added by shadcn AccordionTrigger */}
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-muted-foreground leading-relaxed">
                {faqItem.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default InteractiveFAQ;
