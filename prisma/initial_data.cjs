"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var csv = require('csv-parser');
var fs = require('fs');
var library_1 = require("@prisma/client/runtime/library");
var prisma = new client_1.PrismaClient();
// create an array of the string values for the csv part files
var file_parts = [];
for (var i = 0; i < 86; i++) {
    file_parts.push("../data/data_part_" + String(i + 1) + '.csv');
}
// define the function to read the files and call createWord, which populates database
function populateDatabase(fileName) {
    fs.createReadStream(fileName)
        .pipe(csv())
        .on('data', function (data) {
        createWord(data);
    })
        .on('end', function () {
        console.log('read records successfully');
    });
}
// iterate through the file_parts array to read each file and populate database with a timed delay
for (var i = 0; i < file_parts.length; i++) {
    if (i < 2) {
        setTimeout(populateDatabase, 3000, file_parts[i]);
    }
    else {
        setTimeout(populateDatabase, 60000, file_parts[i]);
    }
}
function createWord(inputData) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1, error2, error_2, error2, error_3, error2, error_4, error2, error_5, error2, error_6, error2, error_7, error2, error_8, error2, error_9, error2, error_10, error2, error_11, error2, error_12, error2, error_13, error2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, kJVlocationPopulate(inputData)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    if (error_1 instanceof library_1.PrismaClientKnownRequestError) {
                        error2 = error_1;
                        if (error2.code == 'P2002') {
                            console.log("error for 2002 encountered");
                        }
                    }
                    else {
                        console.log(error_1);
                    }
                    return [3 /*break*/, 3];
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, bHSlocationPopulate(inputData)];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    if (error_2 instanceof library_1.PrismaClientKnownRequestError) {
                        error2 = error_2;
                        if (error2.code == 'P2002') {
                            console.log("error for 2002 encountered");
                        }
                    }
                    else {
                        console.log(error_2);
                    }
                    return [3 /*break*/, 6];
                case 6:
                    _a.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, lexemePopulate(inputData)];
                case 7:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 8:
                    error_3 = _a.sent();
                    if (error_3 instanceof library_1.PrismaClientKnownRequestError) {
                        error2 = error_3;
                        if (error2.code == 'P2002') {
                            console.log("error for 2002 encountered");
                        }
                    }
                    else {
                        console.log(error_3);
                    }
                    return [3 /*break*/, 9];
                case 9:
                    _a.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, scriptPopulate(inputData)];
                case 10:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 11:
                    error_4 = _a.sent();
                    if (error_4 instanceof library_1.PrismaClientKnownRequestError) {
                        error2 = error_4;
                        if (error2.code == 'P2002') {
                            console.log("error for 2002 encountered");
                        }
                    }
                    else {
                        console.log(error_4);
                    }
                    return [3 /*break*/, 12];
                case 12:
                    _a.trys.push([12, 14, , 15]);
                    return [4 /*yield*/, speechPopulate(inputData)];
                case 13:
                    _a.sent();
                    return [3 /*break*/, 15];
                case 14:
                    error_5 = _a.sent();
                    if (error_5 instanceof library_1.PrismaClientKnownRequestError) {
                        error2 = error_5;
                        if (error2.code == 'P2002') {
                            console.log("error for 2002 encountered");
                        }
                    }
                    else {
                        console.log(error_5);
                    }
                    return [3 /*break*/, 15];
                case 15:
                    _a.trys.push([15, 17, , 18]);
                    return [4 /*yield*/, clauseLookupPopulate(inputData)];
                case 16:
                    _a.sent();
                    return [3 /*break*/, 18];
                case 17:
                    error_6 = _a.sent();
                    if (error_6 instanceof library_1.PrismaClientKnownRequestError) {
                        error2 = error_6;
                        if (error2.code == 'P2002') {
                            console.log("error for 2002 encountered");
                        }
                    }
                    else {
                        console.log(error_6);
                    }
                    return [3 /*break*/, 18];
                case 18:
                    _a.trys.push([18, 20, , 21]);
                    return [4 /*yield*/, clausePopulate(inputData)];
                case 19:
                    _a.sent();
                    return [3 /*break*/, 21];
                case 20:
                    error_7 = _a.sent();
                    if (error_7 instanceof library_1.PrismaClientKnownRequestError) {
                        error2 = error_7;
                        if (error2.code == 'P2002') {
                            console.log("error for 2002 encountered");
                        }
                    }
                    else {
                        console.log(error_7);
                    }
                    return [3 /*break*/, 21];
                case 21:
                    _a.trys.push([21, 23, , 24]);
                    return [4 /*yield*/, wordPopulate(inputData)];
                case 22:
                    _a.sent();
                    return [3 /*break*/, 24];
                case 23:
                    error_8 = _a.sent();
                    if (error_8 instanceof library_1.PrismaClientKnownRequestError) {
                        error2 = error_8;
                        if (error2.code == 'P2002') {
                            console.log("error for 2002 encountered");
                        }
                    }
                    else {
                        console.log(error_8);
                    }
                    console.log(error_8);
                    return [3 /*break*/, 24];
                case 24:
                    _a.trys.push([24, 26, , 27]);
                    return [4 /*yield*/, strongPopulate(inputData)];
                case 25:
                    _a.sent();
                    return [3 /*break*/, 27];
                case 26:
                    error_9 = _a.sent();
                    if (error_9 instanceof library_1.PrismaClientKnownRequestError) {
                        error2 = error_9;
                        if (error2.code == 'P2002') {
                            console.log("error for 2002 encountered");
                        }
                    }
                    else {
                        console.log(error_9);
                    }
                    console.log(error_9);
                    return [3 /*break*/, 27];
                case 27:
                    _a.trys.push([27, 29, , 30]);
                    return [4 /*yield*/, morphologyLookupPopulateMany(inputData)];
                case 28:
                    _a.sent();
                    return [3 /*break*/, 30];
                case 29:
                    error_10 = _a.sent();
                    if (error_10 instanceof library_1.PrismaClientKnownRequestError) {
                        error2 = error_10;
                        if (error2.code == 'P2002') {
                            console.log("error for 2002 encountered");
                        }
                    }
                    else {
                        console.log(error_10);
                    }
                    return [3 /*break*/, 30];
                case 30:
                    _a.trys.push([30, 32, , 33]);
                    return [4 /*yield*/, morphologyPopulateMany(inputData)];
                case 31:
                    _a.sent();
                    return [3 /*break*/, 33];
                case 32:
                    error_11 = _a.sent();
                    if (error_11 instanceof library_1.PrismaClientKnownRequestError) {
                        error2 = error_11;
                        if (error2.code == 'P2002') {
                            console.log("error for 2002 encountered");
                        }
                    }
                    else {
                        console.log(error_11);
                    }
                    return [3 /*break*/, 33];
                case 33:
                    _a.trys.push([33, 35, , 36]);
                    return [4 /*yield*/, populateMorphology_WordMany(inputData)];
                case 34:
                    _a.sent();
                    return [3 /*break*/, 36];
                case 35:
                    error_12 = _a.sent();
                    if (error_12 instanceof library_1.PrismaClientKnownRequestError) {
                        error2 = error_12;
                        if (error2.code == 'P2002') {
                            console.log("error for 2002 encountered");
                        }
                    }
                    else {
                        console.log(error_12);
                    }
                    return [3 /*break*/, 36];
                case 36:
                    _a.trys.push([36, 38, 39, 41]);
                    return [4 /*yield*/, populateBSB(inputData)];
                case 37:
                    _a.sent();
                    return [3 /*break*/, 41];
                case 38:
                    error_13 = _a.sent();
                    if (error_13 instanceof library_1.PrismaClientKnownRequestError) {
                        error2 = error_13;
                        if (error2.code == 'P2002') {
                            console.log("error for 2002 encountered");
                        }
                    }
                    else {
                        console.log(error_13);
                    }
                    return [3 /*break*/, 41];
                case 39: return [4 /*yield*/, prisma.$disconnect()];
                case 40:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 41: return [2 /*return*/];
            }
        });
    });
}
// handle errors
function handleError(error, inputData, callback) {
    if (error instanceof library_1.PrismaClientKnownRequestError) {
        var error2 = error;
        if (error2.code == 'P2002') {
            console.log("error for 2002 encountered");
        }
    }
    else {
        console.log(error);
    }
}
// helper functions
function kJVlocationPopulate(inputData) {
    return __awaiter(this, void 0, void 0, function () {
        var existingKJVlocation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.kJVlocation.findUnique({
                        where: {
                            KJVverseSort: Number(inputData.KJVverseSort),
                        }
                    })];
                case 1:
                    existingKJVlocation = _a.sent();
                    if (!(existingKJVlocation === null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, prisma.kJVlocation.create({
                            data: {
                                KJVverseSort: Number(inputData.KJVverseSort),
                                KJVbook: Number(inputData.KJVbook),
                                KJVchapter: Number(inputData.KJVchapter),
                                KJVverse: Number(inputData.KJVverse),
                            }
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function bHSlocationPopulate(inputData) {
    return __awaiter(this, void 0, void 0, function () {
        var existingBHSlocation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.bHSlocation.findUnique({
                        where: {
                            BHSverseSort: Number(inputData.BHSverseSort),
                        }
                    })];
                case 1:
                    existingBHSlocation = _a.sent();
                    if (!(existingBHSlocation === null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, prisma.bHSlocation.create({
                            data: {
                                BHSverseSort: Number(inputData.BHSverseSort),
                                BHSbook: Number(inputData.BHSbook),
                                BHSchapter: Number(inputData.BHSchapter),
                                BHSverse: Number(inputData.BHSverse),
                            }
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function lexemePopulate(inputData) {
    return __awaiter(this, void 0, void 0, function () {
        var existingLexeme;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.lexeme.findUnique({
                        where: {
                            LexemeId: inputData.lexemeID
                        }
                    })];
                case 1:
                    existingLexeme = _a.sent();
                    if (!(existingLexeme === null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, prisma.lexeme.create({
                            data: {
                                LexemeId: inputData.lexemeID,
                                HebrewLexeme: inputData.HebrewLexeme,
                            }
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function speechPopulate(inputData) {
    return __awaiter(this, void 0, void 0, function () {
        var existingSpeech;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!inputData.poneticTranscription) return [3 /*break*/, 3];
                    return [4 /*yield*/, prisma.speech.findUnique({
                            where: {
                                phoneticTranscription: inputData.poneticTranscription
                            }
                        })];
                case 1:
                    existingSpeech = _a.sent();
                    if (!(existingSpeech === null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, prisma.speech.create({
                            data: {
                                phoneticTranscription: inputData.poneticTranscription,
                                SBLstyleTransliteration: inputData.SBLstyleTransliteration,
                            }
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function scriptPopulate(inputData) {
    return __awaiter(this, void 0, void 0, function () {
        var existingScript;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.script.findUnique({
                        where: {
                            BHSwordPointed: inputData.BHSwordPointed
                        }
                    })];
                case 1:
                    existingScript = _a.sent();
                    if (!(existingScript === null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, prisma.script.create({
                            data: {
                                BHSwordPointed: inputData.BHSwordPointed,
                                BHSwordConsonantal: inputData.BHSwordConsonantal,
                            }
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function clauseLookupPopulate(inputData) {
    return __awaiter(this, void 0, void 0, function () {
        var existingClauseTypeLookup;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.clauseTypeLookup.findUnique({
                        where: {
                            clauseType: inputData.clauseType,
                        }
                    })];
                case 1:
                    existingClauseTypeLookup = _a.sent();
                    if (!(existingClauseTypeLookup === null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, prisma.clauseTypeLookup.create({
                            data: {
                                clauseType: inputData.clauseType,
                                clauseKind: inputData.clauseKind,
                            }
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function clausePopulate(inputData) {
    return __awaiter(this, void 0, void 0, function () {
        var existingClause;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.clause.findUnique({
                        where: {
                            clauseId: inputData.clauseID
                        }
                    })];
                case 1:
                    existingClause = _a.sent();
                    if (!(existingClause === null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, prisma.clause.create({
                            data: {
                                clauseId: inputData.clauseID,
                                clauseType: inputData.clauseType,
                            }
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function wordPopulate(inputData) {
    return __awaiter(this, void 0, void 0, function () {
        var existingWord;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.word.findUnique({
                        where: {
                            BHSwordSort: Number(inputData.BHSwordSort)
                        }
                    })];
                case 1:
                    existingWord = _a.sent();
                    if (!(existingWord === null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, prisma.word.create({
                            data: {
                                BHSwordSort: Number(inputData.BHSwordSort),
                                paragraphMarker: inputData.paragraphMarker ? inputData.paragraphMarker : undefined,
                                poetryMarker: inputData.poetryMarker ? inputData.poetryMarker : undefined,
                                ETCBCgloss: inputData.ETCBCgloss,
                                extendedGloss: inputData.extendedGloss,
                                extendedStrongNumber: inputData.extendedStrongNumber,
                                language: inputData.language == "HEBREW" ? "HEBREW" : "ARAMAIC",
                                KJVverseSort: Number(inputData.KJVverseSort),
                                BHSverseSort: Number(inputData.BHSverseSort),
                                BHSwordPointed: inputData.BHSwordPointed,
                                phoneticTranscription: inputData.poneticTranscription ? inputData.poneticTranscription : undefined,
                                clauseId: inputData.clauseID,
                                lexemeId: inputData.lexemeID,
                            }
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function strongPopulate(inputData) {
    return __awaiter(this, void 0, void 0, function () {
        var existingStrong;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.strong.findUnique({
                        where: {
                            StrongNumber: inputData.StrongNumber,
                        }
                    })];
                case 1:
                    existingStrong = _a.sent();
                    if (!existingStrong) return [3 /*break*/, 3];
                    return [4 /*yield*/, prisma.strong.update({
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
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, prisma.strong.create({
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
                    })];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
function morphologyLookupPopulateMany(inputData) {
    return __awaiter(this, void 0, void 0, function () {
        var morphologyCodeSplit, morphologyDetailSplit, array, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    morphologyCodeSplit = inputData.morphologyCode.split('.');
                    morphologyDetailSplit = inputData.morphologyDetail.split(',');
                    array = [];
                    for (i = 0; i < morphologyCodeSplit.length; i++) {
                        array.push({
                            morphologyCodeLookupVal: morphologyCodeSplit[i],
                            morphologyDetail: morphologyDetailSplit[i],
                        });
                    }
                    return [4 /*yield*/, prisma.morphologyLookup.createMany({
                            data: __spreadArray([], array, true),
                            skipDuplicates: true
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function morphologyPopulateMany(inputData) {
    return __awaiter(this, void 0, void 0, function () {
        var morphologyCodeSplit, array, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    morphologyCodeSplit = inputData.morphologyCode.split('.');
                    array = [];
                    for (i = 0; i < morphologyCodeSplit.length; i++) {
                        array.push({
                            morphologyCode: morphologyCodeSplit[i],
                        });
                    }
                    return [4 /*yield*/, prisma.morphology.createMany({
                            data: __spreadArray([], array, true),
                            skipDuplicates: true
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function populateMorphology_WordMany(inputData) {
    return __awaiter(this, void 0, void 0, function () {
        var morphologyCodeSplit, array, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    morphologyCodeSplit = inputData.morphologyCode.split('.');
                    array = [];
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < morphologyCodeSplit.length)) return [3 /*break*/, 4];
                    array.push({
                        BHSwordSort: Number(inputData.BHSwordSort),
                        morphologyCode: morphologyCodeSplit[i],
                    });
                    return [4 /*yield*/, prisma.morphology_Word.createMany({
                            data: __spreadArray([], array, true),
                            skipDuplicates: true
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function populateBSB(inputData) {
    return __awaiter(this, void 0, void 0, function () {
        var existingBSB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!inputData.BSB) return [3 /*break*/, 3];
                    return [4 /*yield*/, prisma.bSB.findUnique({
                            where: {
                                BSBsort: Number(inputData.BSBsort)
                            }
                        })];
                case 1:
                    existingBSB = _a.sent();
                    if (!(existingBSB === null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, prisma.bSB.create({
                            data: {
                                BSBsort: Number(inputData.BSBsort),
                                BSBtext: inputData.BSB,
                                BHSwordSort: Number(inputData.BHSwordSort),
                            }
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
