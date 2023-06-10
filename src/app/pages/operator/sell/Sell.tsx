import ListProducts from './listProducts/ListProducts';
import SearchBar from './searchBar/SearchBar';

const Sell = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-start pt-5 gap-y-5">
      <SearchBar />
      <ListProducts />
    </div>
  );
};

export default Sell;
