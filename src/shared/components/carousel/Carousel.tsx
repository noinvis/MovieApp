import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useMovie } from "../../../features/movies/service/useMovie";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/free-mode";
// @ts-ignore
import "swiper/css/thumbs";

const Carousel = () => {
  const { getMovies } = useMovie();
  const { data, isLoading, isError } = getMovies();
  const [swiper, setSwiper] = useState<any>(null);

  if (isError) return <p>Something went wrong!</p>;

  if (isLoading)
    return (
      <div className="h-[80vh] flex justify-center items-center bg-black">
        <div className="loader"></div>
      </div>
    );

  const movieData = data.results.filter((item: any) => item.backdrop_path && item.poster_path).slice(0, 16);
  return (
    <div className="bg-black">
        <div className="container pb-[20px]">
        <Swiper
            spaceBetween={12}
            navigation
            thumbs={{
            swiper: swiper && !swiper.destroyed ? swiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="h-[420px] md:h-[620px] bg-none rounded-2xl overflow-hidden shadow-2xl
                    [--swiper-navigation-color:#fff] [--swiper-pagination-color:#fff]"
        >
            {movieData.map((movie: any) => (
            <SwiperSlide key={movie.id}>
                <img
                loading="lazy"
                className="w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                title={movie.title}
                />
            </SwiperSlide>
            ))}
        </Swiper>

        <Swiper
            onSwiper={setSwiper}
            spaceBetween={12}
            slidesPerView={4}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className="mt-[1rem]"
        >
            {movieData.map((swipe: any) => (
            <SwiperSlide key={swipe.id} className="cursor-pointer">
                <img
                loading="lazy"
                className="h-[110px] md:h-[130px] w-full object-cover rounded-[12px] transition"
                src={`https://image.tmdb.org/t/p/original${swipe.poster_path}`}
                title={swipe.title || swipe.original_title}
                />
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    </div>
  );
};

export default Carousel;
