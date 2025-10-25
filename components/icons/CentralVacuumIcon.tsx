
import React from 'react';

const CentralVacuumIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75c1.07 0 2.07.41 2.83 1.17.76.76 1.17 1.76 1.17 2.83s-.41 2.07-1.17 2.83c-.76.76-1.76 1.17-2.83 1.17" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75c2.6 0 4.9 1.48 6.16 3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c-2.6 0-4.9-1.48-6.16-3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.84 7.5C4.58 9.77 3.75 12.4 3.75 15.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.16 16.5c1.26-2.27 2.09-4.9 2.09-7.75" />
  </svg>
);

export default CentralVacuumIcon;
