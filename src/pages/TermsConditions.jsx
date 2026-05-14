import { Helmet } from "react-helmet-async";

function TermsConditions() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | CX Char Dham Yatra</title>
      </Helmet>

      <div className="max-w-7xl mx-auto pt-20 md:pt-24 my-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Terms & Conditions
        </h1>

        <p>
          Welcome to CX Char Dham Yatra. By accessing or using our website and services,
          you agree to comply with the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Booking & Services
        </h2>

        <p>
          All Char Dham Yatra packages, helicopter services, hotel bookings and
          transportation arrangements are subject to availability.
        </p>

        <p>
          Prices may vary depending on travel dates, government regulations,
          weather conditions and vendor availability.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          User Responsibilities
        </h2>

        <p>
          Users are responsible for providing accurate personal and travel information.
        </p>

        <p>
          Travelers must carry valid identification documents during the yatra.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Limitation of Liability
        </h2>

        <p>
          CX Char Dham Yatra acts as a travel assistance and booking service provider.
          We are not responsible for delays, weather disruptions, natural disasters,
          government restrictions or third-party service interruptions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Website Usage
        </h2>

        <p>
          Unauthorized use, copying or misuse of website content is prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Contact
        </h2>

        <p>
          For any questions regarding these terms, please contact us through our official website.
        </p>

        <p className="mt-6">
          <strong>CX Char Dham Yatra</strong><br />
          https://www.cxchardham.online
        </p>
      </div>
    </>
  );
}

export default TermsConditions;