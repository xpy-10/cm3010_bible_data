import { PrismaClient } from '@prisma/client'
const csv = require('csv-parser')
const fs = require('fs')
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'



const prisma = new PrismaClient()
type csvRow = {
    BHSwordSort: string;
    paragraphMarker: string;
    poetryMarker: string;
    clauseID: string;
    clauseKind: string;
    clauseType: string;
    language: string;
    BHSwordPointed: string;
    BHSwordConsonantal: string;
    SBLstyleTransliteration: string;
    poneticTranscription: string;
    HebrewLexeme: string;
    lexemeID: string;
    StrongNumber: string;
    extendedStrongNumber: string;
    morphologyCode: string;
    morphologyDetail: string;
    ETCBCgloss: string;
    extendedGloss: string;
    KJVverseSort: string;
    KJVbook: string;
    KJVchapter: string;
    KJVverse: string;
    BHSverseSort: string;
    BHSbook: string;
    BHSchapter: string;
    BHSverse: string;
    BSBsort: string;
    BSB: string;

}

// create an array of the string values for the csv part files
const file_parts: String[] = []
for (let i = 0; i < 86; i++){
    file_parts.push("../data/data_part_" + String(i+1)+'.csv')
}
// define the function to read the files and call createWord, which populates database
function populateDatabase(fileName:String) {
    fs.createReadStream(fileName)
    .pipe(csv())
    .on('data', (data: csvRow) => {
        createWord(data)
        
    })
    .on('end', () => {
        console.log('read records successfully');
    })
}

// iterate through the file_parts array to read each file and populate database with a timed delay
for (let i = 0; i<file_parts.length; i++){
    if (i < 2){
        setTimeout(
            populateDatabase, 3000, file_parts[i]
        )    
    }
    else {
        setTimeout(
            populateDatabase, 60000, file_parts[i]
        )
    }

}
    
async function createWord(inputData:csvRow) {

    try {
        await kJVlocationPopulate(inputData)
    }
    catch(error){
        if (error instanceof PrismaClientKnownRequestError){
            let error2 = error as PrismaClientKnownRequestError
            if (error2.code == 'P2002'){
                console.log("error for 2002 encountered")
            }
        } 
        else {
            console.log(error)
        }
    }
    try {
        await bHSlocationPopulate(inputData)
    }
    catch(error){
        if (error instanceof PrismaClientKnownRequestError){
            let error2 = error as PrismaClientKnownRequestError
            if (error2.code == 'P2002'){
                console.log("error for 2002 encountered")
            }
        } 
        else {
            console.log(error)
        }
    }
    
    try{
        await lexemePopulate(inputData)
    }
    catch(error){
        if (error instanceof PrismaClientKnownRequestError){
            let error2 = error as PrismaClientKnownRequestError
            if (error2.code == 'P2002'){
                console.log("error for 2002 encountered")
            }
        } 
        else {
            console.log(error)
        }
    }

    try {
        await scriptPopulate(inputData)
    }
    catch(error){
        if (error instanceof PrismaClientKnownRequestError){
            let error2 = error as PrismaClientKnownRequestError
            if (error2.code == 'P2002'){
                console.log("error for 2002 encountered")
            }
        } 
        else {
            console.log(error)
        }
    }

    try {
        await speechPopulate(inputData)
    }
    catch(error){
        if (error instanceof PrismaClientKnownRequestError){
            let error2 = error as PrismaClientKnownRequestError
            if (error2.code == 'P2002'){
                console.log("error for 2002 encountered")
            }
        } 
        else {
            console.log(error)
        }
    }

    try {
        await clauseLookupPopulate(inputData)
    }
    catch(error){
        if (error instanceof PrismaClientKnownRequestError){
            let error2 = error as PrismaClientKnownRequestError
            if (error2.code == 'P2002'){
                console.log("error for 2002 encountered")
            }
        } 
        else {
            console.log(error)
        }
    }

    try {
        await clausePopulate(inputData)
    }
    catch(error){
        if (error instanceof PrismaClientKnownRequestError){
            let error2 = error as PrismaClientKnownRequestError
            if (error2.code == 'P2002'){
                console.log("error for 2002 encountered")
            }
        } 
        else {
            console.log(error)
        }
    }

    try {
        await wordPopulate(inputData)
    }
    catch(error){
        if (error instanceof PrismaClientKnownRequestError){
            let error2 = error as PrismaClientKnownRequestError
            if (error2.code == 'P2002'){
                console.log("error for 2002 encountered")
            }
        } 
        else {
            console.log(error)
        }
        console.log(error)
    }

    try {
        await strongPopulate(inputData)
    }
    catch(error){
        if (error instanceof PrismaClientKnownRequestError){
            let error2 = error as PrismaClientKnownRequestError
            if (error2.code == 'P2002'){
                console.log("error for 2002 encountered")
            }
        } 
        else {
            console.log(error)
        }
        console.log(error)
    }

    try {
        await morphologyLookupPopulateMany(inputData)
    }
    catch(error){
        if (error instanceof PrismaClientKnownRequestError){
            let error2 = error as PrismaClientKnownRequestError
            if (error2.code == 'P2002'){
                console.log("error for 2002 encountered")
            }
        } 
        else {
            console.log(error)
        }
    }

    try {
        await morphologyPopulateMany(inputData)
    }    
    catch(error){
        if (error instanceof PrismaClientKnownRequestError){
            let error2 = error as PrismaClientKnownRequestError
            if (error2.code == 'P2002'){
                console.log("error for 2002 encountered")
            }
        } 
        else {
            console.log(error)
        }
    }

    try {
        await populateMorphology_WordMany(inputData)
    }
    catch(error){
        if (error instanceof PrismaClientKnownRequestError){
            let error2 = error as PrismaClientKnownRequestError
            if (error2.code == 'P2002'){
                console.log("error for 2002 encountered")
            }
        } 
        else {
            console.log(error)
        }
    }



    try {
        await populateBSB(inputData)
    }
    catch(error){
        if (error instanceof PrismaClientKnownRequestError){
            let error2 = error as PrismaClientKnownRequestError
            if (error2.code == 'P2002'){
                console.log("error for 2002 encountered")
            }
        } 
        else {
            console.log(error)
        }
    }
    
    finally {
        await prisma.$disconnect()
    }
}

