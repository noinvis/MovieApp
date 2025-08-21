import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../../service/useMovie';
import MovieView from '../../components/movie-view/MovieView';

const Similar = () => {
  const {id} = useParams()
  const {getMovieItems} = useMovie()
  const {data: similar} = getMovieItems(Number(id), "similar")
  return (
    <div className='bg-black'>
      <p className="text-center text-white text-[40px] font-semibold">
        Similar movies
      </p>
      <MovieView data={similar?.results.slice(0, 8)}/> 
    </div>
  );
};

export default memo(Similar);