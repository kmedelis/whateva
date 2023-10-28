/*
  Warnings:

  - You are about to drop the column `address` on the `Advertisement` table. All the data in the column will be lost.
  - Added the required column `city` to the `Advertisement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `houseNumber` to the `Advertisement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhood` to the `Advertisement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Advertisement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Advertisement" DROP COLUMN "address",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "houseNumber" TEXT NOT NULL,
ADD COLUMN     "neighborhood" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL;
