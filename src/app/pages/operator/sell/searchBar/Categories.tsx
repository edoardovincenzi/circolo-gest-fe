import { Button } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useGetCategories } from '@/app/api/useApi';

const Categories = () => {
  const { isError, isLoading, data } = useGetCategories();
  return (
    <div className="w-full">
      <div className=" overflow-x-auto flex w-full justify-start items-center gap-x-3">
        {data &&
          data.map((category) => (
            <Button
              key={category.orderTypeId}
              variant={false ? 'contained' : 'outlined'}
              endIcon={false && <CloseOutlinedIcon />}
              style={{ minWidth: 'min-content' }}
            >
              {category.name}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Categories;
