/*
  Warnings:

  - You are about to drop the column `priority` on the `LabRequest` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[doctorId,day,startTime,endTime]` on the table `DoctorAvailability` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "DoctorAvailability_doctorId_day_key";

-- AlterTable
ALTER TABLE "LabRequest" DROP COLUMN "priority";

-- DropEnum
DROP TYPE "RequestPriority";

-- CreateIndex
CREATE UNIQUE INDEX "DoctorAvailability_doctorId_day_startTime_endTime_key" ON "DoctorAvailability"("doctorId", "day", "startTime", "endTime");
