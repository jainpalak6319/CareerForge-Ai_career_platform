import React from 'react';

const Toast = ({ message, show, onClose }) => {
  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: '#f5097bff',
      color: '#fff',
      padding: '10px 16px',
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      zIndex: 9999
    }}>
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            color: 'white',
            border: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Toast;
