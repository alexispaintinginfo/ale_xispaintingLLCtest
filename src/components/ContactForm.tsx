import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // The form uses formsubmit.co to send emails directly to the creator
  const formAction = "https://formsubmit.co/alexispaintinginfo@gmail.com";

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">Get an Estimate</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Ready to Transform Your Space?
          </p>
          <p className="text-lg text-slate-600">
            Fill out the form below to request a free, no-obligation estimate for your painting or remediation project.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3"
          >
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <p className="text-slate-600 mb-8">
                Reach out to us directly or fill out the form, and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Phone</p>
                    <p className="text-lg font-semibold text-slate-900">(520) 365-9629</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Email</p>
                    <p className="text-lg font-semibold text-slate-900">alexispaintinginfo@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Service Area</p>
                    <p className="text-lg font-semibold text-slate-900">Serving the greater Tucson area</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Business Hours</h4>
                <div className="flex justify-between text-slate-600 mb-2">
                  <span>Mon - Fri:</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-600 mb-2">
                  <span>Saturday:</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3"
          >
            <form
              action={formAction}
              method="POST"
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl"
              onSubmit={() => setIsSubmitting(true)}
            >
              {/* Formsubmit configuration */}
              <input type="hidden" name="_subject" value="New Estimate Request from Ale-Xis Painting Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Interior Painting">Interior Painting</option>
                    <option value="Exterior Painting">Exterior Painting</option>
                    <option value="Remediation Services">Remediation Services</option>
                    <option value="Commercial Painting">Commercial Painting</option>
                    <option value="Stucco Repair">Stucco Repair</option>
                    <option value="Drywall Repair">Drywall Repair</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
                  Property Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="123 Main St, City, State, ZIP"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                  placeholder="Please describe your project, including approximate square footage if known..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Request...' : 'Request Free Estimate'}
                {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
              </button>
              
              <p className="mt-4 text-sm text-center text-slate-500">
                By submitting this form, you agree to be contacted regarding your estimate request.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
