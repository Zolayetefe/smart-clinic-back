/*
  Warnings:

  - The values [requested] on the enum `LabRequestStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `testType` on the `LabRequest` table. All the data in the column will be lost.
  - Added the required column `tests` to the `LabRequest` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RequestPriority" AS ENUM ('routine', 'urgent');

-- AlterEnum
BEGIN;
CREATE TYPE "LabRequestStatus_new" AS ENUM ('pending', 'in_progress', 'completed', 'cancelled');
ALTER TABLE "LabRequest" ALTER COLUMN "status" TYPE "LabRequestStatus_new" USING ("status"::text::"LabRequestStatus_new");
ALTER TYPE "LabRequestStatus" RENAME TO "LabRequestStatus_old";
ALTER TYPE "LabRequestStatus_new" RENAME TO "LabRequestStatus";
DROP TYPE "LabRequestStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "LabRequest" DROP COLUMN "testType",
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "priority" "RequestPriority" NOT NULL DEFAULT 'routine',
ADD COLUMN     "tests" JSONB NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'pending';

-- AlterTable
ALTER TABLE "LabResult" ALTER COLUMN "notes" DROP NOT NULL;
