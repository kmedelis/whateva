-- DropIndex
DROP INDEX "UploadedAdvertisement_city_neighborhood_street_key";

-- AlterTable
ALTER TABLE "UploadedAdvertisement" ALTER COLUMN "neighborhood" DROP NOT NULL,
ALTER COLUMN "street" DROP NOT NULL,
ALTER COLUMN "count" DROP NOT NULL,
ALTER COLUMN "timesSearched" DROP NOT NULL;
