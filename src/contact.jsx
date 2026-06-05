import logo from "./assets/logo.png";
import fb from "./assets/icons8-fb.svg";
import ig from "./assets/icons8-ig.svg";
import x from "./assets/icons8-x2.png"; //note that the x2 import is different
import youtube from "./assets/icons8-youtube.png";
import tiktok from "./assets/icons8-tiktok2.png";
import "./index.css";
import back from "./assets/back.png";
import menu from "./assets/menu.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { list } from "./App.jsx";
import email from "./assets/icons8-email.png";
import location from "./assets/icons8-location.png";
import telephone from "./assets/icons8-telephone.png";
import time from "./assets/icons8-time.png";

const ContactUs = () => {
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
            <h1 className=" bolder text-2xl md:text-3xl">Contact us</h1>

            <span className="light text-xl">We'd love to hear from you</span>
          </header>
        </section>
      </div>
      <section className="p-4 text-center">
        <h1 className="text-slate-500 bolder2 text-2xl mb-[40px] md:text-4xl">
          Contact information
        </h1>
        <div className="card-divs">
          <div className="general-card2 bg-yellow-200">
            <div className="card-img">
              <img src={location} alt="card" />
            </div>
            <span className="bolder text-[#332155]">
              Maiduguri, Borno State, Nigeria
            </span>
          </div>

          <div className="general-card2 bg-blue-200">
            <div className="card-img">
              <img src={email} alt="card" />
            </div>
            <span className="bolder text-[#332155]">
              ***********************
            </span>
          </div>

          <div className="general-card2 bg-green-200">
            <div className="card-img">
              <img src={telephone} alt="card" />
            </div>
            <span className="bolder text-[#332155]">
              ************************
            </span>
          </div>

          <div className="general-card2 bg-gray-200">
            <div className="card-img">
              <img src={time} alt="card" />
            </div>
            <span className="bolder text-[#332155]">
              Monday – Friday, 9:00am – 5:00pm
            </span>
          </div>
        </div>
      </section>

      <section className="p-4 text-center">
        <h1 className="text-slate-500 bolder2 text-2xl mb-[40px] md:text-4xl">
          Social media links
        </h1>

        <div className="inline-flex justify-center">
          <Link>
            <img src={ig} alt="Instagram" />
          </Link>

          <Link>
            <img src={fb} alt="Facebook" />
          </Link>

          <Link>
            <img src={tiktok} alt="Tiktok" className="h-[50px]" />
          </Link>

          <Link>
            <img src={youtube} alt="Youtube" className="h-[50px]" />
          </Link>

          <Link>
            <img src={x} alt="Twitter " className="h-[50px]" />
          </Link>
        </div>
      </section>

      <section className="p-4 text-center">
        <h1 className="text-slate-500 bolder2 text-2xl mb-[40px] md:text-4xl">
          Sponsorship & Donation Payments
        </h1>
        <span className="text-xl md:text-2xl">
          To support Merit and Value Awards directly, kindly use the details
          below:
        </span>

        <ul className="grid list-disc list-inside mb-4">
          <li>
            <b>Account Name:</b> Jane Francis
          </li>
          <li>
            <b>Account number:</b>0084391253
          </li>
          <li>
            <b>Bank:</b>Access bank
          </li>
        </ul>
        <i>
          Please send proof of payment to our email after making a transfer.
        </i>
      </section>
      {/* Footer */}
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

export default ContactUs;
