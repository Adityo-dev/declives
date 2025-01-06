import Link from "next/link";
function Hero() {
  return (
    <section className="max-w-[1700px] mx-auto px-5 h-full mt-20">
      <div>
        <div className="relative">
          <div className="lg:w-2/3">
            <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">
              Dedicated to you and your satisfaction
            </p>
            <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                Transforming Your Operations with Cutting Edge
              </span>
              <span> IT Solutions</span>
            </h1>
            <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat.
            </p>
            <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:from-purple-500 group-hover:to-cyan-500"></div>
              <Link
                href="/https://www.ecoysoft.com/"
                title=""
                className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
                role="button"
              >
                ecoysoft
              </Link>
            </div>

            <div>
              <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                {/* <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="1.5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17"
                        stroke="url(#a)"
                      />
                      <defs>
                        <linearGradient
                          id="a"
                          x1="3"
                          y1="7.00003"
                          x2="22.2956"
                          y2="12.0274"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0%"
                            style="stop-color: var(--color-cyan-500)"
                          />
                          <stop
                            offset="100%"
                            style="stop-color: var(--color-purple-500)"
                          />
                        </linearGradient>
                      </defs>
                    </svg> */}

                <span className="ml-2 text-base font-normal text-white">
                  42 new design inspiration was added last week
                </span>
              </div>
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
  );
}

export default Hero;
