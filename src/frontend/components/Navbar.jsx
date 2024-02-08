import React from 'react';

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoutContainer}>
        <button style={styles.logoutButton}>Logout</button>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'rgb(80 80 80)',
    color: '#fff',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    maxWidth: '40px',
  },
  logoutContainer: {
    flex: 1,
    textAlign: 'right',
  },
  logoutButton: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};
