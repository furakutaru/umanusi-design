import React, { ReactNode } from 'react';

interface MessageSubtitleProps {
  children: ReactNode;
}

export const MessageSubtitle = ({ children }: MessageSubtitleProps) => {
  return (
    <h3 className="text-lg text-gray-600 mb-2">
      {children}
    </h3>
  );
}; 