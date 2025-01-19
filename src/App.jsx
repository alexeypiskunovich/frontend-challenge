import React, { useState } from 'react';
import { Container, Tabs, Tab, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CatList from './Components/CatList';
import FavoriteCats from './Components/FavoriteCats';
import ScrollToTop from './Components/ScrollToTop';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', backgroundColor: theme.palette.primary.main}}>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          centered
          TabIndicatorProps={{ style: { backgroundColor: 'white' } }} 
          sx={{
            width: '100%',
          }}
        >
          <Tab
            label="Все котики"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              '&.Mui-selected': {
                color: 'white',
              },
            }}
          />
          <Tab
            label="Любимые котики"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              '&.Mui-selected': {
                color: 'white', 
              },
            }}
          />
        </Tabs>
      </Box>
      <Container>
        <Box sx={{ padding: '20px' }}>
          {activeTab === 0 && <CatList />}
          {activeTab === 1 && <FavoriteCats />}
        </Box>
        <ScrollToTop />
      </Container>
    </>
  );
};

export default App;







