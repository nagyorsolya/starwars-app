import "./App.css";
import Header from "./components/Header";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import useCharacters from "./hooks/use-characters";
import useCharacterStore from "./store/use-character-store";
import Characters from "./components/Characters";
import { useState } from "react";
import orderBy from "./utils/order-by";
import { useQueryClient } from "@tanstack/react-query";
import Search from "./components/Search";

const buttonConfiguration = {
  color: "black",
  borderColor: "black",
  ":hover": {
    color: "white",
    backgroundColor: "black",
    borderColor: "black",
  },
};

function App() {
  const PAGE_SIZE = 5;
  const [sortValue, setSortValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { characters, setCharacters } = useCharacterStore();
  let [pageNumber, setPageNumber] = useState(1);
  const [allResults, setAllResults] = useState(0);
  const queryClient = useQueryClient();
  const { isLoading } = useCharacters(
    (data) => {
      const nextIndex = pageNumber * PAGE_SIZE;
      if (nextIndex < data.data.results.length) {
        setCharacters(
          orderBy(sortValue, data.data.results.slice(0, nextIndex))
        );
      } else {
        setCharacters(orderBy(sortValue, data.data.results));
      }
      setAllResults(data.data.results.length);
    },
    searchValue,
    pageNumber
  );

  return (
    <div className="max-w-[75rem] m-auto flex flex-col items-center gap-y-12">
      <Header header="Star wars character search" />
      <Search
        buttonConfiguration={buttonConfiguration}
        setSearchValue={setSearchValue}
      />
      <div className="self-start">{`Showing ${
        characters.length ?? 0
      } results of ${allResults ?? 0}`}</div>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120, alignSelf: "start" }}
      >
        <InputLabel id="sortInput">Sort by</InputLabel>
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
      <Characters characters={characters} />
      <Button
        variant="outlined"
        sx={{ ...buttonConfiguration }}
        disabled={characters.length === allResults || isLoading}
        onClick={() => {
          setPageNumber(pageNumber + 1);
        }}
      >
        Load more
      </Button>
    </div>
  );
}

export default App;
