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
    <main className="p-4  mx-auto h-[100vh] bg-gray-100">
      <div className="flex flex-col gap-4 p-6">
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
