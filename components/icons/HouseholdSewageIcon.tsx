
import React from 'react';

const HouseholdSewageIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5l9-7.5 9 7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5v9a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5v-9" />
  </svg>
);

export default HouseholdSewageIcon;
