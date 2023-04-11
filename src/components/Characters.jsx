import { Box } from "@mui/material";
import mockImage from "../assets/mock-image.png";
import mockImage1 from "../assets/mock-image-1.png";

function Characters({ characters }) {
  return (
    <div className="flex gap-x-24 flex-wrap lg:justify-start justify-center">
      {characters.length
        ? characters.map((character, index) => (
            <div className="mb-2" key={character.name}>
              <Box
                className="flex flex-col items-center justify-between"
                key={character.name}
                sx={{
                  boxShadow: 20,
                  width: "10.625rem",
                  height: "16.875rem",
                  textAlign: "center",
                  backgroundColor: "white",
                  borderTopRightRadius: "1.875rem",
                  borderTopLeftRadius: "1.875rem",
                  paddingTop: "1.875rem",
                  border: "2px solid",
                }}
              >
                <img
                  src={index % 2 === 0 ? mockImage : mockImage1}
                  alt="star wars logo"
                />
                <h2 className="text-center">{character.name}</h2>
              </Box>
            </div>
          ))
        : "No results to show"}
    </div>
  );
}

export default Characters;
