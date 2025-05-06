import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()

async function main() {
  // // ... you will write your Prisma Client queries here
  // const picture = await prisma.picture.create({
  //   data: {
  //     title: "Moon",
  //     description: "moon is too big",
  //     thumbnail_url: "first-thumbnail",
  //     price: 100,
  //     user: {
  //       connect: {
  //         id: 1
  //       }
  //     }
  //   },
  // })

  // const user = await prisma.user.create({
  //   data: {
  //     name: "jhon Doe",
  //     email: "mvk@gmail.com",
  //     password: "Pass123",
  //     bio: "lazy guy",
  //     profile_url: "first-url",
  //   }
  // })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })