// src/components/HomeCard.jsx


import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../App.css';

const VinoCard = "/images/VinoCard.jpeg";
const HomeCard = ({ title, image, route, onClick }) => {
  return (
    <Card className="card-item" onClick={() => onClick(route)}>
      <CardMedia
        component="img"
        className="card-media"
        image={image || VinoCard} 
        alt={title}
      />
      <Typography variant="h5" component="div" className="card-title">
        {title}
      </Typography>
    </Card>
  );
};

export default HomeCard;
