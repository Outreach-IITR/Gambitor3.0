import React from 'react';

interface ErrorBoxProps {
  message: string;
}

const ErrorBox: React.FC<ErrorBoxProps> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="text-red-700 lg:text-1xl text-md text-left mt-1">
      {message}
    </div>
  );
};

export default ErrorBox;