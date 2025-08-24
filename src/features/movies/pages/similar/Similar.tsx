import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../../service/useMovie';
import MovieView from '../../components/movie-view/MovieView';

const Similar = () => {
  const { id } = useParams();
  const { getMovieItems } = useMovie();
  const { data: similar, isLoading } = getMovieItems(Number(id), "similar");

  const movies = similar?.results?.slice(0, 8) || [];

  return (
    <div className="bg-black py-[30px]">
      <p className="text-center text-white text-[40px] font-semibold mb-[30px] max-[700px]:text-[24px]">
        Similar movies
      </p>
      {isLoading ? (
        <p className="text-center text-gray-400">Loading...</p>
      ) : movies.length > 0 ? (
        <MovieView data={movies} />
      ) : (
        <p className="text-center text-[#999] text-[20px]">
          No similar movies
        </p>
      )}
    </div>
  );
};

export default memo(Similar);
