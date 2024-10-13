import { useState } from 'react';
import './ReservationForm.css';

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: '',
  });

  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Numele este Obligatoriu';
    }
    if (!formData.email) {
      newErrors.email = 'Emailul este Obligatoriu';
    }
    if (!formData.date) {
      newErrors.date = 'Data este Obligatorie';
    }
    if (!formData.time) {
      newErrors.time = 'Ora este Obligatorie';
    }
    if (!formData.guests) {
      newErrors.guests = 'Numarul de persoane este Obligatoriu';
    }
    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors)?.length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '',
        specialRequests: '',
      });
      setErrors({});
      alert('revervarea a fost trimisa');
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <h2>Formular do Revervare</h2>

      <div>
        <label htmlFor="name">Nume:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name ? <span className="error">{errors.name}</span> : null}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email ? <span className="error">{errors.email}</span> : null}
      </div>

      <div>
        <label htmlFor="date">Data:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date ? <span className="error">{errors.date}</span> : null}
      </div>

      <div>
        <label htmlFor="time">Ora:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        {errors.time ? <span className="error">{errors.time}</span> : null}
      </div>

      <div>
        <label htmlFor="guests">Numar de persoane:</label>
        <input
          type="text"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
        />
        {errors.guests ? <span className="error">{errors.guests}</span> : null}
      </div>

      <div>
        <label htmlFor="specialRequests">Cerinte Speciale:</label>
        <input
          type="text"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Trimite Rezervarea</button>
    </form>
  );
}

export default ReservationForm;
