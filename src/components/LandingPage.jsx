import React from 'react';
import PropTypes from 'prop-types';

function LandingPage() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <div className="container">
        <h1 style={{ color: 'var(--color-primary)' }}>Welcome to HireHub</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
          Streamline your hiring process with our intuitive onboarding portal.
        </p>
        <button
          style={{
            backgroundColor: 'var(--color-primary)',
            color: '#fff',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
          }}
        >
          Get Started
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h3>Easy Integration</h3>
          <p>Seamlessly connect with your ATS.</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3>Secure &amp; Scalable</h3>
          <p>Built with security first.</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3>Analytics Dashboard</h3>
          <p>Gain insights instantly.</p>
        </div>
      </div>
    </section>
  );
}

LandingPage.propTypes = {};

export { LandingPage };