import React from 'react';

export const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
