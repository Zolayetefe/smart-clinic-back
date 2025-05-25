/*
  Warnings:

  - You are about to drop the column `labTechnicianId` on the `LabTestBill` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[financeStaffId]` on the table `LabTestBill` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `financeStaffId` to the `LabTestBill` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('active', 'suspend');

-- DropForeignKey
ALTER TABLE "LabTestBill" DROP CONSTRAINT "LabTestBill_labTechnicianId_fkey";

-- AlterTable
ALTER TABLE "LabRequest" ADD COLUMN     "approvalStatus" "ApprovalStatus" NOT NULL DEFAULT 'pending';

-- AlterTable
ALTER TABLE "LabTestBill" DROP COLUMN "labTechnicianId",
ADD COLUMN     "financeStaffId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "status" "UserStatus" DEFAULT 'active';

-- CreateIndex
CREATE UNIQUE INDEX "LabTestBill_financeStaffId_key" ON "LabTestBill"("financeStaffId");

-- AddForeignKey
ALTER TABLE "LabTestBill" ADD CONSTRAINT "LabTestBill_financeStaffId_fkey" FOREIGN KEY ("financeStaffId") REFERENCES "FinanceStaff"("id") ON DELETE CASCADE ON UPDATE CASCADE;
