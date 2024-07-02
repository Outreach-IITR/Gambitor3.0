// import { useState, useRef, useEffect } from 'react';

// const OTPInput = ({ length, onChange }) => {
//   const inputsRef = useRef([]);

//   useEffect(() => {
//     inputsRef.current[0].focus();
//   }, []);

//   const handleChange = (e:any, index:any) => {
//     const value = e.target.value;
//     if (value.length === 1 && index < length - 1) {
//       inputsRef.current[index + 1].focus();
//     }
//     onChange(e, index);
//   };

//   const handleKeyDown = (e:any, index:any) => {
//     if (e.key === 'Backspace' && index > 0) {
//       if (e.target.value === '') {
//         inputsRef.current[index - 1].focus();
//       }
//     }
//   };

//   return (
//     <div className="flex space-x-2">
//       {Array.from({ length }).map((_, index) => (
//         <input
//           key={index}
//           type="text"
//           maxLength="1"
//           ref={(el) => (inputsRef.current[index] = el)}
//           onChange={(e) => handleChange(e, index)}
//           onKeyDown={(e) => handleKeyDown(e, index)}
//           className="w-10 h-10 text-center text-xl border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//         />
//       ))}
//     </div>
//   );
// };

// export default OTPInput;

import React, { useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';

interface OTPInputProps {
  length: number; // Define the type for 'length'
  onChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void; // Define onChange function type
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onChange }) => {
  const inputsRef = useRef<HTMLInputElement[]>(Array.from({ length }));

  useEffect(() => {
    if (inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (value.length === 1 && index < length - 1 && inputsRef.current[index + 1]) {
      inputsRef.current[index + 1].focus();
    }
    onChange(e, index);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && index > 0 && inputsRef.current[index - 1]) {
      if (e.currentTarget.value === '') {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="flex space-x-2">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          ref={(el) => {
            if (el) {
              inputsRef.current[index] = el;
            }
          }}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-10 h-10 text-center text-xl border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      ))}
    </div>
  );
};

export default OTPInput;
