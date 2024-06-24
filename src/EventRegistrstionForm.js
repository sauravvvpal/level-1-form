import React from 'react';
import { useForm } from './useForm';
import { validate } from './Validate';
import './EventRegistrationForm.css';

const EventRegistrationForm = () => {
  const { values, errors, handleChange, handleSubmit, submitted } = useForm({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: false,
    guestName: '',
  }, validate);

  return (
    <div className="container">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="form">
          <h2>Event Registration</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={values.name} onChange={handleChange} />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={values.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Age</label>
            <input type="number" name="age" value={values.age} onChange={handleChange} />
            {errors.age && <p className="error">{errors.age}</p>}
          </div>
          <div className="form-group">
            <label>Are you attending with a guest?</label>
            <input type="checkbox" name="attendingWithGuest" checked={values.attendingWithGuest} onChange={handleChange} />
          </div>
          {values.attendingWithGuest && (
            <div className="form-group">
              <label>Guest Name</label>
              <input type="text" name="guestName" value={values.guestName} onChange={handleChange} />
              {errors.guestName && <p className="error">{errors.guestName}</p>}
            </div>
          )}
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      ) : (
        <div className="summary">
          <h2>Registration Summary</h2>
          <p><strong>Name:</strong> {values.name}</p>
          <p><strong>Email:</strong> {values.email}</p>
          <p><strong>Age:</strong> {values.age}</p>
          <p><strong>Attending with Guest:</strong> {values.attendingWithGuest ? 'Yes' : 'No'}</p>
          {values.attendingWithGuest && <p><strong>Guest Name:</strong> {values.guestName}</p>}
        </div>
      )}
    </div>
  );
};

export default EventRegistrationForm;
