import { Button } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Categories = () => {
  return (
    <div className="w-full">
      <div className=" overflow-x-auto flex w-full justify-start items-center gap-x-3">
        <Button
          variant={true ? 'contained' : 'outlined'}
          endIcon={true && <CloseOutlinedIcon />}
          style={{ minWidth: 'min-content' }}
        >
          Gelati
        </Button>
        {Array.from(Array(36)).map((_, index) => (
          <Button
            variant={false ? 'contained' : 'outlined'}
            endIcon={false && <CloseOutlinedIcon />}
            style={{ minWidth: 'min-content' }}
          >
            Gelati
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
