import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useGlobalContext } from "../context/Context";

export default function BasicSelect() {
  const { region, setRegion } = useGlobalContext();
  const handleChange = (event) => {
    setRegion(event.target.value);
  };
  const regionName = [
    "South America",
    "Asia",
    "Europe",
    "Australia And New Zealand",
    "North America",
  ];

  return (
    <Box sx={{ maxWidth: "20rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Select Free Region
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={region}
          label="region"
          onChange={handleChange}
        >
          {regionName.map((val, ind) => (
            <MenuItem key={ind} value={val}>
              {val}
            </MenuItem>
          ))}
          {/* regionName.map((val,ind)=>(
            <MenuItem value={20}>Twenty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
