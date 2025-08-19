import { memo, useLayoutEffect } from "react";
import { useBookmark } from "../../../shared/zustand/useBookmark";
import MovieView from "../../movies/components/movie-view/MovieView";
import { useNavigate } from "react-router-dom";

const Bookmark = () => {
  const { bookmark } = useBookmark();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (bookmark.length === 0) {
    return (
      <div className="bg-black">
        <div className="container h-[70vh] flex justify-center items-center flex-col gap-[10px]">
          <p className="text-[50px] text-white text-center font-medium max-[500px]:text-[30px]">
            Bookmark is empty!
          </p>
          <p className="text-[24px] text-white text-center font-medium max-[500px]:text-[18px]">
            Please choose your liked movie
          </p>
          <button
            className="text-white bg-[#C61F1F] py-[10px] px-[30px] rounded-[12px] mt-[10px]"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </div>
    );
  }

  return (
      <MovieView data={bookmark} title="Bookmark" />
  );
};

export default memo(Bookmark);
