
import React from 'react';

const WaterSupplyIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12,21.5c-3.6,0-6.5-2.9-6.5-6.5,0-4.3,6.5-12,6.5-12s6.5,7.7,6.5,12C18.5,18.6,15.6,21.5,12,21.5Z" />
  </svg>
);

export default WaterSupplyIcon;
