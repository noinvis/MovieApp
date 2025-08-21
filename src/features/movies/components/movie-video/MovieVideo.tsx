import { useParams } from "react-router-dom";
import { useMovie } from "../../service/useMovie";

interface VideoData {
  type: string;
  site: string;
}

const MovieVideo = () => {
  const { id } = useParams();
  const { getMovieItems } = useMovie();
  const { data: video, isLoading } = getMovieItems(Number(id), "videos");

  if (isLoading)
    return (
      <div className="h-[80vh] flex justify-center items-center bg-black">
        <div className="loader"></div>
      </div>
    );
  if (!video?.results?.length)
    return (
      <div className="w-full rounded-[12px] h-[600px] max-[900px]:h-[500px] max-[730px]:h-[400px] max-[600px]:h-[300px] max-[450px]:h-[200px] my-[50px] bg-[#555] flex justify-center items-center">
        <p className="text-white text-center text-[40px] py-[50px] max-[570px]:text-[24px] max-[450px]:text-[18px]">
          Video doesn't exist
        </p>
      </div>
    );

  const videoData =
    video.results.find(
      (item: VideoData) => item.type === "Trailer" && item.site === "YouTube"
    ) || null;

  return (
    <div className="w-full flex justify-center py-[30px]">
      <iframe
        width="100%"
        height="600"
        src={`https://www.youtube.com/embed/${videoData.key}`}
        title={videoData.name}
        allowFullScreen
        className="rounded-[12px] max-[900px]:h-[500px] max-[730px]:h-[400px] max-[600px]:h-[300px] max-[450px]:h-[200px]"
      ></iframe>
    </div>
  );
};

export default MovieVideo;
