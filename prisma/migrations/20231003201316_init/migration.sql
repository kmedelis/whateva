-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Advertisement" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "apartment_features" TEXT[],
    "plotArea" DOUBLE PRECISION NOT NULL,
    "roomCount" INTEGER NOT NULL,
    "buildYear" INTEGER NOT NULL,
    "floor" INTEGER NOT NULL,
    "totalFloors" INTEGER NOT NULL,
    "heating" TEXT NOT NULL,
    "buildingType" TEXT NOT NULL,
    "energyConsumption" TEXT NOT NULL,
    "finish" TEXT NOT NULL,

    CONSTRAINT "Advertisement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seller" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "languages" TEXT[],
    "availability" TEXT[],

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
