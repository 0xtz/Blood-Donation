/*
  Warnings:

  - You are about to drop the column `bloodType_id` on the `donation` table. All the data in the column will be lost.
  - You are about to drop the column `bloodType` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `bloodtype` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `blood_type` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `donation` DROP FOREIGN KEY `Donation_bloodType_id_fkey`;

-- AlterTable
ALTER TABLE `donation` DROP COLUMN `bloodType_id`,
    ADD COLUMN `blood_type_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `bloodType`,
    DROP COLUMN `phoneNumber`,
    ADD COLUMN `blood_type` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone_number` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `bloodtype`;

-- CreateTable
CREATE TABLE `Blood_type` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `can_donate_to` VARCHAR(191) NOT NULL,
    `can_receive_from` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Donation_blood_typeId_fkey` ON `Donation`(`blood_type_id`);

-- AddForeignKey
ALTER TABLE `Donation` ADD CONSTRAINT `Donation_blood_type_id_fkey` FOREIGN KEY (`blood_type_id`) REFERENCES `Blood_type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
