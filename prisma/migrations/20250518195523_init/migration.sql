/*
  Warnings:

  - You are about to drop the column `submittedBy` on the `Triage` table. All the data in the column will be lost.
  - You are about to drop the column `submittedById` on the `Triage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Triage" DROP CONSTRAINT "Triage_submittedById_fkey";

-- AlterTable
ALTER TABLE "Triage" DROP COLUMN "submittedBy",
DROP COLUMN "submittedById",
ADD COLUMN     "nurseId" TEXT;

-- AddForeignKey
ALTER TABLE "Triage" ADD CONSTRAINT "Triage_nurseId_fkey" FOREIGN KEY ("nurseId") REFERENCES "Nurse"("id") ON DELETE SET NULL ON UPDATE CASCADE;
