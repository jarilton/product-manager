import { create } from "zustand";

interface ProductStore {
  products: Product[];
  filtered: Product[];
  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  filterProducts: (query: string, min: number, max: number) => void;
  sortProducts: (key: keyof Product, asc: boolean) => void;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  filtered: [],
  setProducts: (products) => set({ products, filtered: products }),
  addProduct: (product) => {
    const list = [...get().products, product];
    set({ products: list, filtered: list });
  },
  filterProducts: (query, min, max) => {
    const filtered = get().products.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) &&
        p.price >= min &&
        p.price <= max
    );
    set({ filtered });
  },
  sortProducts: (key, asc) => {
    const sorted = [...get().filtered].sort((a, b) =>
      asc ? (a[key] > b[key] ? 1 : -1) : a[key] < b[key] ? 1 : -1
    );
    set({ filtered: sorted });
  },
}));
