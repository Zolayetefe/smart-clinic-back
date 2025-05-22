/*
  Warnings:

  - You are about to drop the column `resultUrl` on the `LabResult` table. All the data in the column will be lost.
  - Added the required column `result` to the `LabResult` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LabResult" DROP COLUMN "resultUrl",
ADD COLUMN     "result" JSONB NOT NULL;
