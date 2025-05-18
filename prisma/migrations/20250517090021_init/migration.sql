/*
  Warnings:

  - You are about to drop the column `phoneNumber` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the `Availability` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Availability" DROP CONSTRAINT "Availability_doctorId_fkey";

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "phoneNumber";

-- DropTable
DROP TABLE "Availability";

-- CreateTable
CREATE TABLE "DoctorAvailability" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "day" "Weekday" NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,

    CONSTRAINT "DoctorAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoctorSlot" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "day" "Weekday" NOT NULL,
    "slotTime" TEXT NOT NULL,
    "isBooked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "DoctorSlot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DoctorAvailability_doctorId_day_key" ON "DoctorAvailability"("doctorId", "day");

-- CreateIndex
CREATE UNIQUE INDEX "DoctorSlot_doctorId_day_slotTime_key" ON "DoctorSlot"("doctorId", "day", "slotTime");

-- AddForeignKey
ALTER TABLE "DoctorAvailability" ADD CONSTRAINT "DoctorAvailability_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorSlot" ADD CONSTRAINT "DoctorSlot_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
