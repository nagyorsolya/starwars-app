import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCharacterStore = create(
  persist(
    (set, get) => ({
      characters: [],
      setCharacters: (characters) => set({ characters }),
    }),
    { name: "characterStore" }
  )
);

export default useCharacterStore;