// handle errors
function handleError(error: any, inputData:csvRow, callback:(inputData:csvRow)=>void){
    if (error instanceof PrismaClientKnownRequestError){
        let error2 = error as PrismaClientKnownRequestError
        if (error2.code == 'P2002'){
            console.log("error for 2002 encountered")
        }
    } 
    else {
        console.log(error)
    }
}

// helper functions
async function kJVlocationPopulate(inputData: csvRow){
    const existingKJVlocation = await prisma.kJVlocation.findUnique({
        where: {
                KJVverseSort: Number(inputData.KJVverseSort),
        }
    })
    if (existingKJVlocation===null){
        await prisma.kJVlocation.create({
            data: {
                KJVverseSort: Number(inputData.KJVverseSort),
                KJVbook: Number(inputData.KJVbook),
                KJVchapter: Number(inputData.KJVchapter),
                KJVverse: Number(inputData.KJVverse),
            }
        })
    }
}

async function bHSlocationPopulate(inputData: csvRow){
    const existingBHSlocation = await prisma.bHSlocation.findUnique({
        where: {
                BHSverseSort: Number(inputData.BHSverseSort),
        }
    })
    if (existingBHSlocation===null){
        await prisma.bHSlocation.create({
            data: {
                BHSverseSort: Number(inputData.BHSverseSort),
                BHSbook: Number(inputData.BHSbook),
                BHSchapter: Number(inputData.BHSchapter),
                BHSverse: Number(inputData.BHSverse),
            }
        })
    }
}

async function lexemePopulate(inputData: csvRow){
    const existingLexeme = await prisma.lexeme.findUnique({
        where: {
            LexemeId: inputData.lexemeID
        }
    })
    if (existingLexeme===null){
        await prisma.lexeme.create({
            data: {
                LexemeId: inputData.lexemeID,
                HebrewLexeme: inputData.HebrewLexeme,
            }
        })
    }
}

async function speechPopulate(inputData: csvRow){
    if (inputData.poneticTranscription){ // evaluate for empty values
        const existingSpeech = await prisma.speech.findUnique({
            where: {
                phoneticTranscription: inputData.poneticTranscription
            }
        })
        if (existingSpeech===null){
            await prisma.speech.create({
                data: {
                    phoneticTranscription: inputData.poneticTranscription,
                    SBLstyleTransliteration: inputData.SBLstyleTransliteration,
                }
            })
        }
    }
}

async function scriptPopulate(inputData: csvRow){
    const existingScript = await prisma.script.findUnique({
        where: {
            BHSwordPointed: inputData.BHSwordPointed
        }
    })
    if(existingScript===null){
        await prisma.script.create({
            data: {
                BHSwordPointed: inputData.BHSwordPointed,
                BHSwordConsonantal: inputData.BHSwordConsonantal,
            }
        })
    }
}

async function clauseLookupPopulate(inputData: csvRow){
    const existingClauseTypeLookup = await prisma.clauseTypeLookup.findUnique({
        where: {
            clauseType: inputData.clauseType,
        }
    })
    if (existingClauseTypeLookup===null){
        await prisma.clauseTypeLookup.create({
            data: {
                clauseType: inputData.clauseType,
                clauseKind: inputData.clauseKind,
            }
        })
    }
}

