"use server"
import { prisma } from "@/lib/prisma";
import { UploadedAdvertisement } from "@/models/UploadedAdvertisement";
import { Prisma } from "@prisma/client";

export const updateUploadedAdvertisement = async (city: string, neighborhood?: string, street?: string) => {
    neighborhood = neighborhood !== undefined ? neighborhood : "";
    street = street !== undefined ? street : "";

    const existingAddress = await prisma.uploadedAdvertisement.findUnique({
        where: {
            city_neighborhood_street: {
                city: city,
                neighborhood: neighborhood,
                street: street
            }
        },
    });

    if (existingAddress) {
        await prisma.uploadedAdvertisement.update({
            where: {
                id: existingAddress.id,
            },
            data: {
                count: {
                    increment: 1,
                },
            },
        });
    } else {
        await prisma.uploadedAdvertisement.create({
            data: {
                city: city,
                neighborhood: neighborhood,
                street: street,
            },
        });
    }
}

export const getAllUploadedAdvertisements = async (): Promise<UploadedAdvertisement[]> => {
    const data = await prisma.uploadedAdvertisement.findMany();
    return data;
}

export const incrementTimesSearched = async (city: string, neighborhood?: string, street?: string) => {
    neighborhood = neighborhood !== undefined ? neighborhood : "";
    street = street !== undefined ? street : "";

    const existingAddress = await prisma.uploadedAdvertisement.findUnique({
        where: {
            city_neighborhood_street: {
                city: city,
                neighborhood: neighborhood,
                street: street
            }
        },
    });

    if (existingAddress) {
        await prisma.uploadedAdvertisement.update({
            where: {
                id: existingAddress.id,
            },
            data: {
                timesSearched: {
                    increment: 1,
                }
            },
        });
    } else {
        console.warn("Address not found to increment timesSearched.");
    }
};

