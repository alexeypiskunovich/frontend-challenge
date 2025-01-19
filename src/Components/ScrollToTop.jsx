import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <Fab
          color="primary"
          size="medium"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 10,
            right: 10,
            zIndex: 1000,
            '@media (min-width:600px)': {
              bottom: 32,
              right: 32,
            },
            '@media (min-width:960px)': {
              bottom: 48,
              right: 48,
            },
            '@media (min-width:1280px)': {
              bottom: 64,
              right: 64,
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </div>
  );
};

export default ScrollToTop;

