import React from "react";

function Footer() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <div className="max-w-8xl w-full items-center justify-between text-sm lg:flex p-2  border py-5 bg-slate-50 ">
        <footer className="w-full">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:px-0">
            <div className="inline-flex items-center">
              {/* logo  */}
              <span className="ml-4 text-lg font-bold">LOGO</span>
            </div>
          </div>
          <hr className="my-8" />
          <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
            <div className=" text-gray-700  flex justify-between">
             
              <p className="w-1/3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur officia optio unde nesciunt! Soluta laborum explicabo
                sunt, reiciendis repudiandae porro incidunt rem vel qui magni
                esse temporibus, fugiat dolorem ducimus!
              </p>
           
              <div className="">
             
                <div  className="mb-8 lg:mb-0">
                  <p className="mb-6 text-lg font-semibold text-gray-700 ">
                    Company
                  </p>
                  <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                   
                  </ul>
                </div>
            
            </div>
            </div>
            
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Footer;
