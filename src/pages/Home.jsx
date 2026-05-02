import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import HeroSlider from '../components/HeroSlider';
import PackageCard from '../components/PackageCard';
import BlogTeaser from '../components/BlogTeaser';
import FAQ from '../components/FAQ';
import packages from '../data/Packages.js';
import blogs from '../data/Blog.js';

export default function Home() {

  const navigate = useNavigate();

  // ✅ MINI FORM STATE
  const [miniForm, setMiniForm] = useState({
    name: '',
    phone: ''
  });

  const [success, setSuccess] = useState(false);
  const [blocked, setBlocked] = useState(false);

  // ✅ Check cooldown on load
  useEffect(() => {
    checkBlocked();
  }, []);

  const checkBlocked = () => {
    const last = localStorage.getItem("formSubmittedAt");
    if (!last) return;

    const diff = Date.now() - parseInt(last);
    if (diff < 5 * 60 * 1000) {
      setBlocked(true);

      // auto-unblock after remaining time
      setTimeout(() => setBlocked(false), 5 * 60 * 1000 - diff);
    }
  };

  const isMiniValid =
    miniForm.name.trim() !== '' &&
    /^\d{10}$/.test(miniForm.phone) &&
    !blocked;

  const handleMiniChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const cleaned = value.replace(/\D/g, '');
      setMiniForm({ ...miniForm, phone: cleaned });
    } else {
      setMiniForm({ ...miniForm, [name]: value });
    }
  };

  const handleMiniSubmit = (e) => {
    e.preventDefault();

    if (blocked) return;

    emailjs.send(
      'service_1fxjzfl',
      'template_v974ogo',
      {
        from_name: miniForm.name,
        phone: miniForm.phone,
        message: "Callback request from homepage",
        from_email: "no-reply@site.com"
      }
    )
    .then(() => {
      setSuccess(true);

      // ✅ store submission time
      localStorage.setItem("formSubmittedAt", Date.now());
      setBlocked(true);

      setMiniForm({
        name: '',
        phone: ''
      });

      // auto unblock after 5 mins
      setTimeout(() => setBlocked(false), 5 * 60 * 1000);

      // show popup then redirect
      setTimeout(() => {
        setSuccess(false);
        navigate("/");
      }, 2000);
    })
    .catch((err) => {
      console.log("EmailJS Error:", err);
    });
  };

  return (
    <>
      <Helmet>
        <title>Pawan Hans Limited</title>
        <meta
          name="description"
          content="Discover affordable travel packages and plan your next adventure."
        />
      </Helmet>

      <HeroSlider />

      {/* PACKAGES */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-10 tracking-tight">
            Popular Packages
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {packages.filter(pkg => pkg.featured).map(pkg => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/packages"
              className="inline-block px-8 py-3 text-lg font-semibold text-white 
              bg-gradient-to-r from-blue-600 to-indigo-600 
              rounded-full shadow-lg hover:shadow-xl 
              hover:scale-105 transition-all duration-300"
            >
              View All Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Travel Tips Blog</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogs.map(blog => (
              <BlogTeaser key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 blur-3xl bg-white"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-14 shadow-2xl">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* LEFT */}
              <div className="text-white space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Plan Your Dream Char Dham Yatra
                </h2>

                <p className="text-white/80">
                  Talk to our travel experts and get a personalized itinerary,
                  best prices & premium experience.
                </p>

                <Link
                  to="/contact"
                  className="inline-block mt-4 px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:scale-105 transition"
                >
                  Detailed Enquiry →
                </Link>
              </div>

              {/* RIGHT FORM */}
              <form
                onSubmit={handleMiniSubmit}
                className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl space-y-4 border border-white/30"
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={miniForm.name}
                  onChange={handleMiniChange}
                  className="w-full p-3 rounded-lg bg-white/80 text-gray-800 outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={miniForm.phone}
                  onChange={handleMiniChange}
                  className="w-full p-3 rounded-lg bg-white/80 text-gray-800 outline-none"
                />

                {blocked && (
                  <p className="text-yellow-200 text-sm">
                    You can submit again after 5 minutes ⏳
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!isMiniValid}
                  className={`w-full py-3 rounded-full font-semibold transition ${
                    isMiniValid
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:scale-105"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {blocked ? "Please Wait..." : "Get Callback"}
                </button>

              </form>

            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white px-8 py-6 rounded-2xl shadow-2xl text-center">
            <div className="text-4xl mb-2">✅</div>
            <h2 className="text-xl font-bold text-green-600">
              Request Sent!
            </h2>
            <p className="text-gray-600 text-sm">
              We’ll call you soon 🚀
            </p>
          </div>
        </div>
      )}

    </>
  );
}