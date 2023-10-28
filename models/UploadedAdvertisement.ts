export interface UploadedAdvertisement {
    id: number;  // Adding id field since it's part of the Prisma model
    city: string;
    neighborhood?: string | null;
    street?: string | null;
    count?: number | null;
    timesSearched?: number | null;
}