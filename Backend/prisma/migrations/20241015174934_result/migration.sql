/*
  Warnings:

  - You are about to drop the column `totalNegativeMarks` on the `Result` table. All the data in the column will be lost.
  - You are about to drop the column `totalPositiveMarks` on the `Result` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Result" DROP COLUMN "totalNegativeMarks",
DROP COLUMN "totalPositiveMarks";
