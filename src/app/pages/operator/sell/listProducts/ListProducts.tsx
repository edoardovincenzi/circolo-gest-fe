import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const ListProducts = () => {
  return (
    <Grid
      className="overflow-y-auto"
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Array.from(Array(10)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <ProductCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListProducts;
