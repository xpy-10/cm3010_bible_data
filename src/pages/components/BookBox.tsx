import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { number } from 'zod';
import { trimID } from '../HelperFunctions/helperfunctions';


export default function BookBox({...props}) {
  return (
    <Autocomplete
      disablePortal
      id="Book"
      options={bibleBooks}
      onInputChange={(event)=>{props.setBookNumber(trimID(event.currentTarget.id, "Books-option-"))}}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Book" />}
    />
  );
}

const bibleBooks = [
    {label: 'Genesis', id:1},
    {label: 'Exodus', id:2},
    {label: 'Leviticus', id:3},
    {label: 'Numbers', id:4},
    {label: 'Deuteronomy', id:5},
    {label: 'Joshua', id:6},
    {label: 'Judges', id:7},
    {label: 'Ruth', id:8},
    {label: '1 Samuel', id:9},
    {label: '2 Samuel', id:10},
    {label: '1 Kings', id:11},
    {label: '2 Kings', id:12},
    {label: '1 Chronicles', id:13},
    {label: '2 Chronicles', id:14},
    {label: 'Ezra', id:15},
    {label: 'Nehemiah', id:16},
    {label: 'Esther', id:17},
    {label: 'Job', id:18},
    {label: 'Psalms', id:19},
    {label: 'Proverbs', id:20},
    {label: 'Ecclesiastes', id:21},
    {label: 'Song of Solomon', id:22},
    {label: 'Isaiah', id:23},
    {label: 'Jeremiah', id:24},
    {label: 'Lamentations', id:25},
    {label: 'Ezekiel', id:26},
    {label: 'Daniel', id:27},
    {label: 'Hosea', id:28},
    {label: 'Joel', id:29},
    {label: 'Amos', id:30},
    {label: 'Obadiah', id:31},
    {label: 'Jonah', id:32},
    {label: 'Micah', id:33},
    {label: 'Nahum', id:34},
    {label: 'Habakkuk', id:35},
    {label: 'Zephaniah', id:36},
    {label: 'Haggai', id:37},
    {label: 'Zechariah', id:38},
    {label: 'Malachi', id:39},
]