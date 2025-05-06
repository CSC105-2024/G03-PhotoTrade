import { PrismaClient } from '../generated/prisma/index.js'
const prisma = new PrismaClient()

async function main() {
  await prisma.category.createMany({
    data: [
      { name: 'Lifestyle' },
      { name: 'Food & Drink' }
    ],
  })
  console.log('Seeding category done!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
