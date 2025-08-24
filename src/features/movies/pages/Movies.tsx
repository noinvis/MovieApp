import { memo } from "react";
import MovieView from "../components/movie-view/MovieView";
import { useMovie } from "../../movies/service/useMovie";
import { Pagination, Select } from "antd";
import { useSearchParams } from "react-router-dom";
import { useGenre } from "../service/useGenre";

interface GenreData {
  id: number;
  name: string;
}

const Movies = () => {
  const { getMovies } = useMovie();
  const { getGenres } = useGenre();
  const [params, setParams] = useSearchParams();

  const page = params.get("page") || "1";
  const with_genres = params.get("genre") || "";
  const sort_by = params.get("sort_by") || "popularity.desc";
  const { data, isLoading } = getMovies({ page, with_genres, sort_by });

  const { data: genreData } = getGenres();
  const options = genreData?.genres?.map(({ id, name }: GenreData) => ({
    value: String(id),
    label: name,
  }));

  const sortItems = [
    { value: "popularity.desc", label: "Popularity (desc)" },
    { value: "popularity.asc", label: "Popularity (asc)" },
    { value: "vote_average.desc", label: "High vote (desc)" },
    { value: "vote_average.asc", label: "Low vote (asc)" },
    { value: "release_date.desc", label: "New movies (desc)" },
    { value: "release_date.asc", label: "Old movies (asc)" },
  ];

  const handleChange = (value: number) => {
    params.set("page", value.toString());
    setParams(params);
  };

  const handleChangeGenre = (value: string) => {
    params.set("genre", value);
    params.set("page", "1");
    setParams(params);
  };

  const handleChangeSort = (value: string) => {
    params.set("sort_by", value);
    params.set("page", "1");
    setParams(params);
  };

  return (
    <div className="">
      <p className="text-center text-[40px] font-semibold pt-[20px] max-[700px]:text-[24px]">
        Movies
      </p>
      <div className="container flex justify-between items-center pt-[30px]">
        <div>
          <Select
            onChange={handleChangeSort}
            placeholder="Select sort"
            options={sortItems}
            value={sort_by || undefined}
            className="
            w-[200px] 
            flex
            justify-between
            items-center
            transition-all
            max-[450px]:w-[140px]
            [&_.ant-select-selector]:!py-[24px]
            [&_.ant-select-selector]:!bg-transparent 
            [&_.ant-select-selector]:!rounded-[12px]
            [&_.ant-select-selector]:!border-[#555] 
            [&_.ant-select-selection-item]:!text-white
            [&_.ant-select-arrow]:!text-white
            [&_.ant-select-selector:hover]:!border-[#999]
            [&_.ant-select-selector:focus-within]:!border-[#555]
          "
          />
        </div>
        <div className="flex justify-center flex-col">
          <Select
            onChange={handleChangeGenre}
            placeholder="Select genre"
            options={options}
            value={with_genres || undefined}
            className="
            w-[200px]
            flex
            justify-center
            items-center
            transition-all
            max-[450px]:w-[140px]
            [&_.ant-select-selector]:!py-[24px]
            [&_.ant-select-selector]:!bg-transparent 
            [&_.ant-select-selector]:!rounded-[12px]
            [&_.ant-select-selector]:!border-[#555] 
            [&_.ant-select-selection-item]:!text-white 
            [&_.ant-select-selection-placeholder]:!text-gray-300
            [&_.ant-select-arrow]:!text-white 
            [&_.ant-select-selector:hover]:!border-[#999]
            [&_.ant-select-selector:focus-within]:!border-[#555]
          "
          />
        </div>
      </div>
      <div className="min-h-[500px] max-[410px]:min-h-[200px]">
        {isLoading && (
          <div className="h-[80vh] flex justify-center items-center">
            <div className="loader"></div>
          </div>
        )}
        {data?.results?.length ? (
          <MovieView data={data.results} />
        ) : (
          !isLoading && (
            <div className="flex justify-center items-center min-h-[500px] max-[410px]:min-h-[200px]">
              <p className="text-[#999] text-[30px] text-center max-[410px]:text-[20px]">No movie at this genre</p>
            </div>
          )
        )}
      </div>

      <div className="flex justify-center py-[30px]">
        <Pagination
          current={Number(page)}
          onChange={handleChange}
          showSizeChanger={false}
          defaultPageSize={1}
          total={data?.total_pages || 0}
          className="bg-white border dark:border-[#999] h-[50px] flex justify-between items-center rounded-[12px] text-white shadow-white max-[400px]:w-[330px]"
        />
      </div>
    </div>
  );
};

export default memo(Movies);
