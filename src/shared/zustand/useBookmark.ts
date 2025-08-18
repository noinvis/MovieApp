import { create } from "zustand";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  popularity: number;
}

interface IBookmark {
  bookmark: Movie[];
  toggleBookmark: (payload: Movie) => void;
}

export const useBookmark = create<IBookmark>((set) => ({
  bookmark: JSON.parse(localStorage.getItem("bookmark") || "[]"),

  toggleBookmark: (payload) =>
    set((state) => {
      const exist = state.bookmark.some((item) => item.id === payload.id);
      let store: Movie[];
      if (exist) {
        store = state.bookmark.filter((item) => item.id !== payload.id);
      } else {
        store = [...state.bookmark, payload];
      }
      localStorage.setItem("bookmark", JSON.stringify(store));
      return { bookmark: store };
    }),
}));
