/*
  Warnings:

  - You are about to drop the column `userId` on the `TripPreferences` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tripId,userEmail]` on the table `TripPreferences` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userEmail` to the `TripPreferences` table without a default value. This is not possible if the table is not empty.
  - Made the column `preferences` on table `TripPreferences` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "TripPreferences" DROP CONSTRAINT "TripPreferences_userId_fkey";

-- DropIndex
DROP INDEX "TripPreferences_tripId_userId_key";

-- AlterTable
ALTER TABLE "TripPreferences" DROP COLUMN "userId",
ADD COLUMN     "userEmail" TEXT NOT NULL,
ALTER COLUMN "preferences" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TripPreferences_tripId_userEmail_key" ON "TripPreferences"("tripId", "userEmail");

-- AddForeignKey
ALTER TABLE "TripPreferences" ADD CONSTRAINT "TripPreferences_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
