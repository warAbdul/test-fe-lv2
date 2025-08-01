import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  const productsData = [
    { product_name: "Iphone 16 pro", product_brand: "Iphone" },
    { product_name: "Ipad Air 11", product_brand: "Ipad" },
    { product_name: "Macbook Pro 14", product_brand: "Macbook" },
    { product_name: "Galaxy S25 series", product_brand: "phone" },
    { product_name: "Galaxy Tab S10FE", product_brand: "Tablet" },
    { product_name: "Advance G9", product_brand: "phone" },
  ];

  const createdProducts = [];

  for (const data of productsData) {
    const product = await prisma.products.create({ data });
    createdProducts.push(product);
  }

  const ownersData = [
    { owner_name: "Apple Inc" },
    { owner_name: "Samsung Ltd"},
  ];

  const createdOwners = [];

  for (const data of ownersData) {
    const owners = await prisma.owners.create({ data });
    createdOwners.push(owners);
  }

  const ownerMappings = {
    iphone: createdOwners[0].id,
    ipad: createdOwners[0].id,
    macbook: createdOwners[0].id,
    phone: createdOwners[1].id,
    tablet: createdOwners[1].id,
  };


  const productsOwnersData = createdProducts.map((product) => {
    const brand = product.product_brand.toLowerCase();
    const owner_id = ownerMappings[brand] || createdOwners[1].id; 
    return {
      product_id: product.product_id,
      owner_id,
    };
  });

  await prisma.products_owners.createMany({
    data: productsOwnersData,
  });
}

main()
  .then(() => {
    console.log("Seeding completed.");
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });
