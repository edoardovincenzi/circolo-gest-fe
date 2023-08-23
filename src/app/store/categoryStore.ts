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
        (category) => category.productTypeId === orderTypeId
      );
      if (categoryToAddSelect) {
        const categoryWithSelect: Category = {
          ...categoryToAddSelect,
          selected: !categoryToAddSelect.selected,
        };
        const categorCategories = state.categories.filter(
          (category) => category.productTypeId !== orderTypeId
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
  //creare un oggetto di supporto per non dover fare il ciclo ogni volta che non ha senso
  const objCategories = state.categories.reduce((state: any, current) => {
    if (!state[current.productTypeId]) {
      return { ...state, [current.productTypeId]: current.selected };
    }
    return state;
  }, {});

  return categories.map((category) => {
    const newCategory = new CategoryItem(category);
    if (objCategories.hasOwnProperty(category.productTypeId)) {
      newCategory.setSelected(objCategories[category.productTypeId]);
    }
    return newCategory;
  });
};

class CategoryItem {
  productTypeId: string;
  name: string;
  lastUpdate: Date | null;
  selected: boolean;
  constructor({ productTypeId, name, lastUpdate, selected = false }: Category) {
    this.productTypeId = productTypeId;
    this.name = name;
    this.lastUpdate = lastUpdate;
    this.selected = selected;
  }
  setSelected(newSelectedValue: boolean) {
    this.selected = newSelectedValue;
  }
}
