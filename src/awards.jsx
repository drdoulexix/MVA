import React from "react";
import { useState } from "react";
import { list } from "./App.jsx";
import "./index.css";
import back from "./assets/back.png";
import menu from "./assets/menu.png";
import { Link } from "react-router-dom";
import music from "./assets/icons8-music.png";
import movie from "./assets/icons8-movie.png";
import dress from "./assets/icons8-dress.png";
import card2 from "./assets/icons8-lightbulb.png";
import phone from "./assets/icons8-phone.png";
import charity from "./assets/icons8-charity.png";
import dance from "./assets/icons8-dancing.png";
import logo from "./assets/logo.png";
import fb from "./assets/icons8-fb.svg";
import ig from "./assets/icons8-ig.svg";
import x from "./assets/icons8-x-50.png";
import youtube from "./assets/icons8-youtube.png";
import tiktok from "./assets/icons8-tiktok-50.png";
import award1 from "./assets/award1.JPG";
import award2 from "./assets/award2.JPG";
import award3 from "./assets/award3.JPG";

const Awards = () => {
  const [slide, setSlide] = useState(false);

  const toggleSlide = () => {
    setSlide(!slide);
  };

  return (
    <>
      <div className="flex">
        {/* Aside section */}
        <aside className={`heading ${slide ? "slide-in" : "slide-out"}`}>
          <ul className="list">
            <button className="menu " onClick={toggleSlide}>
              <img src={back} alt="Back" />
            </button>
            {list.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="header-button">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <section className="w-full bg-black text-white p-3 h-[170px] md:text-3xl">
          <div className="inline-flex h-[50px] justify-between w-full md:h-[20px]">
            <button
              className="rounded-[10px] h-[5px] md:cursor-pointer border-white border-2 p-2 rounded-[10px] h-[45px]"
              onClick={toggleSlide}
            >
              <img src={menu} alt="Menu" />
            </button>

            <img src={logo} alt="Logo" className="h-[35px] md:h-[55px]" />
          </div>
          <header className="text-center">
            <h1 className=" bolder text-2xl">Award categories</h1>

            <span className="light">
              Recognizing Excellence Across Industries
            </span>
          </header>
        </section>
      </div>

      <section className="text-center p-2">
        <h1 className="bolder2 text-2xl md:text-3xl mt-[20px]">Introduction</h1>
        <p className="light2 text-3xl text-slate-600">
          The Merit and Value Awards Ceremony honours outstanding achievement
          across a wide range of categories. From music and film to
          entrepreneurship and humanitarian service, we celebrate the
          individuals and organisations shaping the future of Maiduguri and
          Nigeria.
        </p>
      </section>

      {/* Categories */}
      <section className="text-center mt-[40px] bg-slate-100 p-4 md:p-[40px]">
        <h1 className="mt-4 mb-4 bolder2 text-3xl text-slate-500">Award Categories</h1>
        <div className="grid gap-5 md:flex justify-around items-center ">
          <div className="w-[200px] h-[150px] bg-yellow-300 rounded-[30px] p-3 ">
            <div className="card-img">
              <img src={music} alt="Icon" />
            </div>
            <span className="bolder2">Best music artist</span>
          </div>

          <div className="w-[200px] h-[150px] p-2 bg-blue-300 rounded-[30px] shadow-lg shadow-[0px_5px_70px_70px_70px_#FFFF]">
            <div className="card-img">
              <img src={movie} alt="Icon" />
            </div>
            <span className="bolder2">Best in filming</span>
          </div>

          <div className="w-[200px] h-[150px] p-2 bg-red-300 rounded-[30px] shadow-lg shadow-[0px_5px_70px_70px_70px_#FFFF]">
            <div className="card-img">
              <img src={dress} alt="Icon" />
            </div>
            <span className="bolder2">Best in fashion</span>
          </div>

          <div className="w-[200px] h-[150px] p-2 bg-orange-300 rounded-[30px] shadow-lg shadow-[0px_5px_70px_70px_70px_#FFFF]">
            <div className="card-img">
              <img src={card2} alt="Icon" />
            </div>
            <span className="bolder2">Best entrepreneur</span>
          </div>

          <div className="w-[200px] h-[150px] p-2 bg-purple-400 rounded-[30px] shadow-lg shadow-[0px_5px_70px_70px_70px_#FFFF]">
            <div className="card-img">
              <img src={phone} alt="Icon" />
            </div>
            <span className="bolder2 text-[15px] text-[#33]">
              Best content creator
            </span>
          </div>

          <div className="w-[200px] h-[150px] bg-green-300 rounded-[30px] shadow-lg shadow-[0px_5px_70px_70px_70px_#FFFF]">
            <div className="card-img">
              <img src={charity} alt="Icon" />
            </div>
            <span className="bolder2">Best Humanitarian</span>
          </div>

          <div className="w-[200px] h-[150px] p-2 bg-orange-400 rounded-[20px] shadow-lg shadow-[0px_5px_70px_70px_70px_#FFFF]">
            <div className="card-img">
              <img src={dance} alt="Icon" />
            </div>
            <span className="bolder2">Best Performance</span>
          </div>
        </div>
      </section>
      {/* Nominee selection */}
      <section className="mt-[40px] bg-black text-white text-center">
        <div className="grid">
          <div>
            <h1 className="bolder mt-[40px] text-3xl mb-[30px]">
              How nominees are selected
            </h1>
            <p className="text-xl">
              Nominees are identified through public nominations, community
              recommendations, and the decisions of our independent panel of
              professional judges. Final winners are selected based on impact,
              quality of work, community contribution, and overall excellence.
            </p>
          </div>

          <div className=" mt-[40px] flex justify-center items-center bg-[url('/src/assets/cta2.jpg')] no-repeat bg-cover bg-center mt-[30px] h-[300px] ">
            <Link className="button-theme bolder">Nominate someone</Link>
          </div>
        </div>
      </section>

      {/* Past winners*/}

      <section className="p-4 text-center mt-4">
        <h1 className="bolder2 mt-[30px] text-3xl mb-[30px]">Past winners</h1>

        <div className=" mt-[40px] grid gap-5 md:flex justify-evenly">
          <img src={award1} alt="Award" className="h-[250px]" />
          <img src={award2} alt="Award" className="h-[250px]" />
          <img src={award3} alt="Award" className="h-[250px]" />
        </div>
      </section>
      <footer className="bg-black text-white text-center p-5">
        <div className="p-[40px]  grid gap-[30px] justify-center items-center md:flex">
          <div className="w-full flex flex-col gap-[30px] text-center items-center">
            <img src={logo} alt="Logo" className="h-[30px]" />
            <span>Celebratng excellence and inspiring change</span>
          </div>

          <div className="w-full flex flex-col gap-[30px] text-center items-center">
            <ul className="grid gap-[10px]">
              {list.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="header-button">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="inline-flex gap-[30px]">
              <img src={ig} alt="Instagram" className="h-[30px] md:h-[30px]" />
              <img src={fb} alt="Facebook" className="h-[30px] md:h-[30px]" />
              <img src={x} alt="X" className="h-[30px] md:h-[30px]" />
              <img src={tiktok} alt="tiktok" className="h-[30px] md:h-[30px]" />
              <img
                src={youtube}
                alt="youtube"
                className="h-[30px] md:h-[30px]"
              />
            </div>
          </div>
        </div>
        <span>&copy; 2026 Merit and value awards</span>
      </footer>
    </>
  );
};

export default Awards;
