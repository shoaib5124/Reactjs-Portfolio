import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from '../container'

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wtax41o",  // Replace with your EmailJS Service ID
        "template_xoxzyv3",  // Replace with your EmailJS Template ID
        form.current,
        "NpycB78ErGhGXNsN9"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className=" md:py-24 "
    >
     <Container className="flex flex-col justify-center items-center">
        {/* Toast Container */}
        <ToastContainer />

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl">CONTACT</h2>
          <div className="w-[16%] h-1 md:h-2 bg-purple-500 mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 text-base sm:text-lg md:text-lg lg:text-2xl font-semibold">
            I’d love to hear from you—reach out for any opportunities or questions!
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-8 w-full max-w-4xl bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-2xl font-semibold text-white text-center">
            Connect With Me <span className="ml-1">🚀</span>
          </h3>

          <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            
            {/* Send Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>
     </Container>
    </section>
  );
};

export default Contact     
