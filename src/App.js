import "./App.css";
import mockImage from "./assets/mock-image.png";
import mockImage1 from "./assets/mock-image-1.png";
import Header from "./components/Header";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import useCharacters from "./hooks/use-characters";
import useCharacterStore from "./store/use-character-store";

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
  const { characters, setCharacters } = useCharacterStore();
  const { isLoading } = useCharacters((data) => {
    setCharacters(data.data.results);
  });

  return (
    <div className="max-w-[75rem] m-auto flex flex-col items-center gap-y-12">
      <Header header="Star wars character search" />
      <TextField
        id="search"
        label="Search characters"
        variant="standard"
        color="primary"
        InputLabelProps={{
          style: {
            color: "black",
          },
        }}
      />
      <Button variant="outlined" sx={{ ...buttonConfiguration }}>
        Search characters
      </Button>
      <div className="self-start">Showing 5 results of 10</div>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120, alignSelf: "start" }}
      >
        <InputLabel id="sortInput">Sort by</InputLabel>
        <Select id="sortSelect" value="" onChange={() => {}} label="sort">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>A-Z</MenuItem>
          <MenuItem value={20}>Z-A</MenuItem>
          <MenuItem value={30}>Female</MenuItem>
          <MenuItem value={30}>Male</MenuItem>
        </Select>
      </FormControl>
      <div className="flex gap-x-24 flex-wrap justify-start">
        {characters.map((character, index) => (
          <Box
            key={character.name}
            sx={{ width: "150px", textAlign: "center", marginBottom: "1rem" }}
          >
            <img
              src={index % 2 === 0 ? mockImage : mockImage1}
              alt="star wars logo"
            />
            <h2>{character.name}</h2>
          </Box>
        ))}
      </div>
      <Button variant="outlined" sx={{ ...buttonConfiguration }}>
        Load more
      </Button>
    </div>
  );
}

export default App;
