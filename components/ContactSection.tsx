
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import contactBg from '../public/images/hero-bg-society.jpg';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sayf@multicode.nl?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Naam: ${formData.name}\nEmail: ${formData.email}\n\nBericht:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden scroll-mt-20">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.contact.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">{t.contact.infoTitle}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{t.contact.address}</h4>
                    <p className="text-slate-600">Doelenstraat 3 f, 3401DV IJsselstein</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{t.contact.email}</h4>
                    <a href="mailto:sayf@multicode.nl" className="text-blue-600 hover:underline">sayf@multicode.nl</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.form.placeholderName}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.form.placeholderEmail}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                  {t.contact.form.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.contact.form.placeholderSubject}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.form.placeholderMessage}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none bg-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <i className="fas fa-paper-plane"></i>
                {t.contact.form.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
