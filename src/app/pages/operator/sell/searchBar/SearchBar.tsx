import { Badge, Button, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Categories from './Categories';

const SearchBar = () => {
  return (
    <>
      <div className="flex justify-start gap-x-3 items-center w-full">
        <TextField
          fullWidth
          label="Cerca prodotti"
          size="small"
          className="bg-white"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Badge badgeContent={4} color="primary">
          <Button variant="outlined" endIcon={<ShoppingCartOutlinedIcon />}>
            Carrello
          </Button>
        </Badge>
      </div>
      <Categories />
    </>
  );
};

export default SearchBar;
