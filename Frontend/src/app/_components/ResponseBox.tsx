import React from 'react';

interface ResponseBoxProps {
    message: string;
  }
  


  const ResponseBox: React.FC<ResponseBoxProps> = ({ message }) => {
    if (!message) return null;
    return (
      <div className="text-green-500 lg:text-2xl text-2xl ">
        {message}
      </div>
    );
  };
  
  export default ResponseBox;