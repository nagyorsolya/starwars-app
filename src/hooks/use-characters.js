import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useCharacters(onSuccess, searchParams, pageNumber) {
  return useQuery({
    queryKey: ["characters", searchParams, pageNumber],
    queryFn: () =>
      axios.get(
        `https://swapi.dev/api/people/${
          searchParams ? "?search=" + searchParams : ""
        }`
      ),
    onError: (err) => alert(err.message),
    onSuccess,
  });
}

export default useCharacters;
