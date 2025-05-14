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
    <main className="p-4  mx-auto h-auto bg-gray-100">
      <div className="flex flex-col gap-4 p-6 max-w-6xl w-full mx-auto bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">
          Gerenciador de Produtos
        </h1>
        <ProductForm />
        <FilterBar />
        <ProductList />
      </div>
    </main>
  );
}
