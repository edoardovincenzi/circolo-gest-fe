import { ProductDetail } from '@/app/types';
import { Button, Paper, Typography } from '@mui/material';

const ProductCard = ({ product }: { product: ProductDetail }) => {
  const { name, price, productTypeName, warehouseQuantity } = product;
  return (
    <Paper className="flex flex-col justify-center items-start p-3 mx-auto">
      <div className="mx-auto">
        <Typography variant="h6" className="text-center">
          {name}
        </Typography>
        <Typography variant="body1">
          Categoria: <b>{productTypeName}</b>
        </Typography>
        <Typography variant="body1">
          Prezzo: <b>{price}</b> €
        </Typography>
        <Typography variant="body1">
          Quantità rimanenti: <b>{warehouseQuantity}</b>
        </Typography>
        <div className="flex gap-x-3 items-center justify-center">
          <Button variant="outlined">-</Button>
          <Typography variant="body1">{0}</Typography>
          <Button variant="outlined">+</Button>
        </div>
      </div>
    </Paper>
  );
};

export default ProductCard;
