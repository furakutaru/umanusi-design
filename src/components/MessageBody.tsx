import React, { ReactNode } from 'react';

interface MessageBodyProps {
  children: ReactNode;
}

export const MessageBody = ({ children }: MessageBodyProps) => {
  return (
    <div className="text-base text-gray-700 leading-6 md:leading-relaxed mb-4">
      {children}
    </div>
  );
}; 