import * as models from '@prisma/client'

export interface wordModel extends models.Word{}
export interface bHSlocationModel extends models.BHSlocation{}
export interface kJVlocationModel extends models.KJVlocation{}
export interface morphologyLookupModel extends models.MorphologyLookup{}
export interface morphologyModel extends models.Morphology{}
export interface morphology_WordModel extends models.Morphology_Word{}
export interface clauseModel extends models.Clause{}
export interface clauseTypeLookupModel extends models.ClauseTypeLookup{}
export interface speechModel extends models.Speech{}
export interface scriptModel extends models.Script{}
export interface lexemeModel extends models.Lexeme{}
export interface bSBModel extends models.BSB{}
export enum Language{}
