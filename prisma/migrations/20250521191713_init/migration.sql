/*
  Warnings:

  - The values [pending,in_progress,completed,cancelled] on the enum `LabRequestStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "LabRequestStatus_new" AS ENUM ('requested', 'confirmed');
ALTER TABLE "LabRequest" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "LabRequest" ALTER COLUMN "status" TYPE "LabRequestStatus_new" USING ("status"::text::"LabRequestStatus_new");
ALTER TYPE "LabRequestStatus" RENAME TO "LabRequestStatus_old";
ALTER TYPE "LabRequestStatus_new" RENAME TO "LabRequestStatus";
DROP TYPE "LabRequestStatus_old";
ALTER TABLE "LabRequest" ALTER COLUMN "status" SET DEFAULT 'requested';
COMMIT;

-- AlterTable
ALTER TABLE "LabRequest" ALTER COLUMN "status" SET DEFAULT 'requested';
