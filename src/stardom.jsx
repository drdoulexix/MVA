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
import music from "./assets/icons8-music.png";
import movie from "./assets/icons8-movie.png";
import dress from "./assets/icons8-dress.png";
import dance from "./assets/icons8-dancing.png";
import wheelchair from "./assets/wheelchair.png";
import metal from "./assets/metalHand.png";
import bell from "./assets/bell.png";
import handshake from "./assets/handshake.png";
import tv from "./assets/icons8-television.png";
import mic from "./assets/icons8-microphone.png";
import brand from "./assets/icons8-brand.png";
import cash from "./assets/icons8-dollar.png";
import star from "./assets/icons8-star.png";
import compass from "./assets/icons8-compass.png";

const Stardom = () => {
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
        <section className="bg-black text-white h-[300px] w-full flex flex-col stardomcta md:h-[200px] ">
          <div className="backdrop-blur-[7px] h-full">
            <div className="inline-flex h-[50px] justify-between w-full md:h-[20px]">
              <button
                className="rounded-[10px] h-[5px] md:cursor-pointer border-white border-2 p-2 rounded-[10px] h-[45px]"
                onClick={toggleSlide}
              >
                <img src={menu} alt="Menu" />
              </button>

              <img src={logo} alt="Logo" className="h-[35px] md:h-[55px]" />
            </div>

            <div className="bolder p-2 text-center">
              <h1 className="text-2xl md:text-3xl">
                Rise to Fame — Talent Hunt 2027
              </h1>
              <span>Gateway to Merit and Value Awards</span>
            </div>
            <div className="flex justify-center">
              <Link className="button-theme bolder">Register now</Link>
            </div>
          </div>
        </section>
      </div>

      {/* About the event */}
      <section className=" p-[30px]">
        <h1 className="mb-[20px] text-slate-500 bolder2 text-center text-2xl md:text-3xl">
          About the event
        </h1>
        <p className="light2 text-center text-xl md:text-2xl text-slate-700">
          Merit and Value Awards proudly presents
          <b> “Rise to Fame” Talent Hunt 2027</b> — a groundbreaking and
          inclusive platform designed to discover, nurture, and celebrate
          exceptional talents in Maiduguri.This initiative merges two powerful
          visions: discovering emerging stars and promoting inclusion by
          creating equal opportunities for persons living with disabilities.
          More than just a competition, Rise to Fame is a life-changing movement
          — transforming raw talent into recognised excellence, while redefining
          societal perceptions about ability, creativity, and success.
        </p>
      </section>
      {/* Competition Categories */}
      <section className="bg-blue-100">
        <header className="p-3">
          <h1 className=" text-gray-600 mb-[20px] mt-[30px] bolder text-center text-2xl md:text-3xl">
            Competition Categories
          </h1>
          <h2 className="mb-[20px] text-[#64748B] text-center text-xl md:text-2xl">
            What you can compete in
          </h2>
        </header>
        <div className="grid justify-center items-center text-center gap-[30px] md:flex">
          <div className="w-[200px] h-[150px] bg-yellow-300 rounded-[30px] ">
            <div className="card-img">
              <img src={music} alt="Icon" />
            </div>
            <span className="bolder2 text-[#334155]">
              Music, rapping, instrumentals
            </span>
          </div>

          <div className="w-[200px] h-[150px] p-2 bg-orange-400 rounded-[20px] shadow-lg shadow-[0px_5px_70px_70px_70px_#FFFF]">
            <div className="card-img">
              <img src={dance} alt="Icon" />
            </div>
            <span className="bolder2 text-[#334155]">Dancing</span>
          </div>

          <div className="w-[200px] h-[150px] p-2 bg-blue-300 rounded-[30px] shadow-lg shadow-[0px_5px_70px_70px_70px_#FFFF]">
            <div className="card-img">
              <img src={movie} alt="Icon" />
            </div>
            <span className="bolder2 text-[#334155]">
              Filming and storytelling
            </span>
          </div>

          <div className="w-[200px] h-[150px] p-2 bg-red-300 rounded-[30px] shadow-lg shadow-[0px_5px_70px_70px_70px_#FFFF]">
            <div className="card-img">
              <img src={dress} alt="Icon" />
            </div>
            <span className="bolder2 text-[#334155]">Fashion design</span>
          </div>
        </div>

        <div className="text-center mt-5 p-3">
          <span className="text-slate-600">
            Open to participants with or without disabilities
          </span>
        </div>
      </section>

      {/* Who can participate */}

      <section className="p-4 light2">
        <h1 className=" text-slate-600 text-center mb-[20px] mt-[30px] bolder2 text-2xl md:text-3xl">
          Who can Participate
        </h1>

        <div className="flex justify-center items-center">
          <ul className="grid grid-col-1 list-disc list-inside text-start gap-3 text-xl md:3xl">
            <li>Youths aged 15 – 29</li>
            <li>Persons living with disabilities</li>
            <li>Creative talents seeking exposure and recognition</li>
            <li>Entertainment enthusiasts and aspiring professionals</li>
          </ul>
        </div>
      </section>

      <div className="text-center grid gap-5 md:text-2xl p-4 bg-gray-200">
        <h1 className=" text-slate-600 text-center mb-[20px] mt-[30px] bolder2 text-2xl md:text-3xl">
          Event Structure
        </h1>
        <div className="text-xl grid justify-center items-center gap-7 md:2xl">
          <dl>
            <dt>
              <span className="bolder2 text-slate-700">
                <b>Stage 1: Registrations and auditions</b>
              </span>
            </dt>
            <dd>
              <ul className="light2 list-disc text-start list-inside">
                <li>Online and physical registration available</li>
                <li>Online audition sessions</li>
                <li>Screening by a panel of professional judges</li>
              </ul>
            </dd>
          </dl>

          <dl>
            <dt>
              <span className="bolder2 text-slate-700">
                <b>Stage 2: Grand Finale</b>
              </span>
            </dt>
            <dd>
              <ul className="light2 list-disc list-inside text-start">
                <li>Live performances by finalists</li>
                <li>Celebrity judges and guest artists</li>
                <li>Red carpet experience</li>
                <li>Winner announcement — Best Stage Performance</li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>

      {/* Lucide.dev for the icons */}
      {/* Accessibility and Commitment */}
      <section className="p-3 light-2">
        <h1 className=" text-slate-600 text-center mt-[30px] bolder2 text-2xl md:text-3xl">
          Built for everyone
        </h1>

        <div className="mt-[30px]">
          <dl>
            <dt className="text-xl text-center">
              Rise to Fame is committed to full accessibility. Our event will
              provide:
            </dt>
            <dd className="mt-4 grid">
              <ul className="grid justify-center items-center gap-3">
                <li className="inline-flex gap-2 ">
                  <img src={wheelchair} alt="wheelchair" />
                  <span>Wheelchair-accessible venue</span>
                </li>

                <li className="inline-flex gap-2 ">
                  <img src={metal} alt="Icon" />
                  <span>Sign language interpreters</span>
                </li>

                <li className="inline-flex gap-2 ">
                  <img src={bell} alt="Icon" />
                  <span>Accessible facilities throughout</span>
                </li>

                <li className="inline-flex gap-2 ">
                  <img src={handshake} alt="Icon" />
                  <span>Trained support staff and volunteers</span>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </section>

      <section className="p-3 light bg-blue-100 mt-[40px]">
        <h1 className=" text-slate-600 text-center mt-[30px] bolder2 text-2xl md:text-3xl">
          What participants will gain
        </h1>
        {/* icons8.com for the icons */}
        <div className=" p-4 mt-4 grid justify-center items-center text-center gap-[30px] md:flex">
          <div className="w-[200px] h-[150px] bg-blue-500 rounded-[30px] ">
            <div className="card-img">
              <img src={tv} alt="Icon" />
            </div>
            <span className="bolder2 text-[#334155]">
              Media exposure
              <br />
              (Social media, TV)
            </span>
          </div>

          <div className="w-[200px] h-[150px] bg-orange-400 rounded-[30px] ">
            <div className="card-img">
              <img src={mic} alt="Icon" />
            </div>
            <span className="bolder2 text-[#334155]">
              Live performance oppurtunities
            </span>
          </div>

          <div className="w-[200px] h-[150px] bg-orange-100 rounded-[30px] ">
            <div className="card-img">
              <img src={brand} alt="Icon" />
            </div>
            <span className="bolder2 text-[#334155]">Brand Recognition</span>
          </div>

          <div className="w-[200px] h-[150px] bg-green-100 rounded-[30px] ">
            <div className="card-img">
              <img src={cash} alt="Icon" />
            </div>
            <span className="bolder2 text-[#334155]">
              Cash prizes and awards
            </span>
          </div>

          <div className="w-[200px] h-[150px] bg-red-200 rounded-[30px] p-3 ">
            <div className="card-img">
              <img src={handshake} alt="Icon" className="h-[60px]" />
            </div>
            <span className="bolder2 text-[#334155]">
              Endorsement and sponsorship deals
            </span>
          </div>

          <div className="w-[200px] h-[150px] bg-black rounded-[30px] ">
            <div className="card-img">
              <img src={star} alt="Icon" />
            </div>
            <span className="bolder2 text-[#ffffff]">
              Talent management oppurtunities
            </span>
          </div>

          <div className="w-[200px] h-[150px] bg-green-300 rounded-[30px] ">
            <div className="card-img">
              <img src={compass} alt="Icon" />
            </div>
            <span className="bolder2 text-[#334155]">
              Confidence, visibility and clear direction
            </span>
          </div>
        </div>
      </section>

      {/* CTA section */}

      <section className="bg-gray-700 p-4 text-center text-white">
        <h1 className=" mt-[30px] bolder text-2xl md:text-3xl">
          Ready to rise ?
        </h1>

        <p className="mt-3 light">
          Don’t miss your chance to step into the spotlight. Registration is
          open to all eligible participants.
        </p>
        <div className="grid justify-center items-center md:flex gap-5">
          <Link className="button-theme bolder">Register</Link>
          <Link className=" bg-white bolder text-black p-3 rounded-[20px]">
            Accessibility
          </Link>
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

export default Stardom;
