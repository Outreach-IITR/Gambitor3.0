-- CreateTable
CREATE TABLE "Result" (
    "id" SERIAL NOT NULL,
    "rank" INTEGER,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "category" TEXT,
    "totalMarks" INTEGER,
    "totalPositiveMarks" INTEGER,
    "totalNegativeMarks" INTEGER,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Result_email_key" ON "Result"("email");
