import { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors)?.length > 0) {
      setErrors(validationErrors);
      console.log(validationErrors);
    } else {
      console.log(formData);
      setFormData({
        email: '',
        name: '',
        message: '',
      });

      setErrors({});
      alert('Formular trimis cu succes');
    }
  }

  function validate() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Numele este Obligatoriu';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Emailul este Obligatoriu';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Adresa de email invalida';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Mesajul este Obligatoriu';
    }

    return newErrors;
  }

  return (
    <div className="app">
      <h1>Contact Form</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nume:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name ? <span className="error">{errors.name}</span> : null}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email ? <span className="error">{errors.email}</span> : null}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message ? (
            <span className="error">{errors.message}</span>
          ) : null}
        </div>

        <button type="submit">Trimite</button>
      </form>
    </div>
  );
}

export default ContactForm;
