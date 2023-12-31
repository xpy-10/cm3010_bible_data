import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';

export default function SwitchesGroup({...props}) {
    const [, updateState] = React.useState();

  const handleChangeWordOrder = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setWordOrder(!props.wordOrder)
  }
  const handleShowFullChapter = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setFullChapter(!props.fullChapter)
  }

  const handleHebrewToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setHebrew(!props.hebrew)
    props.setWordOrder(!props.wordOrder)
  }

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Options</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch disabled={props.hebrew?true:false} checked={props.wordOrder} onChange={handleChangeWordOrder} name="gilad" />
          }
          label="Original Word Order"
        />
        <FormControlLabel
          control={
            <Switch checked={props.fullChapter} onChange={handleShowFullChapter} name="jason" />
          }
          label="Show full chapter"
        />
        <FormControlLabel
          control={
            <Switch checked={props.hebrew} onChange={handleHebrewToggle} name="antoine" />
          }
          label="Original Hebrew"
        />
      </FormGroup>
      <FormHelperText>Adjust your settings</FormHelperText>
    </FormControl>
  );
}
