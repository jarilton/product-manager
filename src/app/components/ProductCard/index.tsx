import { normalizeCurrency } from "@/utils/normalize";

export const ProductCard = ({ product }: { product: Product }) => (
  <div className="border p-4 rounded shadow">
    <img
      src={product.imageUrl}
      alt={product.name}
      className="w-full h-32 object-cover mb-2"
    />
    <h2 className="font-bold text-gray-400">{product.name}</h2>
    <p className="text-sm text-gray-400">{product.category}</p>
    <p className="text-green-600">
      R$ {normalizeCurrency(String(product.price))}
    </p>
    <p className="text-xs text-gray-400">{product.description}</p>
  </div>
);
