import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import MediaCard from './MediaCard';

const TopProducts = () => {
  const [topRated, setTopRated] = useState([]);
  const [topSelling, setTopSelling] = useState([]);

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const response = await fetch('http://localhost:3000/products/top-rated');
        if (!response.ok) {
          throw new Error('No products found');
        }
        const data = await response.json();
        console.log(data)
        setTopRated(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching top rated products:', error);
        setTopRated([]);
      }
    };

    const fetchTopSelling = async () => {
      try {
        const response = await fetch('http://localhost:3000/products/top-selling');
        if (!response.ok) {
          throw new Error('Failed to fetch top selling products');
        }
        const data = await response.json();
        console.log(data)
        setTopSelling(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching top selling products:', error);
        setTopSelling([]);
      }
    };

    fetchTopRated();
    fetchTopSelling();
  }, []);

  return (
    <div>
      <h2>Vinos Más Valorados</h2>
      <Grid container spacing={2}>
        {topRated.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <MediaCard product={product} />
          </Grid>
        ))}
      </Grid>
      <h2>Vinos Más Vendidos</h2>
      <Grid container spacing={2}>
        {topSelling.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <MediaCard product={product} />
            
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TopProducts;
