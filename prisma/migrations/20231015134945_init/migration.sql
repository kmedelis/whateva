/*
  Warnings:

  - A unique constraint covering the columns `[city,neighborhood,street]` on the table `UploadedAdvertisement` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UploadedAdvertisement_city_neighborhood_street_key" ON "UploadedAdvertisement"("city", "neighborhood", "street");
