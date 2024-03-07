import React from "react";
import Link from "next/link";

function Header() {
  return (
    <main className="flex flex-col items-center justify-between  ">
      <div className="max-w-8xl w-full items-center justify-between text-sm lg:flex p-2  border border-black py-5 bg-[#fdfff9] ">
        <div className="w-full">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:px-0">
            {/* logo  */}
            <Link href="/">
              <h1 className="text-2xl text-black font-semibold">LOGO</h1>
            </Link>

            {/* menu  */}
            <div>
              <ul className="text-xltext-black flex gap-10 uppercase">
                <Link href="/pages/pageOne">
                  <li className="cursor-pointer hover:text-red-500 duration-300">
                    User
                  </li>
                </Link>
                <Link href="/pages/pageTwo">
                  <li className="cursor-pointer hover:text-red-500 duration-300">
                    Page 2
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
