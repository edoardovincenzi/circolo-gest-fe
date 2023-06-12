import { Button, Skeleton } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useGetCategories } from '@/app/api/useApi';
import { useCategoryStore } from '@/app/store/categoryStore';
import { useEffect } from 'react';

const Categories = () => {
  const { isLoading, data } = useGetCategories();
  const categories = useCategoryStore((state) => state.categories);
  const setCategories = useCategoryStore((state) => state.setCategories);
  const setCategorySelected = useCategoryStore(
    (state) => state.setCategorySelected
  );
  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);
  return (
    <div className="w-full">
      <div className=" overflow-x-auto flex w-full justify-start items-center gap-x-3">
        {categories.length > 0 &&
          categories.map((category) => (
            <Button
              key={category.orderTypeId}
              variant={category.selected ? 'contained' : 'outlined'}
              endIcon={category.selected && <CloseOutlinedIcon />}
              style={{ minWidth: 'min-content' }}
              onClick={() => setCategorySelected(category.orderTypeId)}
            >
              {category.name}
            </Button>
          ))}
        {isLoading ? <LoadingCategories /> : null}
      </div>
    </div>
  );
};

const LoadingCategories = () => {
  return (
    <>
      {[...Array(10).keys()].map((item) => (
        <Skeleton key={item} variant="rectangular" width={150} height={36} />
      ))}
    </>
  );
};

export default Categories;
