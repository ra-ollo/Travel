import { Helmet } from "react-helmet-async";

function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us | CX Char Dham Yatra</title>
      </Helmet>

      <div className="max-w-7xl mx-auto pt-20 md:pt-24 my-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          About Us
        </h1>

        <p>
          CX Char Dham Yatra is dedicated to helping travelers experience
          spiritual journeys across Uttarakhand with comfort and convenience.
        </p>

        <p>
          We provide assistance for Char Dham Yatra packages, Kedarnath tours,
          helicopter booking inquiries, hotel arrangements and pilgrimage travel planning.
        </p>

        <p>
          Our goal is to make religious travel easier, safer and more accessible
          for pilgrims visiting Kedarnath, Badrinath, Gangotri and Yamunotri.
        </p>

        <p>
          We focus on customer support, travel coordination and reliable guidance
          throughout the yatra planning process.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Why Choose Us
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Dedicated pilgrimage travel assistance</li>
          <li>Customized Char Dham packages</li>
          <li>Helicopter and transport inquiry support</li>
          <li>Customer-focused travel planning</li>
          <li>Support via phone and WhatsApp</li>
        </ul>

        <p className="mt-6">
          <strong>CX Char Dham Yatra</strong><br />
          https://www.cxchardham.online
        </p>
      </div>
    </>
  );
}

export default AboutUs;