/*
  Warnings:

  - The values [pending] on the enum `PrescriptionStatus` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `notes` to the `Prescription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PrescriptionStatus_new" AS ENUM ('active', 'fulfilled', 'cancelled');
ALTER TABLE "Prescription" ALTER COLUMN "status" TYPE "PrescriptionStatus_new" USING ("status"::text::"PrescriptionStatus_new");
ALTER TYPE "PrescriptionStatus" RENAME TO "PrescriptionStatus_old";
ALTER TYPE "PrescriptionStatus_new" RENAME TO "PrescriptionStatus";
DROP TYPE "PrescriptionStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Prescription" ADD COLUMN     "notes" TEXT NOT NULL;
