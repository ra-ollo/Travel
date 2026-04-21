import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const isValid =
    form.name.trim() !== '' &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.phone.trim().length >= 10 &&
    form.message.trim().length > 10;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully 🚀');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur-xl p-10 rounded-2xl shadow-xl">

        <h1 className="text-4xl font-bold mb-6 text-center">
          Plan Your Char Dham Yatra
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Fill your details and our travel expert will contact you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your travel plan..."
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
              isValid
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105 shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit Enquiry
          </button>

        </form>
      </div>
    </div>
  );
}