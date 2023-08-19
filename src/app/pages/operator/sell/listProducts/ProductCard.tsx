import { ProductDetail } from '@/app/types';
import { Button, Paper, Typography } from '@mui/material';
import { useState } from 'react';

const ProductCard = ({ product }: { product: ProductDetail }) => {
  const { name, price, productTypeName, warehouseQuantity } = product;
  const [productWarehouseQuantity, setProductWarehouseQuantity] =
    useState(warehouseQuantity);
  const [productQuantity, setProductQuantity] = useState(0);

  const addQuantity = () => {
    if (productWarehouseQuantity > 0) {
      setProductQuantity((old) => old + 1);
      setProductWarehouseQuantity((old) => old - 1);
    }
  };
  const reduceQuantity = () => {
    if (productQuantity > 0) {
      setProductQuantity((old) => old - 1);
      setProductWarehouseQuantity((old) => old + 1);
    }
  };
  return (
    <Paper className="flex justify-center items-start p-3 mx-auto">
      <div className="mx-auto flex flex-col gap-1">
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
          Quantità rimanenti: <b>{productWarehouseQuantity}</b>
        </Typography>
        <div className="flex gap-x-3 items-center justify-center">
          <Button variant="outlined" fullWidth onClick={reduceQuantity}>
            -
          </Button>
          <Typography variant="body1">{productQuantity}</Typography>
          <Button variant="outlined" fullWidth onClick={addQuantity}>
            +
          </Button>
        </div>
        <Button variant="outlined" className="!mt-1" onClick={reduceQuantity}>
          Aggiungi al carrello
        </Button>
      </div>
    </Paper>
  );
};

export default ProductCard;
