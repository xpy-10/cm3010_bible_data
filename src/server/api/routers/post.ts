import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { BSB } from "@prisma/client";
import { Sql } from "@prisma/client/runtime/library";

// get types for custom sql

export const bibleNavRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
    
  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.bSB.findMany({
      where:{
        BSBsort: {lt: 100}
      },
    });
  }),

  getBookChapters:  publicProcedure
    .input(z.object( { bookNumber: z.number() }))
    .query(async ({ ctx, input }) => {
    let maxChapterAndVerse =  await ctx.db.kJVlocation.aggregate({
      where: {
        KJVbook: Number(input.bookNumber),
      },
      _max: {
        KJVchapter: true,
      }
    })
    return maxChapterAndVerse
  }),

  getChapterVerses:  publicProcedure
    .input(z.object( { bookNumber: z.string(), chapterNumber: z.string() }))
    .query(async ({ ctx, input }) => {
    let maxVerse =  await ctx.db.kJVlocation.aggregate({
      where: {
        KJVbook: Number(input.bookNumber),
        KJVchapter: Number(input.chapterNumber),
      },
      _max: {
        KJVverse: true,
      }
    })
    return maxVerse
  }),

  getVerseText: publicProcedure
    .input(z.object( {  bookNumber: z.string(), 
                        chapterNumber: z.string(), 
                        verseNumber: z.string(),
                        wordOrder: z.boolean(),
                        fullChapter: z.boolean(),
                        hebrew: z.boolean(),
                      }))
    .query(async ({ctx, input}) =>{
      let result
      if(input.hebrew){ // word order is not going to be evaluated out of the three toggable options when Hebrew is selected
        if(input.fullChapter){
          result = await ctx.db.$queryRaw `SELECT BHSwordPointed FROM Script WHERE BHSwordPointed IN (SELECT BHSwordPointed FROM Word WHERE KJVverseSort IN (SELECT KJVverseSort FROM KJVlocation WHERE KJVbook=${input.bookNumber} AND KJVchapter=${input.chapterNumber}));`
        }
        else{
          result = await ctx.db.$queryRaw `SELECT BHSwordPointed FROM Script WHERE BHSwordPointed IN (SELECT BHSwordPointed FROM Word WHERE KJVverseSort IN (SELECT KJVverseSort FROM KJVlocation WHERE KJVbook=${input.bookNumber} AND KJVchapter=${input.chapterNumber} AND KJVverse=${input.verseNumber}));`
        }
      }
      else {
        if(!input.wordOrder){
          if(!input.fullChapter){
            result = await ctx.db.$queryRaw `SELECT BSBtext FROM BSB WHERE BHSwordSort IN (SELECT BHSwordSort FROM Word WHERE KJVverseSort=(SELECT KJVverseSort FROM KJVlocation WHERE KJVbook=${input.bookNumber} AND KJVchapter=${input.chapterNumber} AND KJVverse=${input.verseNumber})) ORDER BY BSBsort;`
          }
          else {
            result = await ctx.db.$queryRaw `SELECT BSBtext FROM BSB WHERE BHSwordSort IN (SELECT BHSwordSort FROM Word WHERE KJVverseSort IN (SELECT KJVverseSort FROM KJVlocation WHERE KJVbook=${input.bookNumber} AND KJVchapter=${input.chapterNumber})) ORDER BY BSBsort;`
          }
        }
        else {
          if(!input.fullChapter){
            result = await ctx.db.$queryRaw `SELECT BSBtext FROM BSB WHERE BHSwordSort IN (SELECT BHSwordSort FROM Word WHERE KJVverseSort=(SELECT KJVverseSort FROM KJVlocation WHERE KJVbook=${input.bookNumber} AND KJVchapter=${input.chapterNumber} AND KJVverse=${input.verseNumber}));`
          }
          else {
            result = await ctx.db.$queryRaw `SELECT BSBtext FROM BSB WHERE BHSwordSort IN (SELECT BHSwordSort FROM Word WHERE KJVverseSort IN (SELECT KJVverseSort FROM KJVlocation WHERE KJVbook=${input.bookNumber} AND KJVchapter=${input.chapterNumber}));`
          }
        }
      }
      return result
    })
});


