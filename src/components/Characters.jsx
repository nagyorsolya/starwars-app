import { Avatar } from "@mui/material";
import mockImage from "../assets/mock-image.png";
import mockImage1 from "../assets/mock-image-1.png";

function Characters({ characters }) {
  return (
    <div className="flex gap-x-24 flex-wrap justify-center">
      {characters.map((character, index) => (
        <div className="mb-2" key={character.name}>
          <Avatar
            key={character.name}
            sx={{
              width: "9.375rem",
              height: "9.375rem",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            <img
              src={index % 2 === 0 ? mockImage : mockImage1}
              alt="star wars logo"
            />
          </Avatar>
          <h2 className="text-center">{character.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Characters;
