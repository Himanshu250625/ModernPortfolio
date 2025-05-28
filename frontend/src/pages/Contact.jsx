import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    // Clear error when user starts typing
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
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-base-200 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-primary font-serif">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-base-100 rounded-3xl p-10 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-primary text-xl" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-base-content/70">Gorakhpur, Uttar Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <FaPhone className="text-primary text-xl" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-base-content/70">+91 9120132178</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-primary text-xl" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-base-content/70">him979322@gmail.com</p>
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
          <div className="bg-base-100 rounded-3xl p-10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium">Message</span>
                </label>
                <textarea
                  name="message"
                  className={`textarea textarea-bordered w-full ${errors.message ? 'textarea-error' : ''}`}
                  placeholder="Your message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.message && <p className="text-error text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className={`btn btn-primary px-10 text-lg ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
