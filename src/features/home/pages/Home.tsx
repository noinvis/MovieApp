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
    <div className="bg-black">
      <Carousel/>
      <p className="text-center text-white text-[40px] font-semibold max-[700px]:text-[24px]">
        Movies
      </p>
      <MovieView data={data?.results}/>
    </div>
  );
};

export default memo(Home);