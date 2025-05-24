/*
  Warnings:

  - A unique constraint covering the columns `[labResultId]` on the table `Prescription` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `labResultId` to the `Prescription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Prescription" ADD COLUMN     "labResultId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Prescription_labResultId_key" ON "Prescription"("labResultId");

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_labResultId_fkey" FOREIGN KEY ("labResultId") REFERENCES "LabResult"("id") ON DELETE CASCADE ON UPDATE CASCADE;
