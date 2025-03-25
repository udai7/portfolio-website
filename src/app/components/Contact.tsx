'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-gray-200"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-white placeholder-gray-400 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-white placeholder-gray-400 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-bold text-gray-200"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-white placeholder-gray-400 sm:text-sm"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
        <div>
          <h3 className="text-lg font-extrabold text-white">
            Email
          </h3>
          <p className="mt-2 text-gray-300">
            udaid347@gmail.com
          </p>
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-white">
            Location
          </h3>
          <p className="mt-2 text-gray-300">
            Agartala, Tripura, India
          </p>
        </div>
      </div>
    </div>
  );
} 