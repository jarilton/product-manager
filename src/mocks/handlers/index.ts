import { rest } from "msw";
const mockProducts = [
  {
    id: "1",
    name: "Produto Exemplo",
    category: "Eletrônico",
    price: 999,
    description: "Descrição do produto",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export const handlers = [
  rest.get("/api/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockProducts));
  }),
];
