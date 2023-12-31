-- CreateTable
CREATE TABLE `Strong` (
    `StrongNumber` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`StrongNumber`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Word` ADD CONSTRAINT `Word_StrongNumber_fkey` FOREIGN KEY (`StrongNumber`) REFERENCES `Strong`(`StrongNumber`) ON DELETE SET NULL ON UPDATE CASCADE;
