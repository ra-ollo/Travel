import { Helmet } from "react-helmet-async";

function RefundPolicy() {
  return (
    <>
      <Helmet>
        <title>Cancellation & Refund Policy | CX Char Dham Yatra</title>
      </Helmet>

      <div className="max-w-7xl mx-auto pt-20 md:pt-24 my-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Cancellation & Refund Policy
        </h1>

        <p>
          CX Char Dham Yatra strives to provide reliable travel assistance and booking services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Cancellation Policy
        </h2>

        <p>
          Cancellation requests must be made through official communication channels
          including phone, WhatsApp or email.
        </p>

        <p>
          Cancellation charges may apply depending on the package, hotel,
          transport or helicopter booking terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Refund Policy
        </h2>

        <p>
          Refunds, if applicable, will be processed according to vendor and service provider policies.
        </p>

        <p>
          Refund timelines may vary depending on banking and payment processing systems.
        </p>

        <p>
          Certain bookings including helicopter services, last-minute reservations
          and peak-season packages may be non-refundable.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Force Majeure
        </h2>

        <p>
          CX Char Dham Yatra shall not be held responsible for cancellations or delays
          caused by weather conditions, natural disasters, government restrictions,
          road closures or unforeseen events.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Contact
        </h2>

        <p>
          For cancellation or refund related queries, please contact us through our official website.
        </p>

        <p className="mt-6">
          <strong>CX Char Dham Yatra</strong><br />
          https://www.cxchardham.online
        </p>
      </div>
    </>
  );
}

export default RefundPolicy;