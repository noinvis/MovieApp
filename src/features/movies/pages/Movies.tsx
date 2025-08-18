import { memo } from 'react';
import MovieView from '../components/movie-view/MovieView';
import { useMovie } from '../service/useMovie';

const Movies = () => {
  const {getMovies} = useMovie()
  const {data} = getMovies()
  return (
    <div className="Movies">
      <MovieView data={data?.results} title='Movies'/>
    </div>
    
  );
};

export default memo(Movies);