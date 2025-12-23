'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Send, Upload, X } from 'lucide-react';
import { toast } from 'react-toastify';
import { useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { Button } from '@/components/Button/Button';
import './ContactForm.scss';

interface ContactFormValues {
  style?: React.CSSProperties;
  buttonTitle?: string;
}

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

export const ContactForm = ({ style }: ContactFormValues) => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
      ];
      if (!allowedTypes.includes(file.type)) {
        toast.error(
          'Invalid file type. Only images (JPEG, PNG, GIF, WebP) are allowed.',
        );
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File too large. Maximum size is 5MB.');
        return;
      }

      setScreenshot(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const removeScreenshot = () => {
    setScreenshot(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      if (!captchaToken) {
        toast.error('Please complete the CAPTCHA verification');
        setSubmitting(false);
        return;
      }

      try {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('subject', values.subject);
        formData.append('message', values.message);
        formData.append('captchaToken', captchaToken);

        if (screenshot) {
          formData.append('screenshot', screenshot);
        }

        const response = await fetch('/api/contact', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to send message');
        }

        toast.success('Message sent successfully!');
        resetForm();
        setCaptchaToken(null);
        removeScreenshot();
        captchaRef.current?.resetCaptcha();
      } catch (error) {
        console.error('Contact form error:', error);
        toast.error(
          error instanceof Error ? error.message : 'Failed to send message',
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      className="contact-form--container"
      suppressHydrationWarning
      style={style}
    >
      <h3>Send us a Message</h3>
      <form
        onSubmit={formik.handleSubmit}
        className="contact-form"
        suppressHydrationWarning
      >
        <div className="contact-form--user">
          <div className="contact-form--group">
            <label className="required" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={
                formik.touched.name && formik.errors.name ? 'error' : ''
              }
              autoComplete="on"
            />
            {formik.touched.name && formik.errors.name && (
              <span className="contact-form--error">{formik.errors.name}</span>
            )}
          </div>

          <div className="contact-form--group">
            <label className="required" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={
                formik.touched.email && formik.errors.email ? 'error' : ''
              }
              autoComplete="on"
            />
            {formik.touched.email && formik.errors.email && (
              <span className="contact-form--error">{formik.errors.email}</span>
            )}
          </div>
        </div>

        <div className="contact-form--group">
          <label className="required" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            className={
              formik.touched.subject && formik.errors.subject ? 'error' : ''
            }
            autoComplete="on"
          />
          {formik.touched.subject && formik.errors.subject && (
            <span className="contact-form--error">{formik.errors.subject}</span>
          )}
        </div>

        <div className="contact-form--group">
          <label className="required" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className={
              formik.touched.message && formik.errors.message ? 'error' : ''
            }
          />
          {formik.touched.message && formik.errors.message && (
            <span className="contact-form--error">{formik.errors.message}</span>
          )}
        </div>

        {/* Screenshot Upload */}
        <div className="contact-form--group">
          <label htmlFor="screenshot">Screenshot (optional)</label>
          <div className="contact-form--upload">
            <input
              ref={fileInputRef}
              id="screenshot"
              name="screenshot"
              type="file"
              accept="image/jpeg,image/png,image/gif,image/webp"
              onChange={handleFileChange}
              className="contact-form--file-input"
            />
            {!screenshot ? (
              <label
                htmlFor="screenshot"
                className="contact-form--upload-label"
              >
                <Upload size={20} />
                <span>Click to upload a screenshot</span>
                <span className="contact-form--upload-hint">
                  JPEG, PNG, GIF, WebP (max 5MB)
                </span>
              </label>
            ) : (
              <div className="contact-form--preview">
                {previewUrl && (
                  <img src={previewUrl} alt="Screenshot preview" />
                )}
                <div className="contact-form--preview-info">
                  <span>{screenshot.name}</span>
                  <span className="contact-form--preview-size">
                    {(screenshot.size / 1024).toFixed(1)} KB
                  </span>
                </div>
                <button
                  type="button"
                  onClick={removeScreenshot}
                  className="contact-form--remove-btn"
                  aria-label="Remove screenshot"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* hCaptcha */}
        <div className="contact-form--captcha">
          <HCaptcha
            ref={captchaRef}
            sitekey={
              process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ||
              '10000000-ffff-ffff-ffff-000000000001'
            }
            onVerify={(token) => setCaptchaToken(token)}
            onExpire={() => setCaptchaToken(null)}
          />
        </div>

        <Button
          type="submit"
          variant="gradient"
          loading={formik.isSubmitting}
          disabled={formik.isSubmitting}
        >
          <Send size={16} />
          {formik.isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};
