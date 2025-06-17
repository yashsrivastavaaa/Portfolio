import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { contactInfo } from "../../Data";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=yashsrivns@gmail.com&su=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.open(gmailUrl, "_blank");
    form.current.reset();
    setIsSending(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to connect? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Send Me a Message
            </h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  placeholder="Hi Yash, I'd like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg transition-all duration-300 ${isSending
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:from-blue-700 hover:to-purple-700"
                  }`}
              >
                {isSending ? "Opening Gmail..." : "Send Message via Gmail"}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-300">
                      {item.title}
                    </h4>
                    <a
                      href={item.link}
                      target={item.newTab ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-400 transition-colors"
                    >
                      {item.content}
                    </a>
                  </div>
                </div>
              ))}

              <div className="pt-6 mt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-gray-300 mb-3">
                  Availability
                </h4>
                <p className="text-gray-400">
                  I'm currently open to new opportunities and collaborations.
                  Feel free to reach out via any of the channels above.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
