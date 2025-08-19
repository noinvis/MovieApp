import { memo, useLayoutEffect } from 'react';
import { useMovie } from '../../movies/service/useMovie';
import MovieView from '../../movies/components/movie-view/MovieView';
import Carousel from '../../../shared/components/carousel/Carousel';

const Home = () => {
  const {getMovies} = useMovie()
  const {data} = getMovies()
  console.log(data);

  useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div className="Home">
      <Carousel/>
      <MovieView data={data?.results} title={"Movies"}/>
    </div>
  );
};

export default memo(Home);