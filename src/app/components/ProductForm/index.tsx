"use client";

import { useState } from "react";
import { useProductStore } from "@/store/productStore";
import { v4 as uuidv4 } from "uuid";

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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct({ ...form, id: uuidv4(), price: parseFloat(form.price) });
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
        type="number"
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
      <button className="bg-blue-600 text-white p-2 rounded col-span-2">
        Cadastrar Produto
      </button>
    </form>
  );
};
