
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    message: '',
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    try {
      // In a real application, you would send this data to a server
      // For now, we'll simulate a successful submission after a delay
      console.log("Form data to be submitted:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Send email using a service like EmailJS or your backend
      // In a real implementation, you would send the formData to sathwikajakkani27@gmail.com
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: 'Wedding',
        message: '',
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("There was a problem submitting your inquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your phone number"
        />
      </div>
      
      <div>
        <label htmlFor="eventType" className="block text-gray-700 mb-2">Event Type *</label>
        <select
          id="eventType"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="Wedding">Wedding</option>
          <option value="Birthday">Birthday Party</option>
          <option value="Corporate">Corporate Event</option>
          <option value="Conference">Conference</option>
          <option value="College">College Event</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-gray-700 mb-2">Your Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Tell us about your event, requirements, and any questions you have..."
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="btn-primary w-full"
        disabled={submitting}
      >
        {submitting ? 'Sending...' : 'Submit Inquiry'}
      </button>
      
      <p className="text-sm text-gray-500 text-center mt-4">
        We'll get back to you within 24 hours. Your information is kept confidential.
      </p>
    </form>
  );
};

export default ContactForm;
