import React, { ReactNode } from 'react';

interface MessageHeadingProps {
  children: ReactNode;
}

export const MessageHeading = ({ children }: MessageHeadingProps) => {
  return (
    <h2 className="text-2xl font-bold text-gray-900 mb-2">
      {children}
    </h2>
  );
}; 