import React from "react";
import CountUp from "react-countup";
import { UserContext } from "../functions/auth/userContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../functions/auth/firebase";
import { signInWithGoogle } from "../functions/auth/signIn";

const Hero = () => {
  const [animateCountUp, setAnimateCountUp] = React.useState(false);
  const { user, loading } = React.useContext(UserContext);
  const [explore, setExplore] = React.useState(false);
  const navigate = useNavigate();

  const signOutFn = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((e) => console.log(e));
  };
  const signInFn = signInWithGoogle(() => navigate("/register"));

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setAnimateCountUp(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (explore) {
      window.scrollTo({
        top: 950,
        behavior: "smooth",
      });
      setExplore(false);
    }
  }, [explore]);

  return (
    <div className="spacebg h-[100%]">
      <div className="px-8 md:px-20 py-10 ">
        {/* <div className='bg-black bg-opacity-50 absolute z-[20] h-[100%] w-screen left-0 top-0'></div> */}
        <h1 className="my-5 md:text-8xl text-4xl text-white font-bold text-white text-center my-5">
          DHISHNA
        </h1>
        <h1 className="my-5 md:text-8xl text-4xl text-white font-bold text-white text-center my-5">
          CAMPUS AMBASSADOR
        </h1>
        <p className="text-center text-white font-md lg:text-3xl md:text-2xl text-md my-5">
          Be the emissary of Dhishna 2023
        </p>
        <div className="flex md:flex-row flex-col justify-center my-16">
          <a
            // href="/register"
            href={user && "/register"}
            className="flex md:flex-row flex-col justify-center hidden sm:flex"
          >
            <button
              className="cornerCutBtn rounded-[5px] ml-10 cursor-pointer group mr-10 md:px-16 px-5 py-4 bg-white hover:-translate-x-2 hover:-translate-y-2 transform transition-transform duration-200 ease-in-out mb-10 text-black text-center font-bold text-md md:text-xl"
              onClick={!user && signInFn}
            >
              REGISTER
            </button>
          </a>
          {!user && (
            <div className="flex md:flex-row flex-col justify-center sm:hidden">
              <button
                className="cornerCutBtn rounded-[5px] ml-10 cursor-pointer group mr-10 md:px-16 px-5 py-4 bg-white hover:-translate-x-2 hover:-translate-y-2 transform transition-transform duration-200 ease-in-out mb-10 text-black text-center font-bold text-md md:text-xl"
                onClick={user ? signOutFn : signInFn}
              >
                {user ? "SIGN OUT" : "SIGN IN"}
              </button>
            </div>
          )}

          <button
            className="whiteCornerCutBtn rounded-[5px] border-2 border-white ml-10 cursor-pointer group mr-10 md:px-16 px-5 py-4 bg-black bg-opacity-40 hover:-translate-x-2 hover:-translate-y-2 transform transition-transform duration-200 ease-in-out mb-10 text-white text-center font-bold text-md text-xl"
            onClick={() => setExplore(true)}
          >
            EXPLORE
          </button>
        </div>
        <div className="my-5 md:my-20">
          <div className="flex flex-wrap justify-around">
            <div className="md:px-10 px-4 md:py-12 py-7 rounded-[50%] bg-white flex flex-col content-center justify-center">
              <h3 className="flex justify-center text-black font-semibold text-xl md:text-5xl text-center">
                {animateCountUp && (
                  <CountUp
                    style={{ width: "fit-content" }}
                    end={30}
                    duration={3}
                  />
                )}
                +
              </h3>
              <p className="text-black text-sm md:text-md my-2 text-center font-semibold">
                WORKSHOPS
              </p>
            </div>
            <div className="md:px-10 px-6 md:py-12 py-7 rounded-[50%] bg-white flex flex-col content-center justify-center">
              <h3 className="flex justify-center text-black font-semibold text-xl md:text-5xl text-center">
                {animateCountUp && (
                  <CountUp
                    style={{ width: "fit-content" }}
                    end={12}
                    duration={4}
                  />
                )}
                +
              </h3>
              <p className="text-black text-sm md:text-md my-2 text-center font-semibold">
                LECTURES
              </p>
            </div>
            <div className="md:px-10 px-6 md:py-12 py-8 rounded-[50%] bg-white flex flex-col content-center justify-center">
              <h3 className="flex justify-center text-black font-semibold text-xl md:text-5xl text-center">
                {animateCountUp && (
                  <CountUp
                    style={{ width: "fit-content" }}
                    end={44}
                    duration={5}
                  />
                )}
                +
              </h3>
              <p className="text-black text-sm md:text-md my-2 text-center font-semibold">
                SPONSORS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
