import React from "react";
import heroimage from "../assets/heroimage.png";
import { FiDownload } from "react-icons/fi"

const Home = () => {
  const links = [
    {
      id: 1,
      child: <>resume </>,
      href: "/CletusObosiResume (1)",
      download: true,
    },
  ];

  return (
    <>
      <div name="home" className="h-fit w-full bg-gradient-to-bl from-slate-50 to-slate-400 pt-20">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen px-4 md:flex-row">
          <div className=" flex flex-col justify-center h-full ">
            <h1 className=" mt-2 text-5xl md:text-7xl font-tektur text-slate-600 capitalize">
              hi, <br /> i'm cletus obosi
            </h1>
            <p className=" capitalize tracking-wide py-4 max-w-md text-slate-600 text-xl font-semibold">
              a dedicated and result oriented <br />frontend developer creating great
              user experience and responsive webistes.
            </p>
            <div>
              <div className=" cursor-pointer text-xl capitalize flex  rounded-md bg-red-950 text-white justify-center items-center px-5 mt-2 w-40 bg-gradient-to-r from-amber-300 to-amber-500 hover:text-slate-600 py-3 delay-75 font-tektur">
                <ul>
                  {links.map(({ id, child, href, download }) => (
                    <li key={id}>
                      <a href={href} download={download} target="_blank"className=" flex flex-row">
                        {child}<FiDownload size={20} className=' ml-2 mt-1' />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <img
              src={heroimage}
              alt="my hero profile"
              className=" rounded-full mx-auto w-2/3 md:w-full border-4 border-amber-400"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
