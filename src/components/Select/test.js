import React from "react";
// import { makeStyles } from "@mui/styles"; // Import makeStyles from @mui/styles

import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/system"; // Import Box from @mui/system
import OutlinedInput from "@mui/material/OutlinedInput";
import { makeStyles } from "@mui/styles";
import theme from "../../utils/theme";
import { Button } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    // margin: theme?.spacing(1),
    margin: 50,
    minWidth: 420,
    maxWidth: 600,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
}));

const names = ["Frontend", "Backend", "Database"];

export default function MultiSelectChip() {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-multiple-chip-label">Select</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </Box>
          )}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
        <Button variant="contained">shubham</Button>
      </FormControl>
    </div>
  );
}
