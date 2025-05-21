-- DropForeignKey
ALTER TABLE "LabResult" DROP CONSTRAINT "LabResult_labTechnicianId_fkey";

-- DropForeignKey
ALTER TABLE "Pharmacy" DROP CONSTRAINT "Pharmacy_pharmacistId_fkey";

-- AddForeignKey
ALTER TABLE "LabResult" ADD CONSTRAINT "LabResult_labTechnicianId_fkey" FOREIGN KEY ("labTechnicianId") REFERENCES "LabTechnician"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pharmacy" ADD CONSTRAINT "Pharmacy_pharmacistId_fkey" FOREIGN KEY ("pharmacistId") REFERENCES "Pharmacist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
