"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
      } else {
        setSuccess("✅ Your message has been sent successfully.");

        setForm({
          full_name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch {
      setError("Something went wrong.");
    }

    setLoading(false);
  };
return (
  <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">

    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Full Name
      </label>

      <input
        type="text"
        name="full_name"
        value={form.full_name}
        onChange={handleChange}
        required
        placeholder="Enter your full name"
        className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-teal-600"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Email Address
      </label>

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        placeholder="example@email.com"
        className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-teal-600"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Phone Number
      </label>

      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="+234..."
        className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-teal-600"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Subject
      </label>

      <input
        type="text"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        required
        placeholder="Subject"
        className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-teal-600"
      />
    </div>

    <div className="md:col-span-2">
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Message
      </label>

      <textarea
        rows={6}
        name="message"
        value={form.message}
        onChange={handleChange}
        required
        placeholder="Write your message here..."
        className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-teal-600"
      />
    </div>

    {success && (
      <div className="md:col-span-2 rounded-xl bg-green-100 p-4 text-green-700">
        {success}
      </div>
    )}

    {error && (
      <div className="md:col-span-2 rounded-xl bg-red-100 p-4 text-red-700">
        {error}
      </div>
    )}

    <div className="md:col-span-2 flex justify-center">
      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-teal-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-teal-700 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </div>

  </form>
);
}
