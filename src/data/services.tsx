
import React from 'react';
import type { Service } from '@/types';
import { Stethoscope, Sparkles, SmilePlus, Activity, ShieldCheck, Anchor } from 'lucide-react';

export const services: Service[] = [
  {
    id: 'general-checkups',
    title: 'Revisiones Generales',
    shortDescription: 'Exámenes completos de salud bucal y cuidado preventivo.',
    longDescription: 'Nuestras revisiones generales incluyen un examen completo de sus dientes, encías y boca, junto con limpieza profesional y detección de cáncer oral. Nos enfocamos en el cuidado preventivo para ayudarle a mantener una salud bucal óptima y detectar cualquier problema potencial de manera temprana.',
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    image: "https://saluddata.com/wp-content/uploads/2024/08/Ofrecer-servicios-dentales.webp",
    dataAiHint: "revisión dental",
    price: 50,
  },
  {
    id: 'teeth-cleaning',
    title: 'Limpieza Dental',
    shortDescription: 'Limpieza dental profesional para una sonrisa más sana y brillante.',
    longDescription: 'Nuestro servicio de limpieza dental profesional elimina la placa, el sarro y las manchas que el cepillado y el hilo dental habituales no pueden alcanzar. Esto ayuda a prevenir la enfermedad de las encías, las caries y deja sus dientes con una sensación fresca y un aspecto más brillante.',
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    image: "https://clinicamaip.com/wp-content/uploads/2022/05/beneficios-limpieza-dental-1021x640.jpg",
    dataAiHint: "limpieza dental",
    price: 75,
  },
  {
    id: 'cavity-fillings',
    title: 'Empastes de Caries',
    shortDescription: 'Restauración de dientes dañados por caries utilizando materiales modernos.',
    longDescription: 'Ofrecemos varios tipos de empastes, incluidos los empastes de composite del color del diente, para restaurar los dientes afectados por caries. Nuestro objetivo es proporcionar restauraciones duraderas y estéticamente agradables que se integren perfectamente con sus dientes naturales.',
    icon: <SmilePlus className="h-10 w-10 text-primary" />,
    image: "https://www.clinicadentalgonzalezbaquero.es/wp-content/uploads/2024/08/revisiondentistaempastesdentales.jpg",
    dataAiHint: "empaste dental",
    price: 120,
  },
  {
    id: 'root-canal-therapy',
    title: 'Tratamiento de Conducto',
    shortDescription: 'Tratamiento para la pulpa dental infectada para salvar un diente natural.',
    longDescription: 'El tratamiento de conducto es un procedimiento para tratar la infección en el centro de un diente (el sistema de conductos radiculares). Este tratamiento puede salvar su diente natural y evitar la necesidad de extracción. Utilizamos técnicas modernas para garantizar que el procedimiento sea lo más cómodo posible.',
    icon: <Activity className="h-10 w-10 text-primary" />,
    image: "https://www.clinicastoma.com/wp-content/uploads/2014/11/2254-clinica-dental-stoma-alcorcon-y-mostoles-endodoncia-1.jpg",
    dataAiHint: "conducto radicular",
    price: 300,
  },
  {
    id: 'dental-crowns',
    title: 'Coronas Dentales',
    shortDescription: 'Fundas colocadas sobre dientes dañados para restaurar forma, tamaño y resistencia.',
    longDescription: 'Las coronas dentales son fundas hechas a medida que cubren un diente dañado o debilitado. Restauran la forma, el tamaño, la resistencia y la apariencia del diente. Las corononas pueden estar hechas de diversos materiales, incluyendo porcelana y cerámica, para que coincidan con sus dientes naturales.',
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    image: "https://www.clinicadentalplata.es/wp-content/uploads/2021/01/AdobeStock_260657690-scaled.jpeg",
    dataAiHint: "corona dental",
    price: 450,
  },
  {
    id: 'dental-implants',
    title: 'Implantes Dentales',
    shortDescription: 'Soluciones permanentes para reemplazar dientes perdidos.',
    longDescription: 'Los implantes dentales son una solución de vanguardia para reemplazar los dientes perdidos. Consisten en un poste de titanio que se integra con el hueso maxilar, proporcionando una base sólida para un diente de reemplazo o un puente. Los implantes se ven, se sienten y funcionan como dientes naturales.',
    icon: <Anchor className="h-10 w-10 text-primary" />,
    image: "https://clinicajuliansaiz.com/wp-content/uploads/2021/05/osteointegracion-implantes-dentales-julian-saiz-fb.jpg",
    dataAiHint: "implante dental",
    price: 1200,
  },
];
