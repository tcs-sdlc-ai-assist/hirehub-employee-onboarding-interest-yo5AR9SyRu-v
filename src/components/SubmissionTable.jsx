import React from 'react';
import PropTypes from 'prop-types';

function SubmissionTable({ submissions, onEdit, onDelete }) {
  return (
    <section style={{ backgroundColor: '#fff', padding: '2rem' }}>
      <h2>Submitted Interests</h2>
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
              <th
                style={{
                  padding: '0.75rem',
                  textAlign: 'center',
                  borderBottom: '2px solid var(--color-primary)',
                  backgroundColor: '#f0f0f0',
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((item, index) => (
              <tr
                key={index}
                style={{ backgroundColor: index % 2 ? '#fafafa' : '#fff' }}
              >
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd' }}>
                  {item.name}
                </td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd' }}>
                  {item.email}
                </td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd' }}>
                  {item.phone}
                </td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd' }}>
                  {item.submittedAt}
                </td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd', textAlign: 'center' }}>
                  <button
                    style={{
                      backgroundColor: 'var(--color-secondary)',
                      color: '#fff',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      marginRight: '0.5rem',
                    }}
                    onClick={() => onEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      backgroundColor: 'var(--color-primary)',
                      color: '#fff',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                    }}
                    onClick={() => onDelete(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        style={{
          backgroundColor: 'var(--color-primary)',
          color: '#fff',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          marginTop: '1rem',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        onClick={() => window.history.back()}
      >
        Back to Overview
      </button>
    </section>
  );
}

SubmissionTable.propTypes = {};

export { SubmissionTable };

Created src/components/SubmissionTable.jsx – adds a table component for displaying submitted interest records with edit/delete actions, integrated with existing styling and routing. To view, navigate to the admin dashboard route (e.g., `/admin-dashboard`) after login; the component can be used within the protected route to show the submissions table. Run the dev server with `npm run dev` to test.