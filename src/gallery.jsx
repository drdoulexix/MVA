import logo from "./assets/logo.png";
import fb from "./assets/icons8-fb.svg";
import ig from "./assets/icons8-ig.svg";
import x from "./assets/icons8-x-50.png";
import youtube from "./assets/icons8-youtube.png";
import tiktok from "./assets/icons8-tiktok-50.png";
import "./index.css";
import back from "./assets/back.png";
import menu from "./assets/menu.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { list } from "./App.jsx";
import img1 from "./assets/img1.JPG";
import img2 from "./assets/img2.JPG";
import img3 from "./assets/img3.JPG";
import img4 from "./assets/img4.JPG";
import img5 from "./assets/img5.JPG";
import img6 from "./assets/img6.JPG";
import img7 from "./assets/img7.JPG";
import img8 from "./assets/img8.JPG";
import img9 from "./assets/img9.JPG";
import img10 from "./assets/img10.JPG";
import img11 from "./assets/img11.JPG";
import img12 from "./assets/img12.JPG";
import img13 from "./assets/img13.JPG";
import img14 from "./assets/img14.JPG";
import award1 from "./assets/award1.JPG";
import vid1 from "./assets/vid1.MP4";
import vid2 from "./assets/vid2.MP4";

const Gallery = () => {
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

        <section className="bg-black text-white h-[150px] w-full flex flex-col ">
          <div className="inline-flex h-[50px] justify-between w-full md:h-[20px]">
            <button
              className="rounded-[10px] h-[5px] md:cursor-pointer border-white border-2 p-2 rounded-[10px] h-[45px]"
              onClick={toggleSlide}
            >
              <img src={menu} alt="Menu" />
            </button>

            <img src={logo} alt="Logo" className="h-[35px] md:h-[55px]" />
          </div>
          <div className="grid justify-center items-center h-[170px]">
            <header>
              <h1 className="text-2xl text-center mb-2 bolder md:text-4xl ">
                Gallery
              </h1>
              <h2 className="mt-[30px]">Moments of excellence, captured</h2>
            </header>
          </div>
        </section>
      </div>

      <section className=" text-center p-4">
        <h1 className="text-xl text-slate-500 text-center mb-2 bolder2 md:text-4xl ">
          Merit and Value Awards 2025 — Highlights
        </h1>
        <div className="border-none p-3 border-slate-400 grid grid-cols-1 gap-4 md:grid-cols-3 border-2 border-dashed">
          <img src={img1} alt="image" />
          <img src={img2} alt="image" />
          <img src={img3} alt="image" />
          <img src={img4} alt="image" />
          <img src={img5} alt="image" />
          <img src={img6} alt="image" />
          <img src={img7} alt="image" />
          <img src={img8} alt="image" />
          <img src={img9} alt="image" />
          <img src={img10} alt="image" />
          <img src={img11} alt="image" />
          <img src={img12} alt="image" />
          <img src={img13} alt="image" />
          <img src={img14} alt="image" />
          <img src={award1} alt="image" />
        </div>

        <div className="">
          <h1 className="text-xl text-slate-500 text-center mb-2 bolder2 md:text-4xl ">
            Videos
          </h1>

          <div className="grid gap-5 md: flex flex-col items-center justify-center">
            <video src={vid2} controls></video>
            <video src={vid1} controls></video>
          </div>
        </div>
      </section>
      {/* Rise to fame section */}
      <section className="p-[30px]">
        <h1 className="text-xl text-slate-500 text-center mb-2 bolder2 md:text-4xl ">
          Rise to Fame Talent Hunt — Audition & Event Highlights
        </h1>

        <div className="h-[350px] w-full border-dashed p-3 border-slate-400 grid grid-cols-1 gap-4 md:grid-cols-3 border-2 border-dashed"></div>
      </section>
      <footer className="bg-black text-white text-center p-5">
        <div className="p-[40px]  grid gap-[30px] justify-center items-center md:flex">
          <div className="w-[430px] flex flex-col gap-[30px] text-center items-center">
            <img src={logo} alt="Logo" className="h-[30px]" />
            <span>Celebratng excellence and inspiring change</span>
          </div>

          <div className="w-[430px] flex flex-col gap-[30px] text-center items-center">
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
export default Gallery;
