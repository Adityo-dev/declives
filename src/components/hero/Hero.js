import Link from "next/link";
function Hero() {
  return (
    <>
      <section className="max-w-[1700px] mx-auto px-3 md:px-5 h-full mt-16 md:mt-28">
        <div>
          <div className="relative">
            <div className="lg:w-2/3">
              <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">
                Dedicated to you and your satisfaction
              </p>
              <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  Believe in Humanity.
                </span>
                <span> Business is never for one day.</span>
              </h1>
              <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">
                Declives will be the future game changer and will be the
                participants of the technology.
              </p>
              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:from-purple-500 group-hover:to-cyan-500"></div>
                <Link
                  href="https://www.ecoysoft.com/"
                  title=""
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
                  role="button"
                >
                  Discover us now
                </Link>
              </div>
            </div>

            <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0 z-">
              <img
                className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* <div className="border-t border-gray-800 sm:pt-10 sm:mt-14">
        <marquee direction="left" className="text-base font-normal text-white">
          Declives are coming ASAP
        </marquee>
      </div> */}
    </>
  );
}

export default Hero;
