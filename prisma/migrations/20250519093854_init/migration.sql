/*
  Warnings:

  - You are about to drop the column `symptoms` on the `Triage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "symptoms" TEXT[];

-- AlterTable
ALTER TABLE "Triage" DROP COLUMN "symptoms";
