import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../../service/useMovie';
import MovieView from '../../components/movie-view/MovieView';

const Similar = () => {
  const {id} = useParams()
  const {getMovieItems} = useMovie()
  const {data: similar} = getMovieItems(Number(id), "similar")
  return (
    <div>
      <MovieView data={similar?.results} title='Similar movies'/> 
    </div>
  );
};

export default memo(Similar);