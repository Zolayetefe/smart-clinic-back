-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('active', 'suspend');

-- AlterTable
ALTER TABLE "LabRequest" ADD COLUMN     "approvalStatus" "ApprovalStatus" NOT NULL DEFAULT 'pending';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "status" "UserStatus" DEFAULT 'active';
