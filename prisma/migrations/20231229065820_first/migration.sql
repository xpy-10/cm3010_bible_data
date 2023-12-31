/*
  Warnings:

  - You are about to drop the column `StrongNumber` on the `Word` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Word` DROP FOREIGN KEY `Word_StrongNumber_fkey`;

-- AlterTable
ALTER TABLE `Word` DROP COLUMN `StrongNumber`;

-- CreateTable
CREATE TABLE `Strong_WordRelation` (
    `StrongNumber` VARCHAR(191) NOT NULL,
    `BHSwordSort` INTEGER NOT NULL,

    PRIMARY KEY (`StrongNumber`, `BHSwordSort`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Strong_WordRelation` ADD CONSTRAINT `Strong_WordRelation_StrongNumber_fkey` FOREIGN KEY (`StrongNumber`) REFERENCES `Strong`(`StrongNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Strong_WordRelation` ADD CONSTRAINT `Strong_WordRelation_BHSwordSort_fkey` FOREIGN KEY (`BHSwordSort`) REFERENCES `Word`(`BHSwordSort`) ON DELETE RESTRICT ON UPDATE CASCADE;
