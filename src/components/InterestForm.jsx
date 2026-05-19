src/components/InterestForm.jsx
```jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isValidName, isValidEmail, isValidPhone } from '../utils/validators';

function InterestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!isValidName(formData.name)) {
      newErrors.name = 'Name must contain only letters, spaces, or hyphens.';
    }
    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      alert('Interest submitted successfully!');
      setFormData({ name: '', email: '', phone: '' });
      setErrors({});
    } catch (err) {
      alert('Submission failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section style={{ backgroundColor: '#fff', padding: '2rem' }}>
      <h2>Submit Your Interest</h2>
      {errors.general && <p style={{ color: 'red' }}>{errors.general}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            backgroundColor: 'var(--color-primary)',
            color: '#fff',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Interest'}
        </button>
      </form>
    </section>
  );
}

InterestForm.propTypes = {};

export { InterestForm };
```

Text: Created src/components/InterestForm.jsx with a fully functional interest submission form, including field validation using the existing validators, local state management, error handling, and a submit handler that simulates an API call. The component follows the project's JSX conventions, uses PropTypes, and integrates with the existing styling approach. No new dependencies were added.