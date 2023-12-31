import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { api } from "~/utils/api";
import { range, trimID } from '../HelperFunctions/helperfunctions';


// type VerseBoxProps = {
//   bookNumber: number
//   chapterNumber: number
//   setVerseNumber: React.Dispatch<React.SetStateAction<number>>
// }

export default function VerseBox({...props}) {
    const {data: maxNumbers} = api.bibleNav.getBookChapters.useQuery({bookNumber:props.bookNumber})
    
    return (
    <>
    {maxNumbers?
    <Autocomplete
      disablePortal
      id="Verse"
      options={[...range(1, Number(JSON.stringify(maxNumbers._max.KJVchapter)))]}
      onInputChange={(event, value)=>{props.setVerseNumber(trimID(event.currentTarget.id, "Verses-option-"))}}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Verses" />}
    />
    :
    <Autocomplete
      disablePortal
      id="chapter"
      options={[{label: "1"}, {label: "2"}]}
      onInputChange={(event, value)=>{console.log(value)}}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Verses" />}
    />
    }
    </>
  );
}