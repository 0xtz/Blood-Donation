/*
  Warnings:

  - You are about to drop the column `bloodTypeId` on the `donation` table. All the data in the column will be lost.
  - You are about to drop the column `hospitalId` on the `donation` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `donation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `donation` DROP FOREIGN KEY `Donation_bloodTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `donation` DROP FOREIGN KEY `Donation_hospitalId_fkey`;

-- DropForeignKey   
ALTER TABLE `donation` DROP FOREIGN KEY `Donation_userId_fkey`;

-- AlterTable
ALTER TABLE `donation` DROP COLUMN `bloodTypeId`,
    DROP COLUMN `hospitalId`,
    DROP COLUMN `userId`,
    ADD COLUMN `bloodType_id` VARCHAR(191) NULL,
    MODIFY `user_id` VARCHAR(191) NULL,
    MODIFY `hospital_id` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `Donation_bloodTypeId_fkey` ON `Donation`(`bloodType_id`);

-- CreateIndex
CREATE INDEX `Donation_hospitalId_fkey` ON `Donation`(`hospital_id`);

-- CreateIndex
CREATE INDEX `Donation_userId_fkey` ON `Donation`(`user_id`);

-- AddForeignKey
ALTER TABLE `Donation` ADD CONSTRAINT `Donation_bloodType_id_fkey` FOREIGN KEY (`bloodType_id`) REFERENCES `BloodType`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Donation` ADD CONSTRAINT `Donation_hospital_id_fkey` FOREIGN KEY (`hospital_id`) REFERENCES `Hospital`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Donation` ADD CONSTRAINT `Donation_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
