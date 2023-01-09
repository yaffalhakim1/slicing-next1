import Button from "./button";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div
      className="bg-hero 2xl:h-[720px] xl:h-[620px] lg:h-[520px] md:h-[500px] pb-20"
      id="hero"
    >
      <div className="container mx-auto px-10 2xl:p-0 ">
        <Navbar />
        <div className="text-center xl:mt-20 lg:mt-10 md:mt-5">
          <h1 className="text-3xl text-white font-semibold font-mono xl:w-8/12 lg:w-10/12  mx-auto leading-relaxed 2xl:w-6/12">
            Saya seorang front-end engineer, back-end engineer, dan juga UI
            designer
          </h1>
          <p className="text-white text-opacity-60 text-lg w-4/12 mx-auto mt-8 leading-relaxed 2xl:w-3/12 xl:w-4/12 lg:w-6/12">
            Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
            design.
          </p>
          <Button className="mt-14" variant="primary" pill>
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  );
}
