import { Button, Paper, Typography } from '@mui/material';

const ProductCard = () => {
  return (
    <Paper className="flex flex-col justify-center items-center p-3">
      <Typography variant="h6">Title</Typography>
      <Typography variant="body1">Prezzo: {10.0} EURO</Typography>
      <Typography variant="body1">Quantità rimanenti: {7}</Typography>
      <div className="flex gap-x-3 items-center justify-center">
        <Button variant="outlined">-</Button>
        <Typography variant="body1">{0}</Typography>
        <Button variant="outlined">+</Button>
      </div>
    </Paper>
  );
};

export default ProductCard;
