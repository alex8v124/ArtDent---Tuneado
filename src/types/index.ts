import type React from 'react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: React.ReactNode;
  image?: string; // Optional image URL for detail view
  dataAiHint?: string; // Optional hint for AI image generation
  price: number; // Price of the service
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