async function clausePopulate(inputData: csvRow){
    const existingClause = await prisma.clause.findUnique({
        where: {
            clauseId: inputData.clauseID
        }
    })
    if (existingClause===null){
        await prisma.clause.create({
            data: {
                clauseId: inputData.clauseID,
                clauseType: inputData.clauseType,
            }
        })
    }
}

async function wordPopulate(inputData: csvRow){
    const existingWord = await prisma.word.findUnique({
        where: {
            BHSwordSort: Number(inputData.BHSwordSort)
        }
    })
    if (existingWord===null){
        await prisma.word.create({
            data: {
                BHSwordSort: Number(inputData.BHSwordSort),
                paragraphMarker: inputData.paragraphMarker?inputData.paragraphMarker:undefined,
                poetryMarker: inputData.poetryMarker?inputData.poetryMarker:undefined,
                ETCBCgloss: inputData.ETCBCgloss,
                extendedGloss: inputData.extendedGloss,
                extendedStrongNumber: inputData.extendedStrongNumber,
                language: inputData.language=="HEBREW"?"HEBREW":"ARAMAIC",
                KJVverseSort: Number(inputData.KJVverseSort),
                BHSverseSort: Number(inputData.BHSverseSort),
                BHSwordPointed: inputData.BHSwordPointed,
                phoneticTranscription: inputData.poneticTranscription?inputData.poneticTranscription:undefined,
                clauseId: inputData.clauseID,
                lexemeId: inputData.lexemeID,
            }
        })
    }
}

async function strongPopulate(inputData: csvRow){
    const existingStrong = await prisma.strong.findUnique({
        where: {
            StrongNumber: inputData.StrongNumber,
        }
    })
    if (existingStrong){
        await prisma.strong.update({
            where: {
                StrongNumber: inputData.StrongNumber
            },
            data: {
                strong_WordRelation: {
                    connectOrCreate: {
                        where: {
                            StrongNumber_BHSwordSort: {
                                StrongNumber: inputData.StrongNumber,
                                BHSwordSort: Number(inputData.BHSwordSort)
                            }
                        },
                        create: {
                            BHSwordSort: Number(inputData.BHSwordSort)
                        }
                    }
                }
            }
        })
    }
    else {
        await prisma.strong.create({
            data: {
                StrongNumber: inputData.StrongNumber,
                strong_WordRelation: {
                    connectOrCreate: {
                        where: {
                            StrongNumber_BHSwordSort: {
                                StrongNumber: inputData.StrongNumber,
                                BHSwordSort: Number(inputData.BHSwordSort),
                            }
                        },
                        create: {
                            BHSwordSort: Number(inputData.BHSwordSort)
                        }
                    }
                }
            }
        })
    }
}

async function morphologyLookupPopulateMany(inputData: csvRow){
    const morphologyCodeSplit : string[] = inputData.morphologyCode.split('.')
    const morphologyDetailSplit: string[] = inputData.morphologyDetail.split(',')
    let array = []
    for (let i=0; i< morphologyCodeSplit.length; i++){
        array.push({
            morphologyCodeLookupVal: morphologyCodeSplit[i]!,
            morphologyDetail: morphologyDetailSplit[i]!,
        })
    }
    await prisma.morphologyLookup.createMany({
        data: [
            ...array
        ],
        skipDuplicates: true
    })
}

async function morphologyPopulateMany(inputData: csvRow){
    const morphologyCodeSplit : string[] = inputData.morphologyCode.split('.')
    let array = []
    for (let i=0; i< morphologyCodeSplit.length; i++){
        array.push({
            morphologyCode: morphologyCodeSplit[i]!,
        })
    }
    await prisma.morphology.createMany({
        data: [
            ...array
        ],
        skipDuplicates: true
    })
}

async function populateMorphology_WordMany(inputData: csvRow){
    const morphologyCodeSplit : string[] = inputData.morphologyCode.split('.')
    let array = []
    for (let i=0; i< morphologyCodeSplit.length; i++){
        array.push({
            BHSwordSort: Number(inputData.BHSwordSort),
            morphologyCode: morphologyCodeSplit[i]!,
        })
    await prisma.morphology_Word.createMany({
        data: [
            ...array
        ],
        skipDuplicates: true
    })
    }
}

async function populateBSB(inputData: csvRow){
    if(inputData.BSB){
        const existingBSB = await prisma.bSB.findUnique({
            where: {
                BSBsort: Number(inputData.BSBsort)
            }
        })
        if (existingBSB===null){
            await prisma.bSB.create({
                data: {
                    BSBsort: Number(inputData.BSBsort),
                    BSBtext: inputData.BSB,
                    BHSwordSort: Number(inputData.BHSwordSort),
                }
            })
        }
    }
}