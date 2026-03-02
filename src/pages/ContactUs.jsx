import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { MapPin, Phone, Mail, MessageSquare, Send, Clock, ChevronRight } from "lucide-react";
import Banner from "../components/Banner";
import axios from "axios";
import { toast } from "react-hot-toast";
import BannerBg from "../assets/contact-section-img.jpeg";
import OfficesCard from "../components/OfficesCard";

const API_URL = "https://api.imfoodsindia.com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formError) setFormError("");
  };

  const validateForm = () => {
    const { name, phone, email, subject } = formData;
    
    if (!name || !phone || !email || !subject) {
      setFormError("Please fill all required fields");
      toast.error("Please fill all required fields");
      return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError("Please enter a valid email address");
      toast.error("Please enter a valid email address");
      return false;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(phone)) {
      setFormError("Please enter a valid phone number");
      toast.error("Please enter a valid phone number");
      return false;
    }
    
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await axios.post(`${API_URL}/contact/addcontact`, formData);

      if (res.data.status === 200) {
        toast.success("Message Sent Successfully! We'll get back to you soon.", {
          duration: 5000,
          icon: '🎉',
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        setFormError("");
      } else {
        setFormError(res.data.message || "Something went wrong");
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (error) {
      setFormError("Contact request failed. Please try again later.");
      toast.error("Contact request failed. Please try again later.");
      console.error("Error submitting contact form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Contact IMFoods | Global Food Products Exporter from India</title>
        <meta
          name="description"
          content="Get in touch with IMFoods Pvt. Ltd. for inquiries about exporting Indian spices, fruits, vegetables, pulses, grains, oils, tea & coffee worldwide."
        />
        <link rel="canonical" href="https://imfoodsindia.com/contact" />
      </Helmet>

      <Banner
        title="Contact Us"
        bgImage={BannerBg}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact" }]}
      />

      {/* Quick Contact Info Strip */}
      <div className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center py-4 text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="w-4 h-4 text-green-600" />
              <span className="font-medium">24/7 Support:</span>
              <a href="tel:+919667866491" className="text-green-600 hover:underline font-semibold">
                +91 96678 66491
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="w-4 h-4 text-green-600" />
              <span className="font-medium">Email:</span>
              <a href="mailto:info@imfoodsindia.com" className="text-green-600 hover:underline">
                info@imfoodsindia.com
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="w-4 h-4 text-green-600" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Offices Card Component - Full Width */}
        <div className="mb-16">
          <OfficesCard />
        </div>

        {/* Contact Form Section with Improved Layout */}
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT SIDE - Contact Info & Benefits */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
                <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Let's Discuss Your <span className="text-green-600">Requirements</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you're looking to import premium Indian food products or have any questions about our services, our team is here to help you.
                </p>
              </div>

              {/* Benefits Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
                  <p className="text-gray-600 text-sm">We aim to respond to all inquiries within 24 hours</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
                  <p className="text-gray-600 text-sm">Get assistance from our experienced export team</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dedicated Support</h3>
                  <p className="text-gray-600 text-sm">Personal account manager for bulk orders</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Global Presence</h3>
                  <p className="text-gray-600 text-sm">Offices in India & Dubai for worldwide service</p>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600">500+</div>
                    <div className="text-gray-600 text-sm">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">50+</div>
                    <div className="text-gray-600 text-sm">Countries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">24/7</div>
                    <div className="text-gray-600 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Contact Form (Sticky) */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-green-600 to-green-800 px-8 py-6">
                  <div className="flex items-center">
                    <MessageSquare className="h-6 w-6 text-white mr-3" />
                    <div>
                      <h2 className="text-2xl font-bold text-white">Send us a message</h2>
                      <p className="text-green-100 text-sm mt-1">We'll get back to you within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Form Body */}
                <div className="p-8">
                  {formError && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-lg">
                      <p className="text-red-700 text-sm">{formError}</p>
                    </div>
                  )}

                  <form className="space-y-5" onSubmit={submitHandler}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                      />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                      />
                    </div>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                    />

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                    />

                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message (Optional)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white resize-none"
                    ></textarea>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-semibold rounded-xl transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </button>
                  </form>

                  {/* Trust Badge */}
                  <div className="mt-6 text-center">
                    <p className="text-xs text-gray-500">
                      By submitting this form, you agree to our 
                      <a href="/privacy-policy" className="text-green-600 hover:underline mx-1">Privacy Policy</a>
                      and
                      <a href="/terms" className="text-green-600 hover:underline ml-1">Terms of Service</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section (Optional) */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Us on Map</h3>
            <p className="text-gray-600">Visit our headquarters or any of our global offices</p>
          </div>
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-96 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.223712855371!2d77.2205!3d28.5245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e5f5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sSaket%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="IMFoods Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;