/*
  Warnings:

  - Added the required column `contactNumber` to the `SchoolAmbassador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `SchoolAmbassador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolName` to the `SchoolAmbassador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SchoolAmbassador" ADD COLUMN     "contactNumber" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "schoolName" TEXT NOT NULL;
