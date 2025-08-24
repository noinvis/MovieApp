import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";

interface iParams {
  query: string;
}
export const useSearch = () => {
  const getMovieBySearch = (params: iParams) =>
    useQuery({
      queryKey: ["search-key", params],
      queryFn: () =>
        api.get("/search/movie", { params }).then((res) => res.data),
    });
  return { getMovieBySearch };
};