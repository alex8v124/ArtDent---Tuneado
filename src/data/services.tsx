import type { Service } from '@/types';
import { Stethoscope, Sparkles, SmilePlus, Activity, ShieldCheck, Anchor } from 'lucide-react';

export const services: Service[] = [
  {
    id: 'general-checkups',
    title: 'General Checkups',
    shortDescription: 'Comprehensive oral health examinations and preventive care.',
    longDescription: 'Our general checkups include a thorough examination of your teeth, gums, and mouth, along with professional cleaning and oral cancer screenings. We focus on preventive care to help you maintain optimal oral health and catch any potential issues early.',
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "dental checkup"
  },
  {
    id: 'teeth-cleaning',
    title: 'Teeth Cleaning',
    shortDescription: 'Professional dental cleaning for a healthier, brighter smile.',
    longDescription: 'Our professional teeth cleaning service removes plaque, tartar, and stains that regular brushing and flossing can\'t reach. This helps prevent gum disease, cavities, and leaves your teeth feeling fresh and looking brighter.',
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "teeth cleaning"
  },
  {
    id: 'cavity-fillings',
    title: 'Cavity Fillings',
    shortDescription: 'Restoration of teeth damaged by decay using modern materials.',
    longDescription: 'We offer various types of fillings, including tooth-colored composite fillings, to restore teeth affected by cavities. Our goal is to provide durable and aesthetically pleasing restorations that blend seamlessly with your natural teeth.',
    icon: <SmilePlus className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "dental filling"
  },
  {
    id: 'root-canal-therapy',
    title: 'Root Canal Therapy',
    shortDescription: 'Treatment for infected tooth pulp to save a natural tooth.',
    longDescription: 'Root canal therapy is a procedure to treat infection at the center of a tooth (the root canal system). This treatment can save your natural tooth and prevent the need for extraction. We use modern techniques to ensure the procedure is as comfortable as possible.',
    icon: <Activity className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "root canal"
  },
  {
    id: 'dental-crowns',
    title: 'Dental Crowns',
    shortDescription: 'Caps placed over damaged teeth to restore shape, size, and strength.',
    longDescription: 'Dental crowns are custom-made caps that cover a damaged or weakened tooth. They restore the tooth\'s shape, size, strength, and appearance. Crowns can be made from various materials, including porcelain and ceramic, to match your natural teeth.',
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "dental crown"
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    shortDescription: 'Permanent solutions for replacing missing teeth.',
    longDescription: 'Dental implants are a state-of-the-art solution for replacing missing teeth. They consist of a titanium post that integrates with your jawbone, providing a strong foundation for a replacement tooth or bridge. Implants look, feel, and function like natural teeth.',
    icon: <Anchor className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "dental implant"
  },
];
