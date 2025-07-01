import  { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 4,
    outline: 'none',
  };
  
export default function ModalComponent({ open, onClose }) {
  const [value, setValue] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleReviewSubmit = () => {
    // Aquí puedes enviar la reseña a tu backend u otro lugar para su procesamiento
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <h2 id="parent-modal-title">Escribe tu reseña</h2>
        <TextField
          autoFocus
          margin="dense"
          id="review"
          label="Tu reseña"
          type="text"
          fullWidth
        />
        <Box mt={2}>
          <Rating
            name="rating"
            value={value}
            onChange={handleRatingChange}
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} />}
          />
        </Box>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={handleReviewSubmit} color="primary">Enviar reseña</Button>
        </Box>
      </Box>
    </Modal>
  );
}
