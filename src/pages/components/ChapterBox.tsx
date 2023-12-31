import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { api } from "~/utils/api";
import { range, trimID } from '../HelperFunctions/helperfunctions';


export default function ChapterBox({...props}) {
    const {data: maxNumbers} = api.bibleNav.getBookChapters.useQuery({bookNumber:props.bookNumber})
    
    return (
    <>
    {maxNumbers?
    <Autocomplete
      disablePortal
      id="Chapter"
      options={[...range(1, Number(JSON.stringify(maxNumbers._max.KJVchapter)))]}
      onInputChange={(event, value)=>{props.setChapterNumber(trimID(event.currentTarget.id, "Chapters-option-"))}}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Chapters" />}
    />
    :
    <Autocomplete
      disablePortal
      id="chapter"
      options={[{label: "1"}, {label: "2"}]}
      onInputChange={(event, value)=>{console.log(value)}}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Chapters" />}
    />
    }
    </>
  );
}
