"use client";

import { useEffect } from "react";

import { useProductStore } from "@/store/productStore";

import { fetchProducts } from "@/services/productService";
import { ProductForm } from "./components/ProductForm";
import { FilterBar } from "./components/FilterBar";
import { ProductList } from "./components/ProductList";

export default function Home() {
  const setProducts = useProductStore((s) => s.setProducts);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, [setProducts]);

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gerenciador de Produtos</h1>
      <ProductForm />
      <FilterBar />
      <ProductList />
    </main>
  );
}
