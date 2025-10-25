
import React from 'react';

const ElectricalIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.75L6.75 13.5h4.5l-1.5 6.75 6-9.75h-4.5l1.5-6.75z" />
  </svg>
);

export default ElectricalIcon;
