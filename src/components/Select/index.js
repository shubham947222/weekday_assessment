import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import CloseIcon from "@mui/icons-material/Close";

function SelectComponent({
  names,
  label,
  jobList,
  setJobList,
  fetchMoreData,
  page,
  filterName,
  setfilterName,
}) {
  // const [filterName, setfilterName] = useState([]);
  // console.log(filterName, "filterName");
  // useEffect(() => {
  //   // jobList.filter(each);
  //   if (filterName.length === 0) {
  //     return;
  //   }

  //   switch (label) {
  //     case "Roles":
  //       setJobList(
  //         jobList?.filter((each) => filterName?.includes(each.jobRole))
  //       );
  //       break;
  //     case "Experience":
  //       setJobList(
  //         jobList?.filter((each) => filterName?.includes(each.minExp))
  //       );
  //       break;

  //     case "Experience":
  //       setJobList(
  //         jobList?.filter((each) => filterName?.includes(each.minExp))
  //       );
  //       break;

  //     default:
  //       break;
  //   }
  // }, [filterName]);
  const ITEM_HEIGHT = 40;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 150,
      },
    },
  };
  const handleChange = (event) => {
    if (filterName[event.target.name]) {
      setfilterName({
        ...filterName,
        [event.target.name]: [...event.target.value],
      });
    } else {
      setfilterName({
        ...filterName,
        [event.target.name]: [...event.target.value],
      });
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1 }}>
        <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          name={label}
          margin="dense"
          sx={{ width: 206 }}
          value={filterName[label] ?? []}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected?.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  sx={{ borderRadius: 2, height: 1 }}
                  onDelete={(event) => "handleDelete(event, value)"}
                  deleteIcon={<CloseIcon className={"classes.deleteIcon"} />}
                />
              ))}
            </Box>
          )}

          // MenuProps={MenuProps}
        >
          {names?.map((name) => (
            <MenuItem
              key={name}
              value={name}
              //   style={getStyles(name, filterName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectComponent;
