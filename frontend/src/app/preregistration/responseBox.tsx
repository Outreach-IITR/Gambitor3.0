import React from 'react';

interface ResponseBoxProps {
    message: string;
  }
  
  const ResponseBox: React.FC<ResponseBoxProps> = ({ message }) => {
    return message ? <div className="text-green-500 lg:text-4xl text-2xl fixed top-0 left-0 w-full p-4 z-50">{message}</div> : null;
  };
  
  export default ResponseBox;