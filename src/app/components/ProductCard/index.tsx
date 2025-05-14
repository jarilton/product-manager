import { normalizeCurrency } from "@/utils/normalize";

export const ProductCard = ({ product }: { product: Product }) => (
  <div className="border p-4 rounded shadow">
    <img
      src={product.imageUrl}
      alt={product.name}
      className="w-full h-32 object-cover mb-2"
    />
    <h2 className="font-bold">{product.name}</h2>
    <p className="text-sm">{product.category}</p>
    <p className="text-green-600">
      R$ {normalizeCurrency(String(product.price))}
    </p>
    <p className="text-xs">{product.description}</p>
  </div>
);
