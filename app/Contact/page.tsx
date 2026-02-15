"use client";

import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // 1️⃣ WhatsApp message
  const whatsappNumber = "971547818460"; // without +
  const message = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message}
  `;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");

  // 2️⃣ Send email
  await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  setForm({ name: "", email: "", phone: "", message: "" });
};


  return (
    <section className="w-full bg-gray-100 py-16 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT INFO */}
        <div>
          <h2 className="uppercase text-3xl sm:text-4xl font-serif font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>

          <p className="text-gray-700 mb-8">
            Get in touch with us for your next construction project.  
            Our team is ready to assist you with expert guidance and support.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>📍 <strong>Address:</strong> Dubai, UAE</p>
            <p>📞 <strong>Phone:</strong> +971 50 123 4567</p>
            <p>✉️ <strong>Email:</strong> info@jwaralebdaa.com</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-black text-lg font-medium rounded-lg
            hover:bg-black hover:text-white transition-all duration-300"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactUs;
