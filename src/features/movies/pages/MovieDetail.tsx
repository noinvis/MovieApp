import { memo, useLayoutEffect, type FC } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { useMovie } from "../service/useMovie";
import arrow from "../../../shared/assets/arrow-left-s-line.png";
import { IMAGE_URL } from "../../../shared/const";
import Similar from "./similar/Similar";
import MovieVideo from "../components/movie-video/MovieVideo";
import detailImage from "../../../shared/assets/card.png";
import { Image } from "antd";

interface Props {
  title: string;
  title2: string;
}

interface Image {
  file_path: string;
}

const MovieDetail: FC<Props> = ({ title, title2 }) => {
  const { id } = useParams();
  const { movieId } = useMovie();
  const { data, isLoading, isError } = movieId(Number(id));
  const navigate = useNavigate();
  const { getMovieItems } = useMovie();
  const { data: images } = getMovieItems(Number(id), "images");
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
        {data?.backdrop_path ? (
          <img
            loading="lazy"
            src={`${IMAGE_URL}${data.backdrop_path}`}
            className="w-full h-[700px] object-cover max-[900px]:h-[500px] max-[670px]:h-[300px] max-[520px]:h-[230px] max-[410px]:h-[190px]"
            alt=""
          />
        ) : (
          <div className="w-full h-[700px] bg-[#555] max-[900px]:h-[500px] max-[670px]:h-[300px] max-[520px]:h-[230px] max-[410px]:h-[190px]" />
        )}
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
              src={
                data?.poster_path
                  ? `${IMAGE_URL}${data.poster_path}`
                  : detailImage
              }
              className="rounded-[12px] object-cover max-[800px]:h-[700px] max-[550px]:h-[500px] max-[410px]:h-[450px]"
              alt=""
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
          {images?.backdrops?.length ? (
            <div className="flex overflow-auto mb-[30px] scrollbar-hide">
              {images.backdrops.slice(0, 6).map((item: Image, inx: number) => (
                <Image
                  width='100%'
                  height="150px"
                  loading="lazy"
                  key={inx}
                  src={`${IMAGE_URL}${item.file_path}`}
                  className=""
                />
              ))}
            </div>
          ) : (
            <p className="text-[#999]">No Moments</p>
          )}
        </div>
        <div>
          <MovieVideo />
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
            to={"producers"}
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
        <div>
          <Similar />
        </div>
      </div>
    </div>
  );
};

export default memo(MovieDetail);
