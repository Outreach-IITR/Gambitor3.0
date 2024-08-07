"use client";
import Image from 'next/image';
import { useState, ChangeEvent, FormEvent } from 'react';
 
interface FormData {
    firstName: string;
    lastName: string;
    class: string;
    schoolName: string;
    phoneNumber: string;
    state: string;
    referralCode: string;
    profilePhoto: File | null;
}
 
export default function PersonalInfo() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        class: '',
        schoolName: '',
        phoneNumber: '',
        state: '',
        referralCode: '',
        profilePhoto: null,
    });
 
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === 'profilePhoto') {
            setFormData((prevData) => ({
                ...prevData,
                profilePhoto: files ? files[0] : null,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };
 
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };
 
    return (
        <div className="min-h-screen flex text-black">
            <div className="bg-white w-1/4 flex flex-col p-8">
                <Image src="/logo.png" alt="logo" width={100} height={100} />
                <div className="mt-10">
                    <p className="text-gray-500 flex flex-row"> <Image src="/done.png" alt="done" width={16} height={16} className='rounded-full mr-2'/> Sign Up</p>
                    <p className="text-blue-600 font-bold flex flex-row"><Image src="/two.png" alt="done" width={16} height={16} className='rounded-full mr-2'/> Personal Info</p>
                </div>
            </div>
 
            <div className="bg-gray-100 w-3/4 flex flex-col p-8">
                <div className="flex justify-end mb-4">
                <Image src="/profile.png" alt="profile" width={32} height={32} className='rounded-full mr-2'/>
                    <button className="p-1 bg-gray-200 border border-gray-300 text-gray-700 rounded">Sign Out</button>
                </div>
                <h1 className="text-3xl font-bold">Personal Info</h1>
                <p className="mb-6">Fill out your personal information so that we can get to know you better.</p>
                <form onSubmit={handleSubmit} className='me-24'>
                    <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-1/2 px-2 mb-4">
                            <label htmlFor="firstName" className="block text-black mb-1 text-sm">First Name</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                name="firstName" 
                                value={formData.firstName} 
                                onChange={handleChange} 
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="w-1/2 px-2 mb-4">
                            <label htmlFor="lastName" className="block text-black mb-1 text-sm">Last Name</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                name="lastName" 
                                value={formData.lastName} 
                                onChange={handleChange} 
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="w-1/3 px-2 mb-4">
                            <label htmlFor="class" className="block text-black mb-1 text-sm">Class</label>
                            <input 
                                type="text" 
                                id="class" 
                                name="class" 
                                value={formData.class} 
                                onChange={handleChange} 
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="w-1/3 px-2 mb-4">
                            <label htmlFor="schoolName" className="block text-black mb-1 text-sm">School Name</label>
                            <input 
                                type="text" 
                                id="schoolName" 
                                name="schoolName" 
                                value={formData.schoolName} 
                                onChange={handleChange} 
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="w-1/3 px-2 mb-4">
                            <label htmlFor="phoneNumber" className="block text-black mb-1 text-sm">Phone Number (WhatsApp Active)</label>
                            <input 
                                type="text" 
                                id="phoneNumber" 
                                name="phoneNumber" 
                                value={formData.phoneNumber} 
                                onChange={handleChange} 
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>
                    <div className="w-1/4 mb-4">
                        <label htmlFor="state" className="block text-black mb-1 text-sm">State</label>
                        <input 
                            type="text" 
                            id="state" 
                            name="state" 
                            value={formData.state} 
                            onChange={handleChange} 
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="w-1/4 mb-4">
                        <label htmlFor="referralCode" className="block text-black mb-1 text-sm">Referral Code (if any)</label>
                        <input 
                            type="text" 
                            id="referralCode" 
                            name="referralCode" 
                            value={formData.referralCode} 
                            onChange={handleChange} 
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="w-1/4 mb-6">
                        <label htmlFor="profilePhoto" className="block text-black text-sm mb-1">Profile Photo (optional)</label>
                        <input 
                            type="file" 
                            id="profilePhoto" 
                            name="profilePhoto" 
                            onChange={handleChange} 
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex justify-between mb-6">
                        <button 
                            type="button" 
                            className="px-4 py-2 bg-gray-500 text-white rounded"
                        >
                            Previous Step
                        </button>
                        <button 
                            type="submit" 
                            className="px-4 py-2 bg-blue-600 w-[160px] h-[50px] text-white rounded"
                        >
                            Done
                        </button>
                    </div>
                    <div className="text-gray-600 flex justify-end">
                        <span className='mr-1'>Having troubles? </span><a href="#" className="text-blue-600">Get help</a>
                    </div>
                </form>
            </div>
        </div>
    );
}