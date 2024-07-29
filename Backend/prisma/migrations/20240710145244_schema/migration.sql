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
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(191) NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "contactNumber" TEXT,
    "category" "Category",
    "referralCode" TEXT,
    "schoolName" TEXT,
    "role" "Role" NOT NULL DEFAULT 'PARTICIPANT',
    "profile" TEXT,
    "googleId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_googleId_key" ON "User"("googleId");
