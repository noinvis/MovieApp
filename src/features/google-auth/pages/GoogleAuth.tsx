import { memo, useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import img from "../../../shared/assets/google.png";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface GoogleUser {
  name: string;
  email: string;
  picture: string;
}

const GoogleAuth = () => {
  const [user, setUser] = useState<GoogleUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("google-token");
    if (token) {
      const decoded: GoogleUser = jwtDecode(token);
      setUser(decoded);
    }
  }, []);

  const navigate = useNavigate()

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <div className="bg-[#111111] dark:bg-white dark:shadow-lg w-[900px] rounded-[28px] p-[30px] py-[60px] flex max-[960px]:w-auto max-[960px]:flex-col">
        <div className="w-[50%] max-[960px]:w-full">
            <div className="flex items-start flex-col max-[960px]:flex-row max-[960px]:items-center max-[960px]:justify-center">
                <img src={img} alt="" />
                <p className="text-[44px]">Вход</p>
            </div>
          <p className="max-[960px]:text-center">Используйте аккаунт Google</p>
        </div>

        {!user ? (
          <form className="w-[50%] flex flex-col gap-[1rem] max-[960px]:w-full">
            <p className="text-[14px] max-[960px]:text-center">
              Не ваш компьютер? Включите гостевой режим, чтобы защитить данные в
              аккаунте.{" "}
              <span className="font-semibold text-[#0B57D0] text-[14px]">
                Подробнее об использовании гостевого режима
              </span>
            </p>
            <div className="w-full">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  localStorage.setItem(
                    "google-token",
                    credentialResponse.credential || ""
                  );
                  navigate("/")
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
            <button onClick={() => navigate("/")} className="bg-[#C61F1F] py-[7px] rounded-[5px] dark:text-white">Home</button>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-3 w-[50%]">
            <img
              src={user.picture}
              alt={user.name}
              className="w-20 h-20 rounded-full"
            />
            <p className="text-white text-lg">{user.name}</p>
            <p className="text-gray-400">{user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(GoogleAuth);
