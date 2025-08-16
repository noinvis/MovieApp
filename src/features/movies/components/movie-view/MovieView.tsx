import { Star } from "lucide-react";
import { memo, type FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  data: any[] | undefined;
}

const MovieView: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <main className="bg-black py-[50px]">
      <p className="text-center text-white text-[40px] font-semibold mb-[20px]">Movies</p>
      <div className="container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
        {data?.map((movie: any) => (
          <div key={movie.id}>
              <div className="cursor-pointer" onClick={() => navigate(`/movie/${movie.id}`)}>
                  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
              </div>
              <div className="p-2">
                  <h3 className="font-semibold line-clamp-1 text-white mt-[10px]" title={movie.title}>{movie.title}</h3>
                  <div className="flex justify-between items-center mt-[10px] max-[400px]:flex-col gap-[10px] max-[400px]:items-start">
                    <p className="text-yellow-500 font-semibold flex items-center gap-[10px]"><Star className="size-[24px]"/> {movie.vote_average.toFixed(1)}</p>
                    <p className="text-white font-semibold">{movie.popularity.toFixed(1)}k views</p>
                  </div>
              </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default memo(MovieView);
