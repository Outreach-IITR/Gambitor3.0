"use client";
import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import Table from "./table"; // Ensure this component is properly defined to accept data as props

const ContactForm = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [error, setError] = useState<string>('');  // Error state for validation
  const [result, setResult] = useState<any>(null); // Store fetched result

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(formData.phone)) {
      setError('Phone number must be exactly and only 10 digits.');
      return;
    }

    setError('');

    try {
      const response = await axios.get('http://localhost:8000/api/v1/myresult', {
        params: {
          contactNumber: formData.phone,
          name: formData.name,
        },
      });

      if (response.status === 200) {
        console.log(response.data.data[0]);
        setResult(response.data.data[0]); // Set the fetched result
        setToggle(true);
      }
    } catch (err: any) {
      if (err.response?.status === 404) {
        setError('No results found for the provided name and phone number.');
      } else {
        setError('An error occurred while fetching the result.');
      }
    }
  };

  return (
    <div className='bg-gradient-to-b from-indigo-600 to-[#1d1d7a]'>
      <Image src="/wave1.svg" height={500} width={500} alt="" className="w-full absolute left-0 z-1 mt-[10rem]" />
      {!toggle ? (
        <div className="flex flex-col justify-center items-center min-h-screen bg-transparent">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-8 rounded-lg shadow-xl bg-transparent backdrop-blur-xl text-white"
          >
            <h2 className="text-2xl font-semibold text-center text-white mb-6">RESULTS</h2>

            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-blue-300 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-white mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 border border-blue-300 text-white bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
                required
              />
              {error && <p className="text-red-500 mt-2">{error}</p>}  {/* Display error message */}
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-2 mt-5 rounded-md hover:bg-blue-200 transition"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div>
          {result ? (
            <Table data={result} />
          ) : (
            <p>No results to display.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
