import { api } from "~/utils/api";
import BookBox from "./components/BookBox";
import ChapterBox from "./components/ChapterBox";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import VerseBox from "./components/VerseBox";
import TextRender from "./components/text";
import SwitchesGroup from "./components/options";

export default function Home() {
  const [bookNumber, setBookNumber] = useState(1)
  const [chapterNumber, setChapterNumber] = useState(1)
  const [verseNumber, setVerseNumber] = useState(1)
  const [wordOrder, setWordOrder] = useState(false) // set original word order
  const [fullChapter, setFullChapter] = useState(true) // get full chapter text
  const [hebrew, setHebrew] = useState(false) // require Hebrew


  return (
    <>
    <div className="p-12 flex align-middle bg-yellow-300">
      <BookBox bookNumber={bookNumber} setBookNumber={setBookNumber}></BookBox>
      <ChapterBox bookNumber={bookNumber} setChapterNumber={setChapterNumber}></ChapterBox>         
      <VerseBox bookNumber={bookNumber} chapterNumber={chapterNumber} setVerseNumber={setVerseNumber}></VerseBox>
    </div>
    <div className="p-5 flex  flex-wrap align-middle bg-slate-100">
      <TextRender bookNumber={bookNumber} chapterNumber={chapterNumber} verseNumber={verseNumber} wordOrder={wordOrder} fullChapter={fullChapter} hebrew={hebrew}></TextRender>
    </div>
    <div className="p-5 bg-slate-300">
      <SwitchesGroup setWordOrder={setWordOrder} wordOrder={wordOrder} setFullChapter={setFullChapter} fullChapter={fullChapter} setHebrew={setHebrew} hebrew={hebrew}></SwitchesGroup>
    </div>
    </>
  );
}
