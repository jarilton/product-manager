"use client";

import { useForm } from "react-hook-form";
import { useProductStore } from "@/store/productStore";
import { v4 as uuidv4 } from "uuid";
import { normalizeCurrency } from "@/utils/normalize";
import { toast } from "sonner";

type FormValues = {
  name: string;
  category: string;
  price: string;
  description: string;
  imageUrl: string;
};

export const ProductForm = () => {
  const { addProduct } = useProductStore();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    try {
      const cleanPrice = Number(data.price.replace(/\D/g, "")) / 100;

      addProduct({
        ...data,
        id: uuidv4(),
        price: cleanPrice,
      });

      toast.success("Produto cadastrado com sucesso!", {
        description: "O produto foi adicionado à lista.",
      });

      reset();
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);

      toast.error("Erro ao cadastrar produto", {
        description: "Ocorreu um erro ao cadastrar o produto.",
      });
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = normalizeCurrency(e.target.value);
    setValue("price", value);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 p-4 bg-white rounded-xl shadow-md max-w-6xl w-full mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            {...register("name", { required: "Nome é obrigatório" })}
            placeholder="Nome"
            className="w-full border p-2 rounded text-gray-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("category", { required: "Categoria é obrigatória" })}
            placeholder="Categoria"
            className="w-full border p-2 rounded text-gray-500"
          />
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("price", { required: "Preço é obrigatório" })}
            placeholder="Preço"
            inputMode="numeric"
            className="w-full border p-2 rounded text-gray-500"
            onChange={handlePriceChange}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("imageUrl", {
              required: "URL da Imagem é obrigatória",
            })}
            placeholder="URL da Imagem"
            className="w-full border p-2 rounded text-gray-500"
          />
          {errors.imageUrl && (
            <p className="text-red-500 text-sm mt-1">
              {errors.imageUrl.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <textarea
          {...register("description", { required: "Descrição é obrigatória" })}
          placeholder="Descrição"
          className="w-full border p-2 rounded text-gray-500 min-h-[100px]"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          Cadastrar Produto
        </button>
      </div>
    </form>
  );
};
