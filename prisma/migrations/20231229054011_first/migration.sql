-- CreateTable
CREATE TABLE `Word` (
    `BHSwordSort` INTEGER NOT NULL,
    `paragraphMarker` VARCHAR(191) NULL,
    `poetryMarker` VARCHAR(191) NULL,
    `ETCBCgloss` VARCHAR(191) NOT NULL,
    `extendedGloss` VARCHAR(191) NOT NULL,
    `StrongNumber` VARCHAR(191) NULL,
    `extendedStrongNumber` VARCHAR(191) NOT NULL,
    `language` ENUM('HEBREW', 'ARAMAIC') NOT NULL,
    `BHSverseSort` INTEGER NOT NULL,
    `KJVverseSort` INTEGER NOT NULL,
    `BHSwordPointed` VARCHAR(191) NOT NULL,
    `phoneticTranscription` VARCHAR(191) NOT NULL,
    `clauseId` VARCHAR(191) NOT NULL,
    `lexemeId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`BHSwordSort`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BHSlocation` (
    `BHSverseSort` INTEGER NOT NULL,
    `BHSbook` INTEGER NOT NULL,
    `BHSchapter` INTEGER NOT NULL,
    `BHSverse` INTEGER NOT NULL,

    PRIMARY KEY (`BHSverseSort`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KJVlocation` (
    `KJVverseSort` INTEGER NOT NULL,
    `KJVbook` INTEGER NOT NULL,
    `KJVchapter` INTEGER NOT NULL,
    `KJVverse` INTEGER NOT NULL,

    PRIMARY KEY (`KJVverseSort`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MorphologyLookup` (
    `morphologyCodeLookupVal` VARCHAR(191) NOT NULL,
    `morphologyDetail` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`morphologyCodeLookupVal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Morphology` (
    `morphologyCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`morphologyCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Morphology_Word` (
    `morphologyCode` VARCHAR(191) NOT NULL,
    `BHSwordSort` INTEGER NOT NULL,

    PRIMARY KEY (`BHSwordSort`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clause` (
    `clauseId` VARCHAR(191) NOT NULL,
    `clauseType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`clauseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClauseTypeLookup` (
    `clauseType` VARCHAR(191) NOT NULL,
    `clauseKind` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`clauseType`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Speech` (
    `phoneticTranscription` VARCHAR(191) NOT NULL,
    `SBLstyleTransliteration` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`phoneticTranscription`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Script` (
    `BHSwordPointed` VARCHAR(191) NOT NULL,
    `BHSwordConsonantal` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`BHSwordPointed`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lexeme` (
    `LexemeId` VARCHAR(191) NOT NULL,
    `HebrewLexeme` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`LexemeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BSB` (
    `BSBsort` INTEGER NOT NULL,
    `BSBtext` VARCHAR(191) NOT NULL,
    `BHSwordSort` INTEGER NOT NULL,

    UNIQUE INDEX `BSB_BHSwordSort_key`(`BHSwordSort`),
    PRIMARY KEY (`BSBsort`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Word` ADD CONSTRAINT `Word_BHSverseSort_fkey` FOREIGN KEY (`BHSverseSort`) REFERENCES `BHSlocation`(`BHSverseSort`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Word` ADD CONSTRAINT `Word_KJVverseSort_fkey` FOREIGN KEY (`KJVverseSort`) REFERENCES `KJVlocation`(`KJVverseSort`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Word` ADD CONSTRAINT `Word_phoneticTranscription_fkey` FOREIGN KEY (`phoneticTranscription`) REFERENCES `Speech`(`phoneticTranscription`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Word` ADD CONSTRAINT `Word_BHSwordPointed_fkey` FOREIGN KEY (`BHSwordPointed`) REFERENCES `Script`(`BHSwordPointed`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Word` ADD CONSTRAINT `Word_lexemeId_fkey` FOREIGN KEY (`lexemeId`) REFERENCES `Lexeme`(`LexemeId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Word` ADD CONSTRAINT `Word_clauseId_fkey` FOREIGN KEY (`clauseId`) REFERENCES `Clause`(`clauseId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Morphology` ADD CONSTRAINT `Morphology_morphologyCode_fkey` FOREIGN KEY (`morphologyCode`) REFERENCES `MorphologyLookup`(`morphologyCodeLookupVal`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Morphology_Word` ADD CONSTRAINT `Morphology_Word_morphologyCode_fkey` FOREIGN KEY (`morphologyCode`) REFERENCES `Morphology`(`morphologyCode`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Morphology_Word` ADD CONSTRAINT `Morphology_Word_BHSwordSort_fkey` FOREIGN KEY (`BHSwordSort`) REFERENCES `Word`(`BHSwordSort`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Clause` ADD CONSTRAINT `Clause_clauseType_fkey` FOREIGN KEY (`clauseType`) REFERENCES `ClauseTypeLookup`(`clauseType`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BSB` ADD CONSTRAINT `BSB_BHSwordSort_fkey` FOREIGN KEY (`BHSwordSort`) REFERENCES `Word`(`BHSwordSort`) ON DELETE RESTRICT ON UPDATE CASCADE;
