import { memo, useLayoutEffect, type FC } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { useMovie } from "../service/useMovie";
import arrow from "../../../shared/assets/arrow-left-s-line.png";
import { IMAGE_URL } from "../../../shared/const";

interface Props {
  title: string;
  title2: string;
}

const MovieDetail: FC<Props> = ({ title, title2 }) => {
  const { id } = useParams();
  const { movieId } = useMovie();
  const { data, isLoading, isError } = movieId(Number(id));
  const navigate = useNavigate();
  const {getMovieItems} = useMovie()
  const {data: images} = getMovieItems(Number(id), "images")
  console.log(images);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isError) return <p>Something went wrong!</p>;

  if (isLoading)
    return (
      <div className="h-[80vh] flex justify-center items-center bg-black">
        <div className="loader"></div>
      </div>
    );

  return (
    <div className="bg-black">
      <div className="relative">
        <img
          loading="lazy"
          src={`${IMAGE_URL}${data?.backdrop_path}`}
          className="w-full"
          alt=""
        />
        <button
          className="absolute top-[10px] left-[10px] rounded-[12px] bg-black p-[10px] z-10 flex items-center max-[570px]:p-[7px]"
          onClick={() => navigate(-1)}
        >
          <img
            src={arrow}
            className="size-[40px] max-[570px]:size-[20px] max-[400px]:size-[1rem]"
            alt=""
          />
          <p className="text-white text-[18px] font-semibold pr-[10px] max-[570px]:text-[14px] max-[400px]:text-[12px]">
            Previous
          </p>
        </button>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center flex-col">
          <h1 className="text-[50px] max-[830px]:text-[33px] max-[520px]:text-[20px] font-bold text-center text-white max-[400px]:text-[1rem]">
            {data?.title}
          </h1>
          <p className="text-sm font-semibold text-center mb-4 text-white">
            {data.release_date.split("-")[0]} •{" "}
            {data.original_language.toUpperCase()} •{" "}
            {data.vote_average.toFixed(1)}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[400px] max-[700px]:h-[100px] bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="container text-white">
        <div className="flex py-[60px] justify-between max-[800px]:flex-col">
          <div className="w-[30%] flex justify-center max-[800px]:w-full max-[1000px]:w-[45%]">
            <img
              loading="lazy"
              src={`${IMAGE_URL}${data?.poster_path}`}
              className="rounded-[12px] object-cover"
            />
          </div>
          <div className="w-[60%] max-[800px]:w-full max-[1000px]:w-[50%]">
            <p className="text-[40px] font-semibold max-[400px]:text-[30px] max-[520px]:text-[28px]">
              {data?.title}
            </p>
            <p className="text-[20px] text-gray-400 font-medium mb-[5px]">
              {data.tagline}
            </p>
            <p className="font-medium text-gray-300 py-[10px]">
              {data?.overview}
            </p>
            <div className="flex justify-between mt-[20px] max-[1000px]:flex-col">
              <div className="flex flex-col gap-[5px]">
                <p className="text-[18px]">
                  <span className="font-semibold">Original title: </span>
                  {data?.original_title}
                </p>
                <p className="text-[18px]">
                  <span className="font-semibold">Release date: </span>
                  {data?.release_date}
                </p>
                <p className="text-[18px]">
                  <span className="font-semibold">Rating: </span>
                  {data?.vote_average.toFixed(1)}
                </p>
                <p className="text-[18px]">
                  <span className="font-semibold">Languages: </span>
                  {data.spoken_languages
                    .map((language: any) => language.english_name)
                    .join(", ")}
                </p>
                <p className="text-[18px] flex flex-col">
                  <span className="font-semibold w-full">Genres: </span>
                  {data.genres.map((item: any) => item.name).join(", ")}
                </p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <p className="text-[18px]">
                  <span className="font-semibold">Vote: </span>
                  {data?.vote_count}
                </p>
                <p className="text-[18px]">
                  <span className="font-semibold">Views: </span>
                  {data?.popularity.toFixed(1)}k
                </p>
                <p className="text-[18px]">
                  <span className="font-semibold">Budget: </span>${data?.budget}
                </p>
                <p className="text-[18px]">
                  <span className="font-semibold">Runtime:</span>{" "}
                  {data?.runtime} min
                </p>
                <p className="text-[18px]">
                  <span className="font-semibold">Status:</span> {data?.status}
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[24px] font-semibold mb-[10px]">Moments</p>
        <div className="flex overflow-auto mb-[30px] scrollbar-hide">
          {
            images?.backdrops?.map((item: any, inx: number) => (
              <img key={inx} src={`${IMAGE_URL}${item.file_path}`} width={250} className="max-[450px]:w-[150px]" alt="" />
            ))
          }
        </div>
        <div className="flex w-full">
          <NavLink
            end={true}
            to={""}
            className={
              "text-[20px] font-semibold link w-full text-center pb-[1rem]"
            }
          >
            {title}
          </NavLink>
          <NavLink
            to={"similar"}
            className={
              "text-[20px] font-semibold link w-full text-center pb-[1rem]"
            }
          >
            {title2}
          </NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default memo(MovieDetail);
