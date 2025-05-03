import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="no-border">
          <h5 className="text-xl font-semibold mb-2">Contact</h5>
          <p className="text-gray-700">
            Email: <a href="mailto:miguel_bustamante_84@outlook.com" className="text-blue-600 hover:underline">miguel_bustamante_84@outlook.com</a>
          </p>
          <p className="text-gray-700">
            Phone Number: <a href="tel:+50230716777" className="text-blue-600 hover:underline">+502 30716777</a>
          </p>
          <p className="text-gray-700">
            WhatsApp: <a href="https://wa.me/50230716777" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Chat on WhatsApp</a>
          </p>
        </div>
        <div className="no-border">
          <h5 className="text-xl font-semibold mb-2">Follow Me</h5>
          <p className="text-gray-700">
            X (Twitter): <a href="https://x.com/poncho4all" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@poncho4all</a>
          </p>
          <p className="text-gray-700">
            LinkedIn: <a href="https://www.linkedin.com/in/miguelalfonsobustamantesanchez/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Miguel Bustamante</a>
          </p>
          <p className="text-gray-700">
            GitHub: <a href="https://github.com/miguelbustamante" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/miguelbustamante</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
