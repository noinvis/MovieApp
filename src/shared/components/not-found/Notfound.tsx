import { memo } from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[64vh] flex justify-center items-center flex-col text-[#C61F1F] bg-black">
      <p className="text-[70px] font-semibold">404</p>
      <p className="text-[30px] text-center max-[450px]:text-[25px] font-semibold">
        You are lost!
      </p>
      <p className="text-center font-semibold">
        Please go home and try again
      </p>
      <button
        className="py-[10px] px-[30px] text-white rounded-[15px] mt-[1rem] font-medium bg-[#C61F1F]"
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </div>
  );
};

export default memo(Notfound);
