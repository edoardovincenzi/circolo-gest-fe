import { Grid, Skeleton, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import { useGetListProductDeatil } from '@/app/api/useApi';
import { useCategoryStore } from '@/app/store/categoryStore';
import { useMemo } from 'react';

const ListProducts = () => {
  const { isError, isLoading, data } = useGetListProductDeatil();
  const categoriesSelected = useCategoryStore(
    (state) => state.categoriesSelected
  );
  const listProducts = useMemo(
    () =>
      data &&
      data.filter((product) => {
        if (categoriesSelected.length > 0) {
          return categoriesSelected.find(
            (category) => category.productTypeId === product.productTypeId
          );
        }
        return data;
      }),
    [categoriesSelected, data]
  );
  return (
    <Grid
      className="overflow-y-auto"
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {listProducts?.map((product) => (
        <Grid item xs={2} sm={4} md={4} key={product.productId}>
          <ProductCard product={product} />
        </Grid>
      ))}
      {isLoading ? <LoadingListProducts /> : null}
      {isError ? (
        <Typography variant="h2">
          Errore durante la visualizzazione dei prodotti
        </Typography>
      ) : null}
    </Grid>
  );
};

const LoadingListProducts = () => {
  return (
    <>
      {[...Array(10).keys()].map((element) => (
        <Grid item xs={2} sm={4} md={4} key={element}>
          <Skeleton variant="rectangular" height={165} />
        </Grid>
      ))}
    </>
  );
};

export default ListProducts;
