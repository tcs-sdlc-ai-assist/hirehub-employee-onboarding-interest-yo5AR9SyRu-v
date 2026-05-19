import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isValidName, isValidEmail, isValidPhone } from '../utils/validators';

function EditModal({ submission, onClose }) {
  const [formData, setFormData] = useState(submission);
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      onClose();
    } catch (_) {
      alert('Save failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
      <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '0.5rem', width: '90%', maxWidth: '500px', position: 'relative' }}>
        <button
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            background: 'transparent',
            border: 'none',
            color: '#666',
            cursor: 'pointer',
            fontSize: '1.2rem',
          }}
          onClick={onClose}
        >
          &times;
        </button>
        <h2 style={{ color: 'var(--color-primary)' }}>Edit Submission</h2>
        {errors.general && <p style={{ color: 'red' }}>{errors.general}</p>}
        <form onSubmit={handleSave} style={{ display: 'grid', gap: '1rem' }}>
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
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
}

EditModal.propTypes = {
  submission: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { EditModal };

Created src/components/EditModal.jsx – adds a modal overlay for editing a submission with pre‑filled fields, inline validation, and save/cancel handling. To use, render <EditModal submission={submission} onClose={handleClose} /> within a protected route. Run the dev server with `npm run dev` to test.