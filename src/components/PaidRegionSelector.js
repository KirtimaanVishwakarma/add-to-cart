import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useGlobalContext } from "../context/Context";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const paidRegionName = [
  "South America",
  "Asia",
  "Europe",
  "Australia And New Zealand",
  "North America",
];

function getStyles(name, paidRegion, theme) {
  return {
    fontWeight:
      paidRegion.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder() {
  const { paidRegion, setPaidRegion } = useGlobalContext();
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPaidRegion(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 0, width: 300 }}>
        <Select
          multiple
          displayEmpty
          value={paidRegion}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select Paid Region</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          sx={{ mb: 2 }}
        >
          <MenuItem disabled value="">
            <em>Select Paid Region</em>
          </MenuItem>
          {paidRegionName.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, paidRegion, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
