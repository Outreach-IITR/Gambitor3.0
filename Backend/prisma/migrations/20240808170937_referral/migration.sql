/*
  Warnings:

  - A unique constraint covering the columns `[myReferral]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "myReferral" TEXT,
ADD COLUMN     "referralCount" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "User_myReferral_key" ON "User"("myReferral");
