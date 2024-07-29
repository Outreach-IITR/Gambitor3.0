-- CreateTable
CREATE TABLE "OtpPhone" (
    "id" SERIAL NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OtpPhone_pkey" PRIMARY KEY ("id")
);
