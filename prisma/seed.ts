import { PrismaClient, Role, RfqStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Simple demo password hash (in production use bcrypt)
  // demo123
  const passwordHash = "$2a$10$demo.hash.placeholder.replace.with.real.bcrypt";

  const buyerCompany = await prisma.company.upsert({
    where: { id: "demo-buyer-co" },
    update: {},
    create: {
      id: "demo-buyer-co",
      name: "Pacific Imports & Boutique Hotels",
      type: "hotel",
      country: "Singapore",
      city: "Singapore",
      description: "Boutique hotel group sourcing furniture and fittings.",
    },
  });

  const supplierCompany = await prisma.company.upsert({
    where: { id: "demo-supplier-co" },
    update: {},
    create: {
      id: "demo-supplier-co",
      name: "Cairo Furniture Crafts",
      type: "supplier",
      country: "Egypt",
      city: "Cairo",
      description: "Solid oak and custom furniture manufacturer.",
    },
  });

  const buyer = await prisma.user.upsert({
    where: { email: "buyer@demo.com" },
    update: {},
    create: {
      email: "buyer@demo.com",
      passwordHash,
      fullName: "Sarah Chen",
      role: Role.BUYER,
      companyId: buyerCompany.id,
    },
  });

  const supplier = await prisma.user.upsert({
    where: { email: "supplier@demo.com" },
    update: {},
    create: {
      email: "supplier@demo.com",
      passwordHash,
      fullName: "Ahmed Hassan",
      role: Role.SUPPLIER,
      companyId: supplierCompany.id,
    },
  });

  const rfq = await prisma.rfq.upsert({
    where: { id: "demo-rfq-1" },
    update: {},
    create: {
      id: "demo-rfq-1",
      title: "Dining table order for hotel project",
      description:
        "We are furnishing a 50-room boutique hotel in Singapore. Interested in 60 solid oak dining tables. Do you do custom dimensions?",
      category: "furniture",
      quantity: "60 tables",
      location: "Singapore",
      budget: "$40,000 – $55,000",
      status: RfqStatus.OPEN,
      creatorId: buyer.id,
      companyId: buyerCompany.id,
    },
  });

  const conversation = await prisma.conversation.create({
    data: {
      rfqId: rfq.id,
      subject: "Dining table order for hotel project",
      participants: {
        create: [{ userId: buyer.id }, { userId: supplier.id }],
      },
      messages: {
        create: [
          {
            senderId: buyer.id,
            body: "Hi, we are furnishing a 50-room boutique hotel in Singapore. Interested in 60 solid oak dining tables. Do you do custom dimensions?",
          },
          {
            senderId: supplier.id,
            body: "Hello Sarah, yes we can do custom dimensions. What sizes do you need and what is your target delivery date?",
          },
        ],
      },
    },
  });

  console.log("Seed complete:", {
    buyer: buyer.email,
    supplier: supplier.email,
    rfq: rfq.title,
    conversation: conversation.id,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
