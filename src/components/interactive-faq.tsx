"use client";

import React from 'react';
import { faqs } from '@/data/faqs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const InteractiveFAQ: React.FC = () => {
  return (
    <section id="faq">
      <div className="container mx-auto px-4">
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faqItem) => (
            <AccordionItem key={faqItem.id} value={faqItem.id} className="border-b border-border last:border-b-0 mb-2 rounded-lg shadow-sm bg-card overflow-hidden">
              <AccordionTrigger className="p-6 text-left font-medium text-lg hover:bg-accent/10 transition-colors focus:bg-accent/20">
                <span className="flex-1">{faqItem.question}</span>
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
