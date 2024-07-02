// ErrorBox.tsx
import React from 'react';

interface ErrorBoxProps {
  message: string;
}

const ErrorBox: React.FC<ErrorBoxProps> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="text-red-500 lg:text-2xl text-1xl text-left mt-1">
      {message}
    </div>
  );
};

export default ErrorBox;