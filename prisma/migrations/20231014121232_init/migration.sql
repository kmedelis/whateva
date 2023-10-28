-- CreateTable
CREATE TABLE "UploadedAdvertisement" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "UploadedAdvertisement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UploadedAdvertisement_city_neighborhood_street_key" ON "UploadedAdvertisement"("city", "neighborhood", "street");
