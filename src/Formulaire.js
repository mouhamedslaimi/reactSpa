import React, { Component } from "react";
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { Select,MenuItem,Button } from '@material-ui/core';

class Formulaire extends Component {
render() {
return (
<div>
    <h1>Formulaire</h1>
<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-input">Name</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">Your name.</FormHelperText>
</FormControl>
<div>
<FormControl>
    Check
<Checkbox
  value="checkedA"
  inputProps={{ 'aria-label': 'Checkbox A' }}
/>
</FormControl>
<InputLabel id="label">Age</InputLabel>
<Select labelId="label" id="select" value="20">
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</Select>
</div>
<br></br>
<Button variant="contained" color="secondary">
  Secondary
</Button>
</div>
);
}
}
export default Formulaire;