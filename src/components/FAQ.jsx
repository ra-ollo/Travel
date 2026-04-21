// src/components/FAQ.jsx
export default function FAQ() {
  const faqs = [
    { q: 'What is included in the travel packages?', a: 'Our packages typically include accommodation, local transportation, guided tours, and some meals. Details vary by package.' },
    { q: 'How can I make a booking?', a: 'You can book by contacting us via WhatsApp (green button below), email, or the contact form on this page.' },
    { q: 'Is it safe to travel now?', a: 'Yes, all our tours follow local health guidelines. We also offer flexible cancellation policies in case of emergencies.' },
    { q: 'Do you offer custom tour plans?', a: 'Absolutely! Contact us with your requirements and we will tailor a custom itinerary for you.' },
  ];
  return (
    <div className="max-w-4xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-heading font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((item, idx) => (
          <details key={idx} className="border rounded-lg p-4 bg-white shadow">
            <summary className="font-semibold text-lg cursor-pointer">{item.q}</summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
