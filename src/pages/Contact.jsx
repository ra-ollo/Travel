// src/pages/Contact.jsx
import { useState } from 'react';
import emailjs from 'emailjs-com'; // Install with: npm install emailjs-com

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_id',  // replace with your EmailJS service ID
      'template_id', // replace with your EmailJS template ID
      form,
      'user_id'      // replace with your EmailJS user ID (public key)
    ).then(
      () => setStatus('Message sent!'),
      () => setStatus('Failed to send.')
    );
  };

  return (
    <div className="max-w-3xl mx-auto my-16 px-4">
      <h1 className="text-3xl font-heading font-bold mb-6 text-center">Contact Us</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <form className="flex-1 space-y-4" onSubmit={sendEmail}>
          <input 
            type="text" name="name" required 
            placeholder="Your Name"
            value={form.name} onChange={e => setForm({...form, name: e.target.value})}
            className="w-full border rounded px-3 py-2"
          />
          <input 
            type="email" name="email" required 
            placeholder="Your Email"
            value={form.email} onChange={e => setForm({...form, email: e.target.value})}
            className="w-full border rounded px-3 py-2"
          />
          <textarea 
            name="message" required 
            placeholder="Your Message or Requirements"
            rows="5"
            value={form.message} onChange={e => setForm({...form, message: e.target.value})}
            className="w-full border rounded px-3 py-2"
          ></textarea>
          <button 
            type="submit" 
            className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Send Message
          </button>
          {status && <p className="mt-2">{status}</p>}
        </form>
        {/* WhatsApp Contact */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-4">
          <p className="text-lg">Or chat with us on WhatsApp:</p>
          <a 
            href="https://wa.me/919876543210" 
            target="_blank" rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
          >
            <svg className="w-6 h-6 mr-2" /* WhatsApp icon SVG */ viewBox="0 0 24 24"><path fill="currentColor" d="M...Z"/></svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
