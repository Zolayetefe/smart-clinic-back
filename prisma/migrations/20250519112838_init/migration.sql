/*
  Warnings:

  - A unique constraint covering the columns `[appointmentId]` on the table `Triage` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Triage" ADD COLUMN     "appointmentId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Triage_appointmentId_key" ON "Triage"("appointmentId");

-- AddForeignKey
ALTER TABLE "Triage" ADD CONSTRAINT "Triage_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Appointment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
