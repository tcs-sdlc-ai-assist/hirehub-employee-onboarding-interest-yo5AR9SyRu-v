import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 600));
        const mock = [
          { name: 'Alice Johnson', email: 'alice@example.com', phone: '+1-555-1234', submittedAt: '2024-09-20' },
          { name: 'Bob Smith', email: 'bob@example.com', phone: '+1-555-5678', submittedAt: '2024-09-19' },
          { name: 'Carol Lee', email: 'carol@example.com', phone: '+1-555-9012', submittedAt: '2024-09-18' },
        ];
        setSubmissions(mock);
        setLoading(false);
      } catch (err) {
        setError('Failed to load submissions');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ color: 'red', padding: '1rem' }}>
        {error}
      </div>
    );
  }

  return (
    <section style={{ backgroundColor: '#fff', padding: '2rem' }}>
      <h2>Admin Dashboard</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        Overview of recent interest submissions.
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '1rem',
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: '0.75rem',
                  textAlign: 'left',
                  borderBottom: '2px solid var(--color-primary)',
                  backgroundColor: '#f0f0f0',
                }}
              >
                Name
              </th>
              <th
                style={{
                  padding: '0.75rem',
                  textAlign: 'left',
                  borderBottom: '2px solid var(--color-primary)',
                  backgroundColor: '#f0f0f0',
                }}
              >
                Email
              </th>
              <th
                style={{
                  padding: '0.75rem',
                  textAlign: 'left',
                  borderBottom: '2px solid var(--color-primary)',
                  backgroundColor: '#f0f0f0',
                }}
              >
                Phone
              </th>
              <th
                style={{
                  padding: '0.75rem',
                  textAlign: 'left',
                  borderBottom: '2px solid var(--color-primary)',
                  backgroundColor: '#f0f0f0',
                }}
              >
                Submitted At
              </th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((item, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 ? '#fafafa' : '#fff' }}>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd' }}>{item.name}</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd' }}>{item.email}</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd' }}>{item.phone}</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd' }}>{item.submittedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          style={{
            backgroundColor: 'var(--color-primary)',
            color: '#fff',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
          }}
          onClick={() => {
            // Navigate back to landing or other action
            window.history.back();
          }}
        >
          Back to Overview
        </button>
      </div>
    </section>
  );
}

AdminDashboard.propTypes = {};

export { AdminDashboard };

Created src/components/AdminDashboard.jsx – adds a protected admin view that displays submission statistics in a table, with loading and error handling, mock data fetching, and a back navigation button. The component follows existing patterns for PropTypes, styling, and async handling, and can be used within the protected route configuration. 

To test, run the development server with `npm run dev` and navigate to the admin route (e.g., `/admin-dashboard`). The page will load mock submission data after a short delay. No additional commands are required.