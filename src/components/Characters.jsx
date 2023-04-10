import { Box } from "@mui/material";
import mockImage from "../assets/mock-image.png";
import mockImage1 from "../assets/mock-image-1.png";

function Characters({ characters }) {
  return (
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
  );
}

export default Characters;
