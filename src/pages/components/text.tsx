import { api } from "~/utils/api";
import { Typography } from "@mui/material";

// function to remove the <heb></heb> tags surrounding text
const filterCharacters = function(stringEntry:string):string{
    if (stringEntry.length>5){
        stringEntry = stringEntry.substring(5,)
        let stringEntry1 = stringEntry.substring(0, stringEntry.indexOf('<'))
        let stringEntry2 = stringEntry.substring(stringEntry1.length+11, stringEntry.lastIndexOf('<'))
        stringEntry = stringEntry1 + stringEntry2
    }
    return stringEntry
}

export default function TextRender({...props}) {

    let {data: returnedText} = api.bibleNav.getVerseText.useQuery(
        {bookNumber:String(props.bookNumber), 
        chapterNumber:String(props.chapterNumber), 
        verseNumber:String(props.verseNumber),
        wordOrder:props.wordOrder,
        fullChapter: props.fullChapter,
        hebrew: props.hebrew,
        })
    if (returnedText){
        let array = [{BSBtext:String}]
        for (const [key, value] of Object.entries(returnedText)){
            array.push(
                value
            )
        }
        return (<>{
            array.map((value, index)=>{
                return <Typography className="m-1">
                    {value.BSBtext? value.BSBtext: filterCharacters(value.BHSwordPointed)}
                </Typography>
            })
        }</>)
    }
    return (
    <>
    </>
)

}