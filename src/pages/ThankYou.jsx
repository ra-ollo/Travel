import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {

    //  Google Ads Conversion Tracking
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18139764842/Izf4CMWaq6gcEOqw28lD'
      });
    }

    const timer = setTimeout(() => {
      navigate("/");
    }, 3000); // redirect after 3 sec

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <div className="text-6xl">✅</div>
        <h1 className="text-3xl font-bold text-green-600">
          Thank You!
        </h1>
        <p className="text-gray-600">
          Your enquiry has been submitted successfully.
        </p>
        <p className="text-sm text-gray-400">
          Redirecting you to home...
        </p>
      </div>
    </div>
  );
}