import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, IconButton, Box, Typography, Card, CardMedia } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { removeFromFavorites } from '../Redux/catsSlice';

const FavoriteCats = () => {
  const favorites = useSelector((state) => state.cats.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <Grid container spacing={4}>
      {favorites.length > 0 ? (
        favorites.map(cat => (
          <Grid item xs={12} sm={6} md={4} key={cat.id}>
            <Card
              sx={{
                borderRadius: '8px',
                boxShadow: 10,
                transition: 'transform 0.5s, box-shadow 0.5s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: 6,
                },
                position: 'relative',
                height: '350px',  // Устанавливаем одинаковый размер
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 280,
                  right: 8,
                  zIndex: 1,
                }}
              >
                <IconButton onClick={() => handleRemoveFromFavorites(cat.id)} sx={{ color: 'red', fontSize: '3rem' }}>
                  <FavoriteIcon sx={{ fontSize: '3rem' }} />
                </IconButton>
              </Box>
              <CardMedia
                component="img"
                height="350"
                image={cat.url}
                alt="cat"
                sx={{ borderRadius: '8px 8px 0 0' }}
              />
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="h6" align="center" sx={{ width: '100%', marginTop: '20px' }}>
          Нет любимых котиков.
        </Typography>
      )}
    </Grid>
  );
};

export default FavoriteCats;


