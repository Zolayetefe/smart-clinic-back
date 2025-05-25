-- CreateEnum
CREATE TYPE "DispenseStatus" AS ENUM ('dispensed', 'pending');

-- AlterTable
ALTER TABLE "Prescription" ADD COLUMN     "dispenseStatus" "DispenseStatus" DEFAULT 'pending';

-- CreateTable
CREATE TABLE "Dispense" (
    "id" TEXT NOT NULL,
    "prescriptionId" TEXT NOT NULL,
    "pharmacistId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "dispensedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "medications" JSONB[],
    "notes" TEXT,
    "status" "DispenseStatus" NOT NULL DEFAULT 'pending',

    CONSTRAINT "Dispense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dispense_prescriptionId_key" ON "Dispense"("prescriptionId");

-- AddForeignKey
ALTER TABLE "Dispense" ADD CONSTRAINT "Dispense_prescriptionId_fkey" FOREIGN KEY ("prescriptionId") REFERENCES "Prescription"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dispense" ADD CONSTRAINT "Dispense_pharmacistId_fkey" FOREIGN KEY ("pharmacistId") REFERENCES "Pharmacist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dispense" ADD CONSTRAINT "Dispense_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
