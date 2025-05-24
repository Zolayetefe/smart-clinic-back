/*
  Warnings:

  - You are about to drop the column `notes` on the `MedicationBill` table. All the data in the column will be lost.
  - You are about to drop the column `pharmacistId` on the `MedicationBill` table. All the data in the column will be lost.
  - You are about to drop the `DispenseRecord` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `financeStaffId` to the `MedicationBill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medications` to the `MedicationBill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DispenseRecord" DROP CONSTRAINT "DispenseRecord_patientId_fkey";

-- DropForeignKey
ALTER TABLE "DispenseRecord" DROP CONSTRAINT "DispenseRecord_pharmacistId_fkey";

-- DropForeignKey
ALTER TABLE "DispenseRecord" DROP CONSTRAINT "DispenseRecord_prescriptionId_fkey";

-- DropForeignKey
ALTER TABLE "MedicationBill" DROP CONSTRAINT "MedicationBill_pharmacistId_fkey";

-- DropForeignKey
ALTER TABLE "Prescription" DROP CONSTRAINT "Prescription_labResultId_fkey";

-- AlterTable
ALTER TABLE "MedicationBill" DROP COLUMN "notes",
DROP COLUMN "pharmacistId",
ADD COLUMN     "approvalStatus" "ApprovalStatus" NOT NULL DEFAULT 'pending',
ADD COLUMN     "financeStaffId" TEXT NOT NULL,
ADD COLUMN     "medications" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Prescription" ALTER COLUMN "status" SET DEFAULT 'active',
ALTER COLUMN "labResultId" DROP NOT NULL,
ALTER COLUMN "notes" DROP NOT NULL;

-- DropTable
DROP TABLE "DispenseRecord";

-- CreateTable
CREATE TABLE "LabTestBill" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "labRequestId" TEXT NOT NULL,
    "labTechnicianId" TEXT NOT NULL,
    "tests" JSONB NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "approvalStatus" "ApprovalStatus" NOT NULL DEFAULT 'pending',
    "paidAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LabTestBill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LabTestBill_labRequestId_key" ON "LabTestBill"("labRequestId");

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_labResultId_fkey" FOREIGN KEY ("labResultId") REFERENCES "LabResult"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicationBill" ADD CONSTRAINT "MedicationBill_financeStaffId_fkey" FOREIGN KEY ("financeStaffId") REFERENCES "FinanceStaff"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabTestBill" ADD CONSTRAINT "LabTestBill_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabTestBill" ADD CONSTRAINT "LabTestBill_labRequestId_fkey" FOREIGN KEY ("labRequestId") REFERENCES "LabRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabTestBill" ADD CONSTRAINT "LabTestBill_labTechnicianId_fkey" FOREIGN KEY ("labTechnicianId") REFERENCES "LabTechnician"("id") ON DELETE CASCADE ON UPDATE CASCADE;
