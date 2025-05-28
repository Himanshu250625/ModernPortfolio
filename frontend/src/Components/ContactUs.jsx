import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-20 px-6 text-primary min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12 font-serif">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="bg-[#1e1e2f] p-10 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-primary text-xl" />
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-gray-300">Gorakhpur, Uttar Pradesh, India</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <FaPhone className="text-primary text-xl" />
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-300">+91 9120132178</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary text-xl" />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-300">him979322@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="mt-10 h-64 bg-base-300 rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113996.13962041277!2d83.327777!3d26.760555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991eb3e1e671b6f%3A0x7344d2d3fc7e7a54!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-[#1e1e2f] p-10 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">Subject</span>
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className={`input input-bordered w-full ${errors.subject ? 'input-error' : ''}`}
              value={formData.subject}
              onChange={handleChange}
              required
            />
            {errors.subject && <p className="text-error text-sm mt-1">{errors.subject}</p>}
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text text-white">Message</span>
            </label>
            <textarea
              name="message"
              className={`textarea textarea-bordered h-32 w-full ${errors.message ? 'textarea-error' : ''}`}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <p className="text-error text-sm mt-1">{errors.message}</p>}
          </div>

          <button 
            type="submit" 
            className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
