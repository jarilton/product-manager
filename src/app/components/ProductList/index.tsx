import { useProductStore } from "@/store/productStore";
import { ProductCard } from "../ProductCard";

export const ProductList = () => {
  const products = useProductStore((s) => s.filtered);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
