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

const Sponsors = () => {
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
              <h1 className="text-xl text-center bolder md:text-3xl ">
                Why partner with Merit and value awards
              </h1>
            </header>
          </div>
        </section>
      </div>

      <section className="light2  p-3 text-[#334155] text-center mt-3 md:mt-5">
        <p className="text-2xl">
          Merit and Value Awards is more than an event — it is a movement. By
          partnering with us, your brand stands alongside a platform that
          celebrates creativity, champions inclusion, and reaches thousands of
          engaged, passionate Nigerians. Our audience spans entertainment
          professionals, youth creatives, community leaders, NGOs, media houses,
          and corporate organisations — making it one of the most diverse and
          dynamic platforms in Maiduguri.
        </p>
      </section>

      <section className="mt-3 p-[30px] bg-slate-100">
        <h1 className="text-2xl text-center text-slate-500 bolder2 md:text-3xl ">
          What you get as a sponsor
        </h1>

        <div className="mt-5 text-center text-xl text-[#334155] light2 md:text-2xl">
          <ul className="grid justify-center items-center  text-start gap-2 list-disc list-inside">
            <li>Strong Corporate Social Responsibility (CSR) impact</li>
            <li>Brand visibility and recognition across all platforms</li>
            <li>
              Logo placement on promotional materials (banners, programmes,
              tickets)
            </li>
            <li>Social media mentions and media exposure</li>
            <li>Product placement opportunities at the event</li>
            <li>Stage branding and mentions during the ceremony</li>
            <li>Direct engagement with youth and creative markets</li>
            <li>Association with a credible, purpose-driven platform</li>
          </ul>
        </div>
      </section>

      <section className="p-[30px]">
        <h1 className="text-2xl text-center text-slate-500 bolder2 md:text-3xl">
          Sponsorship tiers
        </h1>
        <div className="mt-[30px]">
          <table className=" w-full h-full overflow-x-scroll">
            <thead className="bolder text-slate-500 bg-blue-100">
              <tr>
                <th className="p-2 border-b border-blue-100">Tier</th>
                <th className="p-2 border-b border-blue-100">Benefits</th>
                <th className="p-2 border-b border-blue-100">Amounts</th>
              </tr>
            </thead>
            <tbody>
              <tr className="w-full light overflow-x-scroll">
                <td className="p-2 bolder text-center ">Platinum Sponsor</td>
                <td className="text-[10px] text-center light md:text-[20px]">
                  All benefits + headline naming rights, VIP seating,
                  fullContact media integration
                </td>
                <td>Contact us</td>
              </tr>

              <tr className="bg-blue-100">
                <td className="p-2 bolder text-center">Gold Sponsor</td>
                <td className="text-[10px] text-center light md:text-[20px]">
                  Logo on all materials, stage mention, social media
                  feature,Contact VIP tickets
                </td>
                <td>Contact us</td>
              </tr>

              <tr className="">
                <td className="p-2 bolder text-center">Silver Sponsor</td>
                <td className="text-[10px] text-center light md:text-[20px]">
                  Logo on select materials, social media mention,
                  standardContact tickets
                </td>
                <td>Contact us</td>
              </tr>

              <tr className=" bg-blue-100">
                <td className="p-2 bolder text-center">Community Supporter</td>
                <td className="text-[10px] text-center light md:text-[20px]">
                  Brand mention in programme, social media shoutout
                </td>
                <td>Contact us</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Current sponsors and partners */}

      <section className="p-[40px] bg-black text-white">
        <h1 className="text-2xl text-center bolder2 md:text-3xl">
          Current sponsors and partners
        </h1>
        {/* for current sponsors */}
        <div className="border-white border-2 h-[200px]"></div>

        <div className="mt-4">
          <h1 className="text-2xl text-center bolder2 md:text-3xl">
            Current sponsors and partners
          </h1>
        </div>
        <div className="mt-[30px]">
          <h2 className="text-xl text-center bolder2 md:text-2xl">
            Ready to make an impact ?
          </h2>
          <div className="p-4 h-[100px] flex justify-center items-center">
            <Link className="button-theme bolder2 ">Contact us to sponsor</Link>
          </div>

          <div className="text-white grid items-center justify-center"></div>
           <h2 className="text-xl text-center bolder">
            Account Details (for direct sponsorship payments):
          </h2>

          <ul className="mt-4 grid list-disc list-inside grid justify-center items-center gap-3">
            <li>Account Name: Jane Francis</li>
            <li>Account Number: 0084391253</li>
            <li>Bank: Access Bank</li>
          </ul>
        </div>
      </section>

      <footer className="bg-black text-white text-center p-5">
              <div className="p-[40px] flex flex-col gap-[30px] justify-center items-center md:flex">
                <div className="w-full grid items-center justify-center">
                  <img src={logo} alt="Logo" className="h-[30px] mx-auto" />
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

export default Sponsors;
