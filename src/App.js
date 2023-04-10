import Header from "./components/Header";
import { Button } from "@mui/material";
import useCharacters from "./hooks/use-characters";
import useCharacterStore from "./store/use-character-store";
import Characters from "./components/Characters";
import { useState } from "react";
import orderBy from "./utils/order-by";
import Search from "./components/Search";
import Sort from "./components/Sort";

const buttonConfiguration = {
  color: "black",
  borderColor: "black",
  marginBottom: "1rem",
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
    <div className="w-full min-h-screen bg-gradient-to-r from-red-600 to-red-950 overscroll-none">
      <div
        className={
          "lg:max-w-[75rem] m-auto flex flex-col items-center gap-y-12"
        }
      >
        <Header header="Star wars character search" />
        <Search
          buttonConfiguration={buttonConfiguration}
          setSearchValue={setSearchValue}
        />
        <div className="self-center lg:self-start lg:text-2xl text-xl">{`Showing ${
          characters.length ?? 0
        } results of ${allResults ?? 0}`}</div>
        <Sort
          characters={characters}
          setCharacters={setCharacters}
          setSortValue={setSortValue}
          sortValue={sortValue}
        />
        <Characters characters={characters} />
        <Button
          variant="outlined"
          sx={buttonConfiguration}
          disabled={characters.length === allResults || isLoading}
          onClick={() => {
            setPageNumber(pageNumber + 1);
          }}
        >
          Load more
        </Button>
      </div>
    </div>
  );
}

export default App;
