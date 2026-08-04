import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

let initialized = false;

export function sendContactEmail({ name, email, message }) {
  if (!initialized && PUBLIC_KEY) {
    emailjs.init({ publicKey: PUBLIC_KEY });
    initialized = true;
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    from_name: name,
    from_email: email,
    message,
  });
}

export function useEmailJS() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const formRef = useRef(null);

  const send = async (formData) => {
    setStatus('loading');
    setError(null);

    try {
      await sendContactEmail(formData);

      setStatus('success');

      // Return button to normal after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);

      return true;
    } catch (err) {
      setError(err?.text || 'Failed to send message');
      setStatus('error');

      return false;
    }
  };

  const reset = () => {
    setStatus('idle');
    setError(null);
  };

  return { status, error, send, reset, formRef, configured: Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) };
}
