import React from 'react';

interface ToothIconProps extends React.SVGProps<SVGSVGElement> {}

const ToothIcon: React.FC<ToothIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    {...props}
  >
    <defs>
      <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#86efac', stopOpacity: 1 }} /> 
        <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      fill="url(#toothGradient)"
      d="M66,20 C85,20 85,40 80,50 C85,60 85,80 66,80 L34,80 C15,80 15,60 20,50 C15,40 15,20 34,20 L66,20 Z M40,80 C40,85 35,90 35,90 C35,90 40,95 40,100 L45,100 L45,80 L40,80 Z M60,80 C60,85 65,90 65,90 C65,90 60,95 60,100 L55,100 L55,80 L60,80 Z"
      transform="rotate(15 50 50)"
    />
  </svg>
);

export default ToothIcon;