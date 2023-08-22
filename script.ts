import { PrismaClient } from '@prisma/client'
import { userInfo } from 'os'
const prisma = new PrismaClient()

async function main() {
  const users = await prisma.user.findMany({
    where: {
      name: "Sally"
    }
  })
  console.log(users)
}

main()
  .catch(e => {
    console.log(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })