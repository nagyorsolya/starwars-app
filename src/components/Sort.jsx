import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import orderBy from "../utils/order-by";
import { useQueryClient } from "@tanstack/react-query";

function Sort({ characters, setCharacters, setSortValue, sortValue }) {
  const queryClient = useQueryClient();
  return (
    <FormControl
      className="m-1 w-[7.5rem] self-center lg:self-start"
      variant="standard"
    >
      <InputLabel sx={{ color: "black" }} id="sortInput">
        Sort by
      </InputLabel>
      <Select
        id="sortSelect"
        value={sortValue}
        onChange={(e) => {
          if (e.target.value === "") {
            setSortValue("");
            queryClient.invalidateQueries("characters");
          } else {
            setSortValue(e.target.value);
            setCharacters(orderBy(e.target.value, characters));
          }
        }}
        label="sort"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"asc"}>A-Z</MenuItem>
        <MenuItem value={"desc"}>Z-A</MenuItem>
        <MenuItem value={"female"}>Female</MenuItem>
        <MenuItem value={"male"}>Male</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Sort;
