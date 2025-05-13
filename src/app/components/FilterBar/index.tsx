import { useProductStore } from "@/store/productStore";
import { useState } from "react";

export const FilterBar = () => {
  const { filterProducts, sortProducts } = useProductStore();
  const [query, setQuery] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10000);

  return (
    <div className="flex flex-col md:flex-row gap-2 mb-4">
      <input
        placeholder="Buscar por nome"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Preço Mínimo"
        value={min}
        onChange={(e) => setMin(Number(e.target.value))}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Preço Máximo"
        value={max}
        onChange={(e) => setMax(Number(e.target.value))}
        className="border p-2 rounded"
      />
      <button
        onClick={() => filterProducts(query, min, max)}
        className="bg-gray-600 text-white p-2 rounded"
      >
        Filtrar
      </button>
      <button
        onClick={() => sortProducts("price", true)}
        className="bg-green-600 text-white p-2 rounded"
      >
        Ordenar Preço ↑
      </button>
      <button
        onClick={() => sortProducts("price", false)}
        className="bg-red-600 text-white p-2 rounded"
      >
        Ordenar Preço ↓
      </button>
    </div>
  );
};
