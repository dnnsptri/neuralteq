'use client';

import React, { useState, useEffect } from 'react';
import { PageSubtitle } from './typography';
import Button from './ui/Button';

interface FormData {
  name: string;
  email: string;
  note: string;
}

// TODO: Replace with your actual reCAPTCHA v3 site key
const RECAPTCHA_SITE_KEY = '6LfxqjMrAAAAAFycj20aUWgCDQNaRaTKhtGguuXv';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    note: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    // Dynamically load reCAPTCHA v3 script if not already present
    if (!document.querySelector('#recaptcha-script')) {
      const script = document.createElement('script');
      script.id = 'recaptcha-script';
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Validate required fields
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Always try to get reCAPTCHA token if grecaptcha is available
      let recaptchaToken = '';
      const grecaptcha = (window as any).grecaptcha;
      if (grecaptcha) {
        recaptchaToken = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' });
      }
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', note: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when field is modified
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="dark:bg-[#061C2B] bg-[#E0F0F0] p-8 md:p-12 rounded-lg max-w-[400px] mt-8" suppressHydrationWarning>
      <PageSubtitle className="mb-6 dark:text-[var(--foreground)] text-[#021019] mt-[-12px]">Get in touch</PageSubtitle>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-[var(--foreground)] text-[#021019]">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded border-0 bg-[#021019] text-[#ECFBFA] placeholder:text-[#ECFBFA]/20 focus:outline-none focus:ring-2 focus:ring-[#ECFBFA] focus:border-[#ECFBFA] ${errors.name ? 'border-2 border-red-500' : ''}`}
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-[var(--foreground)] text-[#021019]">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded border-0 bg-[#021019] text-[#ECFBFA] placeholder:text-[#ECFBFA]/20 focus:outline-none focus:ring-2 focus:ring-[#ECFBFA] focus:border-[#ECFBFA] ${errors.email ? 'border-2 border-red-500' : ''}`}
            placeholder="Your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="note" className="block text-sm font-medium mb-2 dark:text-[var(--foreground)] text-[#021019]">Note</label>
          <textarea
            id="note"
            name="note"
            value={formData.note}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded border-0 bg-[#021019] text-[#ECFBFA] placeholder:text-[#ECFBFA]/20 focus:outline-none focus:ring-2 focus:ring-[#ECFBFA] focus:border-[#ECFBFA]"
            placeholder="Your message"
          />
        </div>

        {submitStatus === 'success' && (
          <p className="text-green-500 text-sm">Thank you for your message! We'll get back to you soon.</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-500 text-sm">Something went wrong. Please try again later.</p>
        )}

        <div className="pt-4">
          <button 
            type="submit"
            disabled={isSubmitting}
            className="text-base font-bold px-4 py-3 rounded transition-all duration-300 bg-[var(--foreground)] text-[var(--background)] hover:bg-transparent hover:text-[var(--foreground)] hover:outline hover:outline-2 hover:outline-[var(--foreground)] disabled:opacity-50 disabled:pointer-events-none w-full"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
} 