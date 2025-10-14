'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/Button/Button';
import { Send } from 'lucide-react';
import { toast } from 'react-toastify';
import './ContactForm.scss';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string()
    .min(20, 'Message must be at least 20 characters')
    .required('Message is required'),
});

export const ContactForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        toast.success('Message sent successfully!');
        resetForm();
      } catch (error) {
        toast.error('Failed to send message');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="contact-form--container" suppressHydrationWarning>
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
          <label htmlFor="subject">Subject</label>
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
