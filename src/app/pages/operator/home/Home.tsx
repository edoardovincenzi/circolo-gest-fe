import { OBJ_ROUTING } from '@/router';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div className="flex flex-col justify-around items-center  h-1/2">
        <Link to={`/${OBJ_ROUTING.OPERATOR}/${OBJ_ROUTING.SELL}`}>
          <Button
            variant="contained"
            size="large"
            style={{ minWidth: '15rem' }}
          >
            Vendita
          </Button>
        </Link>
        <Link to={`/${OBJ_ROUTING.OPERATOR}/${OBJ_ROUTING.STORE}`}>
          <Button
            variant="contained"
            size="large"
            style={{ minWidth: '15rem' }}
          >
            Magazzino
          </Button>
        </Link>
      </div>
      <div className="flex flex-col justify-end grow mb-10">
        <Link to={`/${OBJ_ROUTING.LOGIN}`}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ minWidth: '15rem' }}
          >
            Logout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
