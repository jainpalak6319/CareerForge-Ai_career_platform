import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { TemplateContext } from '../context/TemplateContext';

const ThemeTemplateSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { template, setTemplate } = useContext(TemplateContext);

  const containerStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '1rem 1.5rem',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    margin: '1.5rem 0',
  };

  const labelStyle = {
    fontWeight: '500',
    marginBottom: '0.5rem',
    display: 'block',
    color: '#333',
  };

  const selectStyle = {
    padding: '0.4rem 0.8rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#fdfdfd',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    outline: 'none',
  };

  return (
    <div style={containerStyle}>
      <div>
        <label style={labelStyle}>Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={selectStyle}
          onFocus={(e) => (e.target.style.borderColor = '#D96BA0')}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="professional">Professional</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Template</label>
        <select
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          style={selectStyle}
          onFocus={(e) => (e.target.style.borderColor = '#2D2F4A')}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
        >
          <option value="classic">Classic</option>
          <option value="modern">Modern</option>
          <option value="two-column">Two-column</option>
        </select>
      </div>
    </div>
  );
};

export default ThemeTemplateSwitcher;
