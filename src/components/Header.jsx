import React from 'react';
import PropTypes from 'prop-types';
import { getItem, setItem } from '../utils/storage';

const navStyle = {
  position: 'sticky',
  top: 0,
  backgroundColor: 'var(--color-primary)',
  color: 'white',
  padding: '1rem 0',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const navItemStyle = {
  marginRight: '1rem',
};

const buttonStyle = {
  background: 'transparent',
  border: 'none',
  color: 'inherit',
  cursor: 'pointer',
  fontSize: '1rem',
};

function Header() {
  const isLoggedIn = getItem('userLoggedIn') === 'true';
  const toggle = () => {
    const newState = !isLoggedIn;
    setItem('userLoggedIn', String(newState));
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>HireHub</div>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={navItemStyle}>
            <a href="/dashboard" style={linkStyle}>Dashboard</a>
          </li>
          <li>
            {isLoggedIn ? (
              <button style={buttonStyle} onClick={toggle}>
                Logout
              </button>
            ) : (
              <button style={buttonStyle} onClick={toggle}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.propTypes = {};

export { Header };