import { Input } from "antd";
import { useLayoutEffect, useState } from "react";
import { useSearch } from "../service/useSearch";
import MovieView from "../../movies/components/movie-view/MovieView";
import useDebounce from "../../../shared/hooks/useDebounce";

const Search = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1000);

  const { getMovieBySearch } = useSearch();
  const { data, isLoading } = getMovieBySearch({ query: debouncedValue });

  useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="container">
      <div className="flex justify-center py-[30px]">
        <Input
          size="large"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search..."
        />
      </div>

      <div>
        {debouncedValue.trim() === "" ? (
          <div className="flex justify-center items-center h-[55vh]">
            <h1 className="text-[#999] text-center">
              Start typing to search...
            </h1>
          </div>
        ) : isLoading ? (
          <div className="h-[55vh] flex justify-center items-center">
            <div className="loader"></div>
          </div>
        ) : data?.results?.length === 0 ? (
          <div className="flex justify-center items-center h-[55vh]">
            <h1 className="text-[#999] text-center">
              Nothing found for “{debouncedValue}”
            </h1>
          </div>
        ) : (
          <MovieView data={data?.results} />
        )}
      </div>
    </div>
  );
};

export default Search;
