import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    emailjs.init('hynAcGvnNZwPe6z4I');
    checkBlocked();
  }, []);

  // ✅ Check cooldown
  const checkBlocked = () => {
    const last = localStorage.getItem("formSubmittedAt");
    if (!last) return;

    const diff = Date.now() - parseInt(last);

    if (diff < 5 * 60 * 1000) {
      setBlocked(true);

      // auto-unblock after remaining time
      setTimeout(() => {
        setBlocked(false);
      }, 5 * 60 * 1000 - diff);
    }
  };

  const isValid =
    form.name.trim() !== '' &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.phone.trim().length >= 10 &&
    form.message.trim().length > 10 &&
    !blocked;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const cleaned = value.replace(/\D/g, '');
      setForm({ ...form, phone: cleaned });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (blocked) return;

    setLoading(true);

    emailjs.send(
      'service_1fxjzfl',
      'template_v974ogo',
      {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        message: form.message,
      }
    )
    .then(() => {
      setSuccess(true);

      // ✅ store timestamp (shared with Home page)
      localStorage.setItem("formSubmittedAt", Date.now());
      setBlocked(true);

      setForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // auto-unblock after 5 mins
      setTimeout(() => setBlocked(false), 5 * 60 * 1000);

      // optional redirect after popup
      setTimeout(() => {
        setSuccess(false);
        navigate("/");
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
    });
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

          <input type="text" name="name" placeholder="Full Name"
            value={form.name} onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />

          <input type="email" name="email" placeholder="Email Address"
            value={form.email} onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />

          <input type="tel" name="phone" placeholder="Phone Number"
            value={form.phone} onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />

          <textarea name="message" rows="4"
            placeholder="Tell us about your travel plan..."
            value={form.message} onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />

          {/* ✅ Block message */}
          {blocked && (
            <p className="text-yellow-600 text-sm text-center">
              You can submit again after 5 minutes ⏳
            </p>
          )}

          <button
            type="submit"
            disabled={!isValid || loading}
            className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
              isValid
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105 shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {blocked ? 'Please Wait...' : loading ? 'Sending...' : 'Submit Enquiry'}
          </button>

        </form>
      </div>

      {/* ✅ SUCCESS POPUP */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white px-10 py-8 rounded-2xl shadow-2xl text-center">
            <div className="text-5xl mb-3">✅</div>
            <h2 className="text-2xl font-bold text-green-600">
              Sent Successfully!
            </h2>
            <p className="text-gray-600 mt-2">
              We’ll contact you shortly 🚀
            </p>
          </div>
        </div>
      )}

    </div>
  );
}