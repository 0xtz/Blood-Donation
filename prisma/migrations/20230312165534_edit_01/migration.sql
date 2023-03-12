/*
  Warnings:

  - You are about to drop the column `blood_type` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `bloodrequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `bloodtype` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Blood_type` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `bloodrequest` DROP FOREIGN KEY `BloodRequest_hospital_id_fkey`;

-- DropForeignKey
ALTER TABLE `donation` DROP FOREIGN KEY `Donation_blood_type_id_fkey`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `blood_type`,
    ADD COLUMN `Blood_type` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `bloodrequest`;

-- DropTable
DROP TABLE `bloodtype`;

-- CreateTable
CREATE TABLE `Blood_Request` (
    `id` VARCHAR(191) NOT NULL,
    `hospital_id` VARCHAR(191) NOT NULL,
    `blood_type` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'Open',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `BloodRequest_hospital_id_fkey`(`hospital_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Blood_Type` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `can_donate_to` VARCHAR(191) NOT NULL,
    `can_receive_from` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Donation` ADD CONSTRAINT `Donation_blood_type_id_fkey` FOREIGN KEY (`blood_type_id`) REFERENCES `Blood_Type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Blood_Request` ADD CONSTRAINT `Blood_Request_hospital_id_fkey` FOREIGN KEY (`hospital_id`) REFERENCES `Hospital`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RedefineIndex
CREATE INDEX `Donation_blood_typeId_fkey` ON `Donation`(`blood_type_id`);
DROP INDEX `Donation_bloodTypeId_fkey` ON `donation`;
