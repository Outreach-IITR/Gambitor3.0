import React from 'react';

interface ResponseBoxProps {
    message: string;
  }
  
  const ResponseBox: React.FC<ResponseBoxProps> = ({ message }) => {
    return message ? <div className="text-blue-500">{message}</div> : null;
  };
  
  export default ResponseBox;