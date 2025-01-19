import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardMedia, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addToFavorites, removeFromFavorites } from '../Redux/catsSlice';

const CatCard = ({ cat }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.cats.favorites);
  const isFavorite = favorites.some(favorite => favorite.id === cat.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(cat.id));
    } else {
      dispatch(addToFavorites(cat));
    }
  };

  return (
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
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 130,
          right: 8,
          zIndex: 1,
        }}
      >
        <IconButton onClick={toggleFavorite} color="secondary" sx={{ fontSize: '3rem', color: 'red' }}>
          {isFavorite ? <FavoriteIcon sx={{ fontSize: '3rem' }} /> : <FavoriteBorderIcon sx={{ fontSize: '3rem' }} />}
        </IconButton>
      </Box>
      <CardMedia
        component="img"
        height="200"
        image={cat.url}
        alt="cat"
        sx={{ borderRadius: '8px 8px 0 0' }}
      />
    </Card>
  );
};

export default CatCard;



