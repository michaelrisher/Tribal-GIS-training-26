import { type JSX, useContext } from 'react'
import { Box, Typography, IconButton } from '@mui/material';
import { Globe, Moon } from 'lucide-react';
import { ColorModeContext } from '@/main';


/* Renders the application header with branding and layout scaffolding.
 * Includes a static light-mode theme toggle UI for styling and future interactivity.
 */
export function Header(): JSX.Element {
  const { mode, toggleMode } = useContext(ColorModeContext);
  const isDarkMode = mode === 'dark';


  return (
    <Box
      component="header"
      className="header flex-row-align-center"
      role="banner"
      sx={{
        justifyContent: 'space-between',
        gap: 'var(--row-1)',
        padding: 'var(--col-1) var(--col-1)',
      }}
    >
      <Box
        component="a"
        href="/"
        className="header-logo flex-row-align-center"
        aria-label="ProgramEarth"
        sx={{
          gap: 'var(--col-gutter)',
        }}
      >
        <Box
          className="logo-icon flex-row-align-center"
          sx={{
            justifyContent: 'center',
          }}
        >
          <Globe size={18} aria-hidden="true" />
        </Box>
        <h2 aria-hidden="true">ProgramEarth</h2>
      </Box>

      {/* Light / Dark Mode UI (static, light mode default) */}
      <Box
        className="light-dark-container"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--row-1)',
          ml: 'auto',
        }}
      >
        <Box
          className="light-dark-controller"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--row-gutter)',
          }}
        >
          <Typography component="span" className="mode-label">
            Dark Mode
          </Typography>

          <IconButton
            id="theme-toggle"
            className={`toggle-box ${isDarkMode ? 'toggle-box--active' : ''}`}
            onClick={toggleMode}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            role="switch"
            aria-checked={isDarkMode}
            disableRipple
            sx={{
              position: 'relative',
            }}
          >
            <Box
              className="toggle__slider"
              sx={{
                top: '2px',
                left: '2px',
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box className="toggle__icon">
                <Moon size={18} />
              </Box>
            </Box>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
