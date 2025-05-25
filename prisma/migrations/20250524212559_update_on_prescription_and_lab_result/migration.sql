/*
  Warnings:

  - You are about to drop the column `prescriptionId` on the `LabResult` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Prescription` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[labResultId]` on the table `Prescription` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "LabResult" DROP CONSTRAINT "LabResult_labRequestId_fkey";

-- DropForeignKey
ALTER TABLE "LabResult" DROP CONSTRAINT "LabResult_labTechnicianId_fkey";

-- DropForeignKey
ALTER TABLE "LabResult" DROP CONSTRAINT "LabResult_prescriptionId_fkey";

-- DropIndex
DROP INDEX "LabResult_prescriptionId_key";

-- AlterTable
ALTER TABLE "LabResult" DROP COLUMN "prescriptionId";

-- AlterTable
ALTER TABLE "MedicationBill" ALTER COLUMN "approvalStatus" SET DEFAULT 'approved';

-- AlterTable
ALTER TABLE "Prescription" DROP COLUMN "status",
ADD COLUMN     "approvalStatus" "ApprovalStatus" NOT NULL DEFAULT 'pending',
ADD COLUMN     "labResultId" TEXT;

-- DropEnum
DROP TYPE "PrescriptionStatus";

-- CreateIndex
CREATE UNIQUE INDEX "Prescription_labResultId_key" ON "Prescription"("labResultId");

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_labResultId_fkey" FOREIGN KEY ("labResultId") REFERENCES "LabResult"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabResult" ADD CONSTRAINT "LabResult_labTechnicianId_fkey" FOREIGN KEY ("labTechnicianId") REFERENCES "LabTechnician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabResult" ADD CONSTRAINT "LabResult_labRequestId_fkey" FOREIGN KEY ("labRequestId") REFERENCES "LabRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
