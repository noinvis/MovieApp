import { memo, useState } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../../service/useMovie";
import { IMAGE_URL } from "../../../../shared/const";
import icon from "../../../../shared/assets/image.png";

interface Actors {
  id: number;
  profile_path: string;
  name: string;
  character: string;
  popularity: number;
}

const Actors = () => {
  const { id } = useParams();
  const { getMovieItems } = useMovie();
  const { data: actors } = getMovieItems(Number(id), "credits");

  const [showAll, setShowAll] = useState(false);

  const visibleActors = showAll
    ? actors?.cast
    : actors?.cast?.slice(0, 16);

  return (
    <div className="py-[2rem]">
      <div className="grid grid-cols-4 gap-[1rem] max-[999px]:grid-cols-3 max-[840px]:grid-cols-2 max-[600px]:grid-cols-1">
        {visibleActors?.map((actor: Actors) => {
          const image = actor.profile_path
            ? `${IMAGE_URL}${actor.profile_path}`
            : `${icon}`;
          return (
            <div
              className="flex items-center gap-[1rem] p-[10px]"
              key={actor.id}
            >
              <div className="size-[100px]">
                <img
                  loading="lazy"
                  src={image}
                  alt={actor.name}
                  className="size-[100px] object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-semibold">{actor.name}</p>
                <p className="font-medium">{actor.character}</p>
              </div>
            </div>
          );
        })}
      </div>

      {actors?.cast?.length > 16 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="py-[10px] px-[30px] rounded-[12px] bg-[#C61F1F] text-white font-semibold hover:bg-[#a81a1a] duration-300"
          >
            {showAll ? "Hide casts" : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(Actors);
