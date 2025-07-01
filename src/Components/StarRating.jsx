import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const StarRating = ({ initialValue = 0, readOnly = false, onRatingChange }) => {
  const [value, setValue] = useState(Number(initialValue));

  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
    if (onRatingChange) {
      onRatingChange(newValue);
    }
  };

  return (
    <Box className="rating-container">
      <Rating
        name="text-feedback"
        value={value}
        onChange={handleRatingChange}
        precision={0.5}
        readOnly={readOnly}
        emptyIcon={<StarIcon style={{ fontSize: 30, opacity: 0.5 }} fontSize="inherit" />}
        icon={<StarIcon style={{ fontSize: 30 }} fontSize="inherit" />}
      />
    </Box>
  );
};

export default StarRating;