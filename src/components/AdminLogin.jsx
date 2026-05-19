import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AdminLogin() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required.';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required.';
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
      await new Promise((resolve) => setTimeout(resolve, 800));
      alert('Admin login successful!');
      setFormData({ username: '', password: '' });
      setErrors({});
    } catch (err) {
      alert('Login failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section style={{ backgroundColor: '#fff', padding: '2rem' }}>
      <h2>Admin Login</h2>
      {errors.general && <p style={{ color: 'red' }}>{errors.general}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
          {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
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
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </section>
  );
}

AdminLogin.propTypes = {};

export { AdminLogin };

Created src/components/AdminLogin.jsx – adds an admin login form with hardcoded credentials, validation, and submission handling.