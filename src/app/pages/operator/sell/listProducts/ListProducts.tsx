import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import { useGetListProducts } from '@/app/api/useApi';

const ListProducts = () => {
  const { isError, isLoading, data } = useGetListProducts();
  console.log(isError, isLoading, data);
  return (
    <Grid
      className="overflow-y-auto"
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {data &&
        data.map((product) => (
          <Grid item xs={2} sm={4} md={4} key={product.productId}>
            <ProductCard product={product} />
          </Grid>
        ))}
    </Grid>
  );
};

export default ListProducts;
