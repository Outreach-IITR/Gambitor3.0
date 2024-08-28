-- CreateEnum
CREATE TYPE "Category" AS ENUM ('ARETEOX', 'METIOX', 'APOLLOX', 'ATHENOX');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('PARTICIPANT', 'SCHOOL_AMBASSADOR', 'BOTH');

-- CreateTable
CREATE TABLE "Otpvalue" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Otpvalue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phoneotp" (
    "id" SERIAL NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Phoneotp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(191) NOT NULL,
    "password" TEXT,
    "name" TEXT,
    "contactNumber" TEXT,
    "category" "Category",
    "referralCode" TEXT,
    "schoolName" TEXT,
    "state" TEXT,
    "role" "Role" NOT NULL DEFAULT 'PARTICIPANT',
    "profile" TEXT,
    "googleId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "myReferral" TEXT,
    "referralCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_googleId_key" ON "User"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "User_myReferral_key" ON "User"("myReferral");
