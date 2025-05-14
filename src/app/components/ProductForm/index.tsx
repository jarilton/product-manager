"use client";

import { useState } from "react";
import { useProductStore } from "@/store/productStore";
import { v4 as uuidv4 } from "uuid";
import { normalizeCurrency } from "@/utils/normalize";

export const ProductForm = () => {
  const { addProduct } = useProductStore();
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "price") {
      const formatted = normalizeCurrency(value);
      setForm((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Transforma o valor formatado de volta para número (ex: "1.234,56" -> 1234.56)
    const numericPrice = parseFloat(
      form.price.replace(/\./g, "").replace(",", ".")
    );

    addProduct({
      ...form,
      id: uuidv4(),
      price: numericPrice,
    });

    setForm({
      name: "",
      category: "",
      price: "",
      description: "",
      imageUrl: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-2"
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nome"
        className="border p-2 rounded"
      />
      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Categoria"
        className="border p-2 rounded"
      />
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Preço"
        inputMode="numeric"
        className="border p-2 rounded"
      />
      <input
        name="imageUrl"
        value={form.imageUrl}
        onChange={handleChange}
        placeholder="URL da Imagem"
        className="border p-2 rounded"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Descrição"
        className="border p-2 rounded col-span-2"
      />
      <div className="flex flex-col md:flex-row gap-2 col-span-2">
        <button className="bg-blue-600 text-white p-2 rounded col-span-2 w-50 mt-4">
          Cadastrar Produto
        </button>
      </div>
    </form>
  );
};
