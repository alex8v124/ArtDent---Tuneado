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

export interface Appointment {
  id: string;
  patientName: string;
  patientDni: string;
  date: string; // "dd/MM/yyyy"
  time: string; // "HH:mm:ss"
  endTime: string; // "HH:mm:ss"
  reason: string;
  description: string;
  assignedDoctor: string;
  additionalNotes?: string;
  doctorObservations?: string;
  status: 'Completed' | 'Pending' | 'Cancelled';
  action: 'details' | 'reschedule';
  color: string;
}

export interface AppointmentRequest {
  id: string;
  patientName: string;
  service: string;
  requestedDate: string;
  requestedTime: string;
}
