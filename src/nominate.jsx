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

const Nominate = () => {
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
        <section className="bg-black text-center text-white h-[200px] w-full flex flex-col md:h-[200px] bolder">
          <div className="inline-flex h-[50px] justify-between w-full md:h-[20px]">
            <button
              className="rounded-[10px] h-[5px] md:cursor-pointer border-white border-2 p-2 rounded-[10px] h-[45px]"
              onClick={toggleSlide}
            >
              <img src={menu} alt="Menu" />
            </button>

            <img src={logo} alt="Logo" className="h-[35px] md:h-[55px]" />
          </div>

          <header className="p-3 text-xl md:text-3xl">
            <h1>Nominations will be available soon</h1>
            <br />
            {/* <h2 className="light">
              Know someone extraordinary? Let the world know.
            </h2> */}
          </header>
        </section>
      </div>

      {/* <section className="p-3">
        <div className="w-[350px] light p-[40px]  shadow-lg mx-auto shadow-[4px_5px_10px_20px_40px_#FFFF] rounded-[13px] md:w-[80%]">
          <h1 className="bolder text-[15px] text-slate-600 mb-4 text-center md:text-2xl">
            Nominate for the Merit and Value Awards
          </h1>
          <form action="" className="flex flex-col gap-2">
            <label htmlFor="Name">Name</label>

            <input
              type="text"
              className="border-1 border-[#BCC6CC] w-[96%] rounded-[10px] p-1"
              placeholder="Full name"
            />

            <label htmlFor="email">Email</label>

            <input
              type="text"
              className="border-1 border-[#BCC6CC] w-[96%] rounded-[10px] p-1"
              placeholder="Email"
            />

            <label htmlFor="email">Phone Number</label>

            <input
              type="tel"
              className="border-1 border-[#BCC6CC] w-[96%] rounded-[10px] p-1"
              placeholder="Phone Number"
            />

            <label htmlFor="email">Nominee's full name</label>

            <input
              type="text"
              className="border-1 border-[#BCC6CC] w-[96%] rounded-[10px] p-1"
              placeholder="Nominee"
            />

            <label htmlFor="email">Nominee's phone Number</label>

            <input
              type="tel"
              className="border-1 border-[#BCC6CC] w-[96%] rounded-[10px] p-1"
              placeholder="Number"
            />

           <div className="flex justify-between shadow-lg shadow-[0_5px_70px_70px_70px_#FFFF] mt-4 rounded-[20px] p-3">
             <label htmlFor="AwardCategoty" className="text-slate-500 bolder">Award Category</label>

            <select id="AwardCategory">
                <option value=""></option>
            </select>
           </div>
            <button className="bolder p-2 mt-3 w-[60%] bolder2 bg-yellow-300 rounded-[10px] text-[#334155] block mx-auto cursor-pointer hover:bg-yellow-400 transition-all duration-200">
              Submit
            </button>
          </form>
        </div>
      </section> */}
    </>
  );
};

export default Nominate;
