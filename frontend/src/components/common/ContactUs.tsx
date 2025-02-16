"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FormData } from "@/types/index";

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    country: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    setLoading(true);
    setResponseMessage(null);
  
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      console.log(formData);
  
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }
  
      setResponseMessage("Message sent successfully!");
  
      // Reload page after 2 seconds on success
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      if (error instanceof Error) {
        setResponseMessage(error.message);
      } else {
        setResponseMessage("An unexpected error occurred");
      }
  
      // Reload page after 2 seconds on error
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } finally {
      setLoading(false);
    }
  };
  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-9" id="contactus">
      <div className="max-w-7xl mx-auto bg-[#444444] rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Contact Information */}
          <div className="space-y-8">
            <h2 className="text-[var(--green)] text-6xl md:text-8xl font-normal mb-4">Contact Us</h2>
            <p className="text-[#f5f5f5] text-lg">
              Have questions, need a quote, or just want to say hello? Get in touch with us today
            </p>
            <div className="w-full border-t-[2px] border-[#f5f5f5]"></div>

            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[var(--green)] mt-1" />
                <div>
                  <p className="text-[#f5f5f5]">Email</p>
                  <a href="mailto:Sales@DBQPro.com" className="text-[#f5f5f5] hover:text-[var(--green)] transition-colors">
                    Sales@DBQPro.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[var(--green)] mt-1" />
                <div>
                  <p className="text-[#f5f5f5]">Mobile</p>
                  <a href="tel:+97144124876" className="text-[#f5f5f5] hover:text-[var(--green)] transition-colors">
                    +971 44 124 8876
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[var(--green)] mt-1" />
                <div>
                  <p className="text-[#f5f5f5]">Address</p>
                  <p className="text-[#f5f5f5]">Suite 756 031 Ines Riverway,<br />Rhiannonchester</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-[#383838] rounded-xl p-6 border-2 border-[#323232]">
            <h3 className="text-[#EDEDED] text-2xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-[#EDEDED] mb-6">
              Reach out today and take the first step towards an unforgettable experience.
            </p>

            {responseMessage && (
              <p className={`text-center ${responseMessage.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                {responseMessage}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full bg-transparent text-white px-4 py-3 rounded-lg border-b-2 border-[#f5f5f5] focus:border-[var(--green)] focus:outline-none focus:ring-0 transition-colors" />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full bg-transparent text-white px-4 py-3 rounded-lg border-b-2 border-[#f5f5f5] focus:border-[var(--green)] focus:outline-none focus:ring-0 transition-colors" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="tel" name="mobile" placeholder="Mobile No" value={formData.mobile} onChange={handleChange} className="w-full bg-transparent text-white px-4 py-3 rounded-lg border-b-2 border-[#f5f5f5] focus:border-[var(--green)] focus:outline-none focus:ring-0 transition-colors" />
                <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="w-full bg-transparent text-white px-4 py-3 rounded-lg border-b-2 border-[#f5f5f5] focus:border-[var(--green)] focus:outline-none focus:ring-0 transition-colors" />
              </div>
              <textarea name="message" placeholder="How can we help you?" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-transparent text-white px-4 py-3 rounded-lg border-b-2 border-[#f5f5f5] focus:border-[var(--green)] focus:outline-none focus:ring-0 transition-colors"></textarea>
              <button type="submit" disabled={loading} className="w-full bg-[var(--green)] text-white py-3 rounded-lg font-semibold hover:bg-[#9CCF03] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--green)] focus:ring-offset-2 focus:ring-offset-[#333333]">
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
