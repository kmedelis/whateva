/*
  Warnings:

  - Added the required column `price` to the `Advertisement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Advertisement" ADD COLUMN     "price" TEXT NOT NULL;
