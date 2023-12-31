-- DropForeignKey
ALTER TABLE `Word` DROP FOREIGN KEY `Word_phoneticTranscription_fkey`;

-- AlterTable
ALTER TABLE `Word` MODIFY `phoneticTranscription` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Word` ADD CONSTRAINT `Word_phoneticTranscription_fkey` FOREIGN KEY (`phoneticTranscription`) REFERENCES `Speech`(`phoneticTranscription`) ON DELETE SET NULL ON UPDATE CASCADE;
