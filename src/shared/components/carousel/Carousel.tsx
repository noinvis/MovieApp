import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useMovie } from "../../../features/movies/service/useMovie";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/free-mode";
// @ts-ignore
import "swiper/css/thumbs";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../const";

const Carousel = () => {
  const { getMovies } = useMovie();
  const { data, isLoading, isError } = getMovies();
  const [swiper, setSwiper] = useState<any>(null);
  const navigate = useNavigate();

  if (isError) return <p>Something went wrong!</p>;

  if (isLoading)
    return (
      <div className="h-[80vh] flex justify-center items-center bg-black dark:bg-white">
        <div className="loader"></div>
      </div>
    );

  const movieData = data.results
    .filter((item: any) => item.backdrop_path && item.poster_path)
    .slice(0, 16);

  return (
    <div className="">
      <div className="container pb-[20px]">
        <Swiper
          spaceBetween={12}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          thumbs={{
            swiper: swiper && !swiper.destroyed ? swiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="h-[420px] md:h-[620px] bg-none rounded-2xl overflow-hidden shadow-2xl
                  [--swiper-navigation-color:#fff] [--swiper-pagination-color:#fff]"
        >
          {movieData.map((movie: any) => (
            <SwiperSlide key={movie.id}>
              <div
                className="relative w-full h-full bg-center"
                style={{
                  backgroundImage: `url('${IMAGE_URL}${movie.backdrop_path}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-10 left-[50%] -translate-x-1/2 text-white w-full">
                  <h2 className="font-semibold text-lg md:text-3xl text-center mb-4">
                    {movie.title}
                  </h2>
                  <p className="text-sm font-semibold text-center mb-4">
                    {movie.release_date.split("-")[0]} •{" "}
                    {movie.original_language.toUpperCase()} •{" "}
                    {movie.vote_average.toFixed(1)}
                  </p>
                  <div className="flex justify-center">
                    <button
                      onClick={() => navigate(`/movie/${movie.id}`)}
                      className="mt-3 hover:bg-gray-300 flex items-center justify-center py-[1rem] rounded-[10px] font-semibold px-[100px] max-[400px]:px-[60px] gap-[10px] text-center bg-white dark:bg-[#C61F1F] dark:text-white duration-300 text-[#C61F1F]"
                    >
                      <Play />
                      Смотреть
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setSwiper}
          spaceBetween={12}
          slidesPerView={6}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          breakpoints={{
            320: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="mt-[1rem]"
        >
          {movieData.map((swipe: any) => (
            <SwiperSlide key={swipe.id} className="cursor-pointer">
              <img
                loading="lazy"
                className="h-[80px] md:h-[90px] w-full object-cover rounded-[12px] transition"
                src={`https://image.tmdb.org/t/p/original${swipe.backdrop_path}`}
                alt={swipe.title || swipe.original_title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
