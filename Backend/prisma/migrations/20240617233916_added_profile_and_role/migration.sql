-- CreateEnum
CREATE TYPE "Role" AS ENUM ('PARTICIPANT', 'SCHOOL_AMBASSADOR');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profile" TEXT,
ADD COLUMN     "role" "Role";
