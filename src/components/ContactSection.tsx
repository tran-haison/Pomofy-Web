"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setForm({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setError(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="pomofy-contact w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-[40px] font-[700]">Contact Us</h2>
        <p className="text-[16px] font-[400]">
          We&apos;d love to hear from you. Have any feedback, feature requests,
          or bug reports? Let us know!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-5 bg-white/20 rounded-[30px] shadow-lg p-6 sm:p-10"
      >
        {error && (
          <div className="bg-red-100 text-red-800 px-4 py-3 rounded shadow text-center w-full">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={form.firstName}
            onChange={handleChange}
            required
            disabled={loading}
            className="px-7 py-4 rounded-[20px] border-0 bg-white/50 focus:outline-none focus:ring-1 focus:ring-yellow-300 disabled:opacity-50"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={form.lastName}
            onChange={handleChange}
            required
            disabled={loading}
            className="px-7 py-4 rounded-[20px] border-0 bg-white/50 focus:outline-none focus:ring-1 focus:ring-yellow-300 disabled:opacity-50"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={form.email}
          onChange={handleChange}
          required
          disabled={loading}
          className="px-7 py-4 rounded-[20px] border-0 bg-white/50 focus:outline-none focus:ring-1 focus:ring-yellow-300 disabled:opacity-50"
        />
        <textarea
          name="message"
          placeholder="Message*"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          disabled={loading}
          className="px-7 py-4 rounded-[20px] border-0 bg-white/50 focus:outline-none focus:ring-1 focus:ring-yellow-300 resize-none disabled:opacity-50"
        />
        {submitted ? (
          <div className="text-green-600 px-4 py-3 text-center w-full">
            Thank you for reaching out! We&apos;ll get back to you soon.
          </div>
        ) : (
          <> </>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white rounded-full px-6 py-3 text-[16px] font-[500] hover:bg-black/90 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Image
                src="/ic-send.svg"
                alt="Send"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </>
          )}
        </button>
      </form>
    </section>
  );
}
