/*
  Warnings:

  - You are about to drop the column `email` on the `Result` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Result_email_key";

-- AlterTable
ALTER TABLE "Result" DROP COLUMN "email",
ADD COLUMN     "contactNumber" TEXT;
