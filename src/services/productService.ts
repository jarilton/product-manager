export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("/api/products");
  return await res.json();
}
