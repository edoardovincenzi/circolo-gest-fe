import { create } from 'zustand';
import { Category } from '../types';

interface CategoryStore {
  categories: Category[];
  categoriesSelected: Category[];
  resetCategoryStore: () => void;
  setCategories: (categories: Category[]) => void;
  setCategorySelected: (orderTypeId: string) => void;
}
export const useCategoryStore = create<CategoryStore>()((set) => ({
  categories: [],
  categoriesSelected: [],
  resetCategoryStore: () =>
    set(() => ({
      categories: [],
    })),
  setCategories: (categories: Category[]) =>
    set((state: CategoryStore) => ({
      categories: checkIfCategoryIsAlreadyPresent(state, categories),
    })),
  setCategorySelected: (orderTypeId: string) =>
    set((state: CategoryStore) => {
      const categoryToAddSelect = state.categories.find(
        (category) => category.orderTypeId === orderTypeId
      );
      if (categoryToAddSelect) {
        const categoryWithSelect: Category = {
          ...categoryToAddSelect,
          selected: !categoryToAddSelect.selected,
        };
        const categorCategories = state.categories.filter(
          (category) => category.orderTypeId !== orderTypeId
        );
        const newCategories = [categoryWithSelect, ...categorCategories];
        const categoriesSelected = newCategories.filter(
          (category) => category.selected
        );
        return {
          categories: newCategories,
          categoriesSelected: categoriesSelected,
        };
      }
      return { categories: state.categories };
    }),
}));

const checkIfCategoryIsAlreadyPresent = (
  state: CategoryStore,
  categories: Category[]
) => {
  const objCategories = state.categories.reduce((state: any, current) => {
    if (!state[current.orderTypeId]) {
      return { ...state, [current.orderTypeId]: current.selected };
    }
    return state;
  }, {});

  return categories.reduce((state: any, category) => {
    if (objCategories.hasOwnProperty(category.orderTypeId)) {
      return [
        ...state,
        {
          ...category,
          selected: objCategories[category.orderTypeId],
        },
      ];
    }
    return [
      ...state,
      {
        ...category,
        selected: category?.selected ?? false,
      },
    ];
  }, []);
};
