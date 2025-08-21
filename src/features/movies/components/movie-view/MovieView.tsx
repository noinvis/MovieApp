import { Star } from "lucide-react";
import { memo, useLayoutEffect, type FC } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useBookmark } from "../../../../shared/zustand/useBookmark";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { IMAGE_URL } from "../../../../shared/const";
import image from "../../../../shared/assets/card.png";
import { useMovie } from "../../service/useMovie";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  popularity: number;
}

interface Props {
  data: Movie[] | undefined;
}

const MovieView: FC<Props> = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { getMovies } = useMovie();
  const { toggleBookmark, bookmark } = useBookmark();
  const { isLoading } = getMovies();

  useLayoutEffect(() => {
  if (location.pathname === `/movie/${id}`) {
    window.scrollTo(0, 0);
  }
}, [id]);

  if (isLoading)
    return (
      <div className="h-[80vh] flex justify-center items-center bg-black">
        <div className="loader"></div>
      </div>
    );

  const movies =
    location.pathname === "/" || location.pathname.includes("/similar")
      ? data?.slice(0, 8)
      : data;
  return (
    <main className="bg-black py-[30px]">
      <div className="container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
        {movies?.map((movie: Movie) => {
          const card = movie.poster_path
            ? `${IMAGE_URL}${movie.poster_path}`
            : `${image}`;
          return (
            <div key={movie.id}>
              <div className="cursor-pointer relative overflow-hidden">
                <img
                  src={card}
                  loading="lazy"
                  alt=""
                  className="w-full h-[500px] object-cover max-[1030px]:h-[400px] max-[550px]:h-[300px] max-[410px]:h-[250px]"
                  onClick={() => navigate(`/movie/${movie.id}`)}
                />
                <div className="absolute duration-300 top-[8px] right-[-50px] group-hover:right-[12px] max-[700px]:right-[12px] max-[700px]:flex max-[700px]:gap-1.5 max-[410px]:top-[4px] max-[410px]:right-[4px]">
                  <button
                    onClick={() => toggleBookmark(movie)}
                    className="block p-[8px] rounded-[50%] bg-white mt-[5px] max-[700px]:mt-0 max-[410px]:p-[6px]"
                  >
                    {bookmark.some((item) => item.id === movie.id) ? (
                      <IoBookmark className="text-[24px] max-[700px]:text-[18px] text-[#C61F1F]" />
                    ) : (
                      <IoBookmarkOutline className="text-[24px] max-[700px]:text-[18px] text-black" />
                    )}
                  </button>
                </div>
              </div>
              <div className="p-2">
                <h3
                  className="font-semibold line-clamp-1 text-white mt-[10px]"
                  title={movie.title}
                >
                  {movie.title}
                </h3>
                <div className="flex justify-between items-center mt-[10px] max-[420px]:flex-col gap-[10px] max-[420px]:items-start">
                  <p className="text-yellow-500 font-semibold flex items-center gap-[10px]">
                    <Star className="size-[24px]" />{" "}
                    {movie.vote_average ? movie.vote_average.toFixed(1) : "0"}
                  </p>
                  <p className="text-white font-semibold">
                    {movie.popularity ? movie.popularity.toFixed(1) : "0"}k views
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default memo(MovieView);
