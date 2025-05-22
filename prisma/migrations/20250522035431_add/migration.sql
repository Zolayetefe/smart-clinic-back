-- CreateEnum
CREATE TYPE "LabRequestPriority" AS ENUM ('urgent', 'routine');

-- AlterTable
ALTER TABLE "LabRequest" ADD COLUMN     "priority" "LabRequestPriority";
