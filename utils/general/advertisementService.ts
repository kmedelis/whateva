"use server"
import { prisma } from "@/lib/prisma";
import { Advertisement } from "@/models/Advertisement";
import { updateUploadedAdvertisement } from "./uploadedAdvertisementService";
import { Prisma } from "@prisma/client";

export const createAdvertisement = async (data: Advertisement) => {
    await prisma.advertisement.create({ data });

    await updateUploadedAdvertisement(data.city, data.neighborhood, data.street);

    return { message: "Advertisement created successfully!" }; 
}

export const getAdvertisements = async (city: string, neighborhood?: string, street?: string): Promise<Advertisement[]> => {
    
    let whereClause: Prisma.UploadedAdvertisementWhereInput = {};

    if (city) {
        whereClause.city = city;
    }
    
    if (neighborhood) {
        whereClause.neighborhood = neighborhood;
    }

    if (street) {
        whereClause.street = street;
    }


    const existingAddress = await prisma.advertisement.findMany({
        where: whereClause,
    });
    
    return existingAddress;
}