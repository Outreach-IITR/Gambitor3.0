/*
  Warnings:

  - You are about to alter the column `email` on the `Otpvalue` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(191)`.
  - You are about to alter the column `contactNumber` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.

*/
-- AlterTable
ALTER TABLE "Otpvalue" ALTER COLUMN "email" SET DATA TYPE VARCHAR(191);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "contactNumber" SET DATA TYPE VARCHAR(10);
