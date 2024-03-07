import React from "react";
// icons
import { SiSignal } from "react-icons/si";
import { SiCodeberg } from "react-icons/si";

function Footer() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <div className="max-w-8xl w-full items-center justify-between text-sm lg:flex p-2  border border-black py-5 bg-[#fdfff9] ">
        <footer className="w-full">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:px-0">
            <div className="inline-flex items-center">
              {/* logo  */}
              <span className="ml-4 text-lg font-bold">LOGO</span>
            </div>
            <div className="inline-flex items-center">
              connect over here :{/* links  */}
              <span className="ml-4 text-lg font-bold flex gap-5 cursor-pointer">
                <span className="hover:scale-125 transition-300">
                  <a href="https://signal.org/">
                    {" "}
                    <SiSignal />
                  </a>
                </span>
                <span className="hover:scale-125 transition-300">
                  <a href="https://codeberg.org/vermaarp">
                    {" "}
                    <SiCodeberg />
                  </a>
                </span>
              </span>
            </div>
          </div>
          <hr className="my-8 w-full border-black" />
          <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
            <div className=" text-black  flex justify-between">
              {/* decs  */}
              <p className="w-1/3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur officia optio unde nesciunt! Soluta laborum explicabo
                sunt, reiciendis repudiandae porro incidunt rem vel qui magni
                esse temporibus, fugiat dolorem ducimus!
              </p>

              {/* links  */}
              <div className="mb-8 lg:mb-0">
                <ul className="flex flex-col space-y-4 text-[14px] font-medium text-black">
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Footer;
