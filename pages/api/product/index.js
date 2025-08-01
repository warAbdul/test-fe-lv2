import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  const result = await prisma.products_owners.findMany({
    include: {
      product: true,
      owner: true,
    },
  });

  res.setHeader("Allow", ["GET"]);
  if (req.method !== "GET")
    res.status(405).end(`Method ${req.method} Not Allowed`);

  return res.status(200).json(result);
}
