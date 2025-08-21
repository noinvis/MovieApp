import { memo, useState } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../../service/useMovie";
import { IMAGE_URL } from "../../../../shared/const";
import icon from '../../../../shared/assets/image.png'

interface Producers {
  id: number;
  profile_path: string;
  name: string;
  job: string;
  popularity: number;
}

const Producers = () => {
  const { id } = useParams();
  const { getMovieItems } = useMovie();
  const { data: producers } = getMovieItems(Number(id), "credits");
  console.log(producers);

  const [showAll, setShowAll] = useState(false);
  
    const visibleProducers = showAll
      ? producers?.crew
      : producers?.crew?.slice(0, 16);
  return (
    <div className="">
        <div className="grid grid-cols-4 gap-[1rem] py-[2rem] max-[999px]:grid-cols-3 max-[840px]:grid-cols-2 max-[600px]:grid-cols-1">
        {visibleProducers?.map((producers: Producers) => {
            const image = producers.profile_path ? `${IMAGE_URL}${producers.profile_path}` : `${icon}`
            return (
            <div className="flex items-center gap-[1rem] p-[10px]" key={producers.id}>
                <div className="size-[100px]">
                <img
                    loading="lazy"
                    src={image}
                    alt=""
                    className="size-[100px] object-cover rounded-[10px]"
                />
                </div>
                <div className="flex flex-col gap-[10px]">
                <p className="font-semibold">{producers.name}</p>
                <p className="font-medium">{producers.job}</p>
                </div>
            </div>
            );
        })}
        </div>
        {producers?.crew?.length > 16 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="py-[10px] px-[30px] rounded-[12px] bg-[#C61F1F] text-white font-semibold hover:bg-[#a81a1a] duration-300 mb-[30px]"
            >
              {showAll ? "Hide crews" : "Show more"}
            </button>
          </div>
        )}
    </div>
  );
};

export default memo(Producers);
