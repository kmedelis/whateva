import { prisma } from "@/lib/prisma"

export const getExistingAdvertisementAddresses = (async (id: string) => {
    const item = await prisma.advertisement.findUnique({ id })
    prisma.advertisement.
    return item
  })

const filterDatabaseForUsedAddresses = ()

