import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useCharacters(onSuccess) {
  return useQuery({
    queryKey: ["characters"],
    queryFn: () => axios.get("https://swapi.dev/api/people/"),
    onError: (err) => console.log(err),
    onSuccess,
  });
}

export default useCharacters;
