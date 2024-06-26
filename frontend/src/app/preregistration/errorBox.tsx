// ErrorBox.tsx
import React from 'react';

interface ErrorBoxProps {
  message: string;
}

const ErrorBox: React.FC<ErrorBoxProps> = ({ message }) => {
  return message ? <div className="text-red-500 lg:text-3xl text-1xl">{message}</div> : null;
};

export default ErrorBox;
