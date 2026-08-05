import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    emailjs.sendForm(
      'service_h8sztvi',
      'template_s9tdi4f',
      formRef.current,
      '4rjqkl7zEI2CfIbuf'
    )
    .then(() => {
      setStatus('Message Sent Successfully!');
      formRef.current.reset();
    }, (error) => {
      console.error(error);
      setStatus('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Let's Work <span className="text-primary">Together</span>
        </h2>
        <p className="text-secondaryText">Have a project in mind? Drop us a message below.</p>
      </div>

      <form ref={formRef} onSubmit={sendEmail} className="bg-cardBg p-8 md:p-10 rounded-2xl border border-white/10 space-y-6">
        <div>
          <label className="block text-sm font-medium text-secondaryText mb-2">Your Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full bg-darkBg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondaryText mb-2">Your Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full bg-darkBg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondaryText mb-2">Project Details</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full bg-darkBg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            placeholder="Describe your design needs..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-black font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors duration-300"
        >
          Send Message
        </button>

        {status && <p className="text-center text-sm text-primary mt-4">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;