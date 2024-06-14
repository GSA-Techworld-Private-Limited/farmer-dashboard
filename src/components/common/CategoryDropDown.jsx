import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import MyContext from "../context/ContextStore";

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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function CategoryDropDown({ setProductData, productData }) {
  const { categories } = React.useContext(MyContext);
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    // setProductData((prev))
    setPersonName(
      // On autofill we get a stringified value.

      typeof value === "string" ? value.split(",") : value
    );
    const newValue = typeof value === "string" ? value.split(",") : value;
    setProductData((prev) => ({
      ...prev,
      categories_galleries: newValue,
    }));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: "100%", margin: 0 }}>
        <InputLabel id="demo-multiple-chip-label">Categories</InputLabel>
        <Select
          //   onChange={(val) => console.log(val)}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Categories" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    color: "#000",
                  }}
                  key={value}
                  label={value}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {categories &&
            categories.map((name) => (
              <MenuItem
                key={name.name}
                sx={{ fontFamily: "Poppins", fontSize: "12px", color: "#000" }}
                value={name.id}
                style={getStyles(name.name, personName, theme)}
              >
                {name.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
