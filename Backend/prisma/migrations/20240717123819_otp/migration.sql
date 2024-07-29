/*
  Warnings:

  - You are about to drop the `OtpPhone` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "OtpPhone";

-- CreateTable
CREATE TABLE "Phoneotp" (
    "id" SERIAL NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Phoneotp_pkey" PRIMARY KEY ("id")
);
