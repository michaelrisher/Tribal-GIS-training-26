import React, { useContext } from 'react';
import { Globe, Moon, Sun } from 'lucide-react';
import { ColorModeContext } from '@/main';

/**
 * Header component with the application logo, title, and theme toggle
 * @component
 * @returns {JSX.Element} The application header with ProgramEarth branding and theme toggle
 */
export const Header: React.FC = () => {
  const { mode, toggleMode } = useContext(ColorModeContext);
  const isDarkMode = mode === 'dark';

  return (
    <header className="header">
      <div className="header-logo">
        <div className="logo-icon">
          <Globe size={18} />
        </div>
        <span>ProgramEarth</span>
      </div>

      <div className="header-controls">
        <div className="dark-mode-container">
          <span className="dark-mode-label">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </span>

          <button
            className={`dark-mode-toggle ${isDarkMode ? 'dark-mode-toggle--active' : ''}`}
            onClick={toggleMode}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            <div className="dark-mode-toggle__slider">
              <div className="dark-mode-toggle__icon">
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
