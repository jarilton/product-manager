export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("/api/products");

  console.log("res", res);

  return await res.json();
}
