import React from "react";

import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/system"; // Import Box from @mui/system
import OutlinedInput from "@mui/material/OutlinedInput";
import { Button } from "@mui/material";

const names = ["Frontend", "Backend", "Database"];

export default function MultiSelectChip() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div>
      <FormControl>
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
                <Chip key={value} label={value} />
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
