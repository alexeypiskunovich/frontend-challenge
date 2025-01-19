import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button, Box } from '@mui/material';
import { loadCats, incrementPage } from '../Redux/catsSlice';
import CatCard from './CatCard';

const CatList = () => {
  const dispatch = useDispatch();
  const cats = useSelector((state) => state.cats.cats);
  const page = useSelector((state) => state.cats.page);

  useEffect(() => {
    dispatch(loadCats(page));
  }, [dispatch, page]);

  const loadMoreCats = () => {
    dispatch(incrementPage());
  };

  return (
    <div>
      <Grid container spacing={4}>
        {cats.map(cat => (
          <Grid item xs={12} sm={6} md={4} key={cat.id}>
            <CatCard cat={cat} />
          </Grid>
        ))}
      </Grid>
      <Box textAlign="center" mt={4}>
        <Button variant="contained" onClick={loadMoreCats}>
          Загрузить больше
        </Button>
      </Box>
    </div>
  );
};

export default CatList;


