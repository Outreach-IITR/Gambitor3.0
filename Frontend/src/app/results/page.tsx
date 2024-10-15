"use client"
// components/ContactForm.tsx

import { useState } from 'react';
import Table from "./table"
import { defaultOverrides } from 'next/dist/server/require-hook';

const ContactForm = () => {

  const [toggle , setToggle] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };

  return (
    <div>
    { !toggle? (

    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-blue-900 p-8 rounded-lg shadow-md border border-blue-200"
      >
        <h2 className="text-2xl font-semibold text-center text-white mb-6">RESULTS</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-blue-300 bg-blue-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-blue-300 text-white bg-blue-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          onClick={()=>{setToggle(true)}}
          type="submit"
          className="w-full bg-white text-black py-2 mt-5 rounded-md hover:bg-blue-200 transition"
        >
          Submit
        </button>
      </form>
    </div>
    ):(
      <Table/>
    )}
    </div>
  );
};

export default ContactForm;
