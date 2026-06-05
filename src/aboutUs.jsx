import React from "react";
import { useState } from "react";
import { list } from "./App.jsx";
import "./index.css";
import back from "./assets/back.png";
import menu from "./assets/menu.png";
import { Link } from "react-router-dom";
import card1 from "./assets/icons8-medal.png";
import card2 from "./assets/icons8-lightbulb.png";
import card3 from "./assets/icons8-handshake.png";
import logo from "./assets/logo.png";
import fb from "./assets/icons8-fb.svg";
import ig from "./assets/icons8-ig.svg";
import x from "./assets/icons8-x-50.png";
import youtube from "./assets/icons8-youtube.png";
import tiktok from "./assets/icons8-tiktok-50.png";

const AboutUs = () => {
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

        {/* body section */}
        <section className="h-[200px] bg-[url('./assets/AboutHero.jpg')] md:bg-cover w-[100vw] h-[150px]">
          <div className="inline-flex h-[50px] justify-between w-full md:h-[20px]">
            <button
              className="rounded-[10px] h-[5px] md:cursor-pointer border-white border-2 p-2 rounded-[10px] h-[45px]"
              onClick={toggleSlide}
            >
              <img src={menu} alt="Menu" />
            </button>

            <img src={logo} alt="Logo" className="h-[35px] md:h-[55px]" />
          </div>
          <header className="text-center text-2xl bolder text-white">
            <h1> About Merits and value Awards</h1>
            <br />
            <h2 className="light text-[17px]">
              Our Story, Our Mission, Our Vision
            </h2>
          </header>
        </section>
      </div>
      {/* body section */}
      <section className="light2 p-[30px] text-center bg-[#E5E7EB] md:text-xl">
        <p>
          Merit and Value Awards is a reputable platform based in Maiduguri,
          Nigeria, committed to celebrating excellence, creativity, culture, and
          innovation. We recognize individuals and organizations that are making
          meaningful impact across the entertainment and creative industries, in
          entrepreneurship, and in community development. Our annual awards
          ceremony brings together artists, industry stakeholders, and community
          members to honour exceptional achievements, promote creative
          expression and diversity, and inspire the next generation of talents.
          Maiduguri has seen a growing wave of young and seasoned talents in
          recent years — musicians, artists, and content creators making notable
          strides. Yet many lack the visibility and recognition they deserve.
          Merit and Value Awards was founded to bridge that gap: to provide a
          platform where talent is celebrated, acknowledged, and elevated.
        </p>
      </section>

      {/* mission and vision */}
      <section className=" light bg-blue-100">
        <div className="p-4 text-center">
          <h1 className="bolder text-2xl ">Mission</h1>
          <p>
            To discover, celebrate, and empower exceptional talent — championing
            excellence, inclusion, and creativity in Maiduguri and across
            Nigeria.
          </p>
        </div>
        <div className=" p-4 text-center ">
          <h1 className="bolder text-2xl">Vision</h1>
          <p>
            To become the leading platform for inclusive talent recognition in
            Nigeria, creating pathways for artists, creatives, and innovators to
            gain the visibility and opportunities they deserve.
          </p>
        </div>
      </section>
      {/* Core values */}
      <section className="p-[30px] light2 bg-orange-100">
        <h1 className="text-3xl bolder2 text-center ">Core Values</h1>
        {/* Card Container */}
        <div className="grid mt-[40px] justify-center items-center md:flex justify-around gap-10">
          {/* Cards */}
          <div className=" bg-[#ADD8E6] shadow-lg shadow-[5px_5px_70px_70px_70px_#FFFF] w-[350px] h-[250px] p-3 rounded-[20px]">
            <div className="card-img ">
              <img src={card1} alt="card" className="h-[150px]" />
            </div>
            <div className="text-center">
              <span className="bolder2 text-[#334155] text-2xl">
                Excellence
              </span>
            </div>
          </div>

          <div className=" bg-[#6EE7B7] shadow-lg shadow-[5px_5px_70px_70px_70px_#FFFF] w-[350px] h-[250px] p-3 rounded-[20px]">
            <div className="card-img ">
              <img src={card2} alt="card" className="h-[150px]" />
            </div>
            <div className="text-center">
              <span className="bolder2 text-[#334155] text-2xl">
                Innovation
              </span>
            </div>
          </div>

          <div className=" bg-[#FACC15] shadow-lg shadow-[5px_5px_70px_70px_70px_#FFFF] w-[350px] h-[250px] p-3 rounded-[20px]">
            <div className="card-img ">
              <img src={card3} alt="card" className="h-[120px]" />
            </div>
            <div className="text-center">
              <span className="bolder2 text-[#334155] text-2xl">Inclusion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}

      <section className="p-4">
        <h1 className="text-center bolder2 text-2xl">Our programs</h1>

        <div className="p-4">
          <h1 className="bolder2 text-xl"> Annual Awards Ceremony </h1>
          <p>
            Our flagship event celebrates the best in music, film, fashion,
            humanitarian work, digital content, and more. Each year, we bring
            together the brightest names and rising stars in Maiduguri for a
            night of glamour, recognition, and inspiration.
          </p>
        </div>

        <div className="p-4">
          <h1 className="bolder2 text-xl"> Rise to Fame Talent Hunt </h1>
          <p>
            A groundbreaking talent discovery competition designed to find and
            nurture exceptional talent — with a bold commitment to inclusivity
            for persons living with disabilities. Participants compete in music,
            dance, fashion design, storytelling, and visual arts.
          </p>
        </div>

        <div className="p-4">
          <h1 className="bolder2 text-xl"> Community Engagement </h1>
          <p>
            Beyond the events, we partner with NGOs, advocacy groups, schools,
            and corporate organisations to promote creative education, youth
            empowerment, and social inclusion.
          </p>
        </div>
      </section>

      {/* The team */}

      <section className="p-3 bg-gray-100 ">
        <h1 className="bolder2 text-2xl text-center mt-[30px]">
          {" "}
          Meet the team{" "}
        </h1>

        <div className="mt-[30px] border-2 border-black h-[150px]"></div>
      </section>

      {/* Footer section */}

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
                  <button className="header-button">{item.name}</button>
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

export default AboutUs;
