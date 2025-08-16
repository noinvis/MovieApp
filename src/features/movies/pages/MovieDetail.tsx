import { memo, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovie } from "../service/useMovie";

const MovieDetail = () => {
  const { id } = useParams();
  const { movieId } = useMovie();
  const { data, isLoading, isError } = movieId(Number(id));
  const navigate = useNavigate();
  console.log(data);

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
      <div className="container text-white">
        <div className="flex py-[60px] items-center justify-center max-[950px]:flex-col">
          <div className="w-[50%] flex justify-center max-[950px]:w-full">
            <img
              src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
              className="w-[400px] h-[500px] rounded-[12px] object-cover"
            />
          </div>
          <div className="w-[50%] flex justify-center flex-col max-[950px]:w-full">
            <p className="text-[40px] font-semibold text-center max-[400px]:text-[30px]">{data?.title}</p>
            <p className="font-medium text-center">{data?.overview}</p>
            <p className="text-[24px] font-semibold py-[10px] text-center">
                {data?.status}
              </p>
            <div className="flex justify-between py-[10px] w-full max-[950px]:justify-around">
              <p className="text-[18px] font-semibold">{data?.release_date}</p>
              <p className="text-[18px] font-semibold">{data?.vote_average.toFixed(1)} rating</p>
              <p className="text-[18px] font-semibold">{data?.popularity.toFixed(1)}k views</p>
            </div>
            <div className="flex justify-center mt-[20px]">
              <button
                className="text-white rounded-[12px] py-[8px] px-[45px]"
                onClick={() => navigate("/")}
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
        <div className="pb-[30px]">
          <img
            src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
            className="w-full h-[600px] rounded-[12px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(MovieDetail);
