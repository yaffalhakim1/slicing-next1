import Button from "./button";
import Navbar from "./navbar/Navbar";

export default function Hero() {
  return (
    <div className="bg-background  " id="hero">
      <div className="container mx-auto px-10 2xl:p-0 ">
        <Navbar />

        <div className="text-left xl:mt-20 lg:mt-10 md:mt-5 xl:ml-4 md:ml-3 ">
          <h6 className="text-l text-purple-500 font-semibold font-mono xl:w-8/12 lg:w-10/12  mx-auto leading-relaxed 2xl:w-6/12 ">
            Hi, my name is
          </h6>
        </div>
        <div className="text-left xl:mt-3 lg:mt-5 md:mt-2 xl:ml-4 md:ml-3">
          <h1 className="text-7xl  text-white font-bold font-sans xl:w-8/12 lg:w-10/12  mx-auto leading-relaxed 2xl:w-6/12">
            Yafi Alhakim.
          </h1>
          <p className="text-white text-opacity-60 text-lg w-full mx-auto mt-2 leading-relaxed 2xl:w-3/12 xl:w-8/12 lg:w-10/12 ">
            I am a front-end engineer, mobile engineer, and also UI designer
            specializing with{" "}
            <span className="text-purple-500 ">
              NextJs, ReactJS, and Flutter.
            </span>
          </p>

          <Button className="mt-10 xl:ml-48 lg:ml-20" variant="secondary" pill>
            Contact me
          </Button>
        </div>
      </div>
    </div>
  );
}
