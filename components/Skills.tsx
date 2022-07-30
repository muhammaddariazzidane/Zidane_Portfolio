import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="w-full pb-8 scroll-mt-32" id="skills">
      <div className="w-full pb-16">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-12">
              <h4 className="text-2xl text-dark dark:text-white">My Skills</h4>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ">
              <div data-aos="fade-down">
                <div className="p-6 shadow-xl bg-white dark:shadow-boleas/60 dark:bg-boleas rounded-xl hover:scale-105 ease-in-out duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                      <Image src="/../public/img/html5.png" width="64px" height="64px" alt="/" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-dark dark:text-white">HTML5</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-down" data-aos-delay="100">
                <div className="p-6 shadow-xl bg-white dark:shadow-boleas/60 dark:bg-boleas rounded-xl hover:scale-105 ease-in-out duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                      <Image src="/../public/img/css3.png" width="64px" height="64px" alt="/" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-dark dark:text-white">CSS3</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-down" data-aos-delay="200">
                <div className="p-6 shadow-xl bg-white dark:shadow-boleas/60 dark:bg-boleas rounded-xl hover:scale-105 ease-in-out duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                      <Image src="/../public/img/javascript.png" width="64px" height="64px" alt="/" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-dark dark:text-white">JAVASCRIPT</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-down" data-aos-delay="300">
                <div className="p-6 shadow-xl bg-white dark:shadow-boleas/60 dark:bg-boleas rounded-xl hover:scale-105 ease-in-out duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                      <Image src="/../public/img/php.png" width="64px" height="64px" alt="/" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-dark dark:text-white">PHP</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-down" data-aos-delay="400">
                <div className="p-6 shadow-xl bg-white dark:shadow-boleas/60 dark:bg-boleas rounded-xl hover:scale-105 ease-in-out duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                      <Image src="/../public/img/python.png" width="64px" height="64px" alt="/" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-dark dark:text-white">PYTHON</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-down" data-aos-delay="500">
                <div className="p-6 shadow-xl bg-white dark:shadow-boleas/60 dark:bg-boleas rounded-xl hover:scale-105 ease-in-out duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                      <Image src="/../public/img/bootstrap.png" width="64px" height="64px" alt="/" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-dark dark:text-white">BOOTSTRAP</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-down" data-aos-delay="600">
                <div className="p-6 shadow-xl bg-white dark:shadow-boleas/60 dark:bg-boleas rounded-xl hover:scale-105 ease-in-out duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                      <Image src="/../public/img/tailwindcss1.png" width="64px" height="64px" alt="/" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-dark dark:text-white">TAILWINDCSS</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-down" data-aos-delay="700">
                <div className="p-6 shadow-xl bg-white dark:shadow-boleas/60 dark:bg-boleas rounded-xl hover:scale-105 ease-in-out duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                      <Image src="/../public/img/reactjs.png" width="64px" height="64px" alt="/" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-dark dark:text-white">REACT JS</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-down" data-aos-delay="800">
                <div className="p-6 shadow-xl bg-white dark:shadow-boleas/60 dark:bg-boleas rounded-xl hover:scale-105 ease-in-out duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                      <Image src="/../public/img/nextjs.png" width="64px" height="64px" alt="/" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-dark dark:text-white">NEXT JS</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex justify-center">
              <div className=" mr-3 mt-2 flex justify-center items-center">
                <Image src="/../public/img/bootstrap.png" width={200} height={90} data-aos="fade-up" />
              </div>
              <div className=" mr-3 mt-2 flex justify-center items-center">
                <Image src="/../public/img/js.png" width={200} height={90} data-aos="fade-up" />
              </div>
              <div className=" transition ease-in-out mr-3 mt-2 flex justify-center items-center">
                <Image src="/../public/img/nextjs.png" width={200} height={90} data-aos="fade-up" />
              </div>
              <div className=" mr-3 mt-2 flex justify-center items-center">
                <Image src="/../public/img/css.png" width={200} height={90} data-aos="fade-up" />
              </div>
              <div className=" mr-3 mt-2 flex justify-center items-center">
                <Image src="/../public/img/html.png" width={200} height={90} data-aos="fade-up" />
              </div>
              <div className=" mr-3 mt-2 flex justify-center items-center">
                <Image src="/../public/img/tailwindcss.png" width={200} height={90} data-aos="fade-up" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
