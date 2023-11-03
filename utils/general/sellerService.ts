import { prisma } from "@/lib/prisma";
import { Seller } from "@/models/Seller";

export const createSeller = async (data: Seller) => {
    await prisma.seller.create({ data });

    console.log(prisma.seller.findFirst())

    return { message: "Advertisement created successfully!" }; 
}
