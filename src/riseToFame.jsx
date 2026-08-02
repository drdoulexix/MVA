import logo from "./assets/logo.png";
import fb from "./assets/icons8-fb.svg";
import ig from "./assets/icons8-ig.svg";
import x from "./assets/icons8-x-50.png";
import youtube from "./assets/icons8-youtube.png";
import tiktok from "./assets/icons8-tiktok-50.png";
import "./index.css";
import back from "./assets/back.png";
import menu from "./assets/menu2.jpeg";
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
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="flex">
        {/* Aside section */}
        <aside className={`heading fixed md:static ${slide ? "slide-in" : "slide-out"}`}>
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

        <div className="w-full">
          <section className="bg-black px-4 py-4 text-white md:px-6">
            <button
              className="fixed top-0 left-0 bg-[#999999] rounded-[50%] z-[20] md:cursor-pointer fixed h-[45px] w-[50px] "
              onClick={toggleSlide}
            >
              <img src={menu} alt="Menu" className="ml-3" />
            </button>


            <img src={logo} alt="Logo" className="absolute top-0 right-0 h-[35px] md:h-[55px] p-2 z-[50]" />

            <div className="pt-14 text-center md:pt-8">
              <div className="bolder p-2 text-center">
                <h1 className="text-2xl md:text-3xl">
                  Rise to Fame — Talent Hunt 2027
                </h1>
                <span>Gateway to Merit and Value Awards</span>
              </div>
              <div className="flex justify-center">
                <Link to="/register" className="button-theme bolder">Register now</Link>
              </div>
            </div>
          </section>

          <main className="bg-[radial-gradient(circle_at_top,_rgba(255,180,0,0.16),_transparent_45%)] px-4 py-10 md:px-8 lg:px-12">
            {/* About the event */}
            <section className=" p-[30px]">
              <h1 className="mb-[20px] text-white bolder2 text-center text-2xl md:text-3xl">
                About the event
              </h1>
              <p className="light2 text-center text-xl md:text-2xl text-white">
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
            <section className="bg-blue-100 text-slate-800">
              <header className="p-3">
                <h1 className=" text-slate-700 mb-[20px] mt-[30px] bolder text-center text-2xl md:text-3xl">
                  Competition Categories
                </h1>
                <h2 className="mb-[20px] text-slate-500 text-center text-xl md:text-2xl">
                  What you can compete in
                </h2>
              </header>
              <div className="mt-6 max-w-6xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 items-stretch">
                <div className="bg-yellow-300 rounded-[20px] p-6 flex flex-col items-center text-center shadow-md">
                  <img src={music} alt="Music" className="h-12 w-12 object-contain mb-3" />
                  <h3 className="bolder2">Music, rapping, instrumentals</h3>
                  <p className="mt-2 text-[#334155] leading-6">Showcase vocal and instrumental talent across original and cover works.</p>
                </div>

                <div className="bg-orange-400 rounded-[20px] p-6 flex flex-col items-center text-center shadow-md">
                  <img src={dance} alt="Dance" className="h-12 w-12 object-contain mb-3" />
                  <h3 className="bolder2">Dancing</h3>
                  <p className="mt-2 text-[#334155] leading-6">Solo or group performances judged on creativity, technique and stage presence.</p>
                </div>

                <div className="bg-blue-300 rounded-[20px] p-6 flex flex-col items-center text-center shadow-md">
                  <img src={movie} alt="Filming" className="h-12 w-12 object-contain mb-3" />
                  <h3 className="bolder2">Filming and storytelling</h3>
                  <p className="mt-2 text-[#334155] leading-6">Short films and visual stories evaluated for narrative, cinematography and impact.</p>
                </div>

                <div className="bg-red-300 rounded-[20px] p-6 flex flex-col items-center text-center shadow-md">
                  <img src={dress} alt="Fashion" className="h-12 w-12 object-contain mb-3" />
                  <h3 className="bolder2">Fashion design</h3>
                  <p className="mt-2 text-[#334155] leading-6">Designers present original collections highlighting creativity and craftsmanship.</p>
                </div>
              </div>

              <div className="text-center mt-5 p-3">
                <span className="text-slate-600">
                  Open to participants with or without disabilities
                </span>
              </div>
            </section>

            {/* Who can participate */}

            <section className="p-4 light2 text-slate-800">
              <h1 className=" text-slate-300 text-center mb-[20px] mt-[30px] bolder2 text-2xl md:text-3xl">
                Who can Participate
              </h1>

              <div className="flex justify-center items-center">
                <ul className="grid grid-col-1 list-disc list-inside text-slate-300 text-start gap-3 text-xl md:3xl">
                  <li>Youths aged 15 – 29</li>
                  <li>Persons living with disabilities</li>
                  <li>Creative talents seeking exposure and recognition</li>
                  <li>Entertainment enthusiasts and aspiring professionals</li>
                </ul>
              </div>
            </section>

            <div className="bg-gray-200 p-6 text-slate-800">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-slate-600 text-center mb-6 mt-4 bolder2 text-2xl md:text-3xl">Event Structure</h2>

                <div className="grid gap-6 md:grid-cols-2 text-xl">
                  <article className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="bolder2 text-slate-700"><b>Stage 1: Registrations and auditions</b></h3>
                    <ul className="light2 list-disc list-inside mt-3">
                      <li>Online and physical registration available</li>
                      <li>Online audition sessions</li>
                      <li>Screening by a panel of professional judges</li>
                    </ul>
                  </article>

                  <article className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="bolder2 text-slate-700"><b>Stage 2: Grand Finale</b></h3>
                    <ul className="light2 list-disc list-inside mt-3">
                      <li>Live performances by finalists</li>
                      <li>Celebrity judges and guest artists</li>
                      <li>Red carpet experience</li>
                      <li>Winner announcement — Best Stage Performance</li>
                    </ul>
                  </article>
                </div>
              </div>
            </div>

            <section className="p-6 text-slate-800">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-slate-300 text-center mt-2 bolder2 text-2xl md:text-3xl">Built for everyone</h2>

                <div className="mt-6 grid gap-6 md:grid-cols-2 items-start">
                  <div className="flex flex-col gap-4">
                    <p className="text-xl text-center text-slate-300 md:text-left">Rise to Fame is committed to full accessibility. Our event will provide:</p>
                    <ul className="grid gap-3 md:max-w-md mx-auto md:mx-0">
                      <li className="inline-flex text-slate-300 gap-3 items-center">
                        <img src={wheelchair} alt="wheelchair" className="h-6 w-6" />
                        <span>Wheelchair-accessible venue</span>
                      </li>
                      <li className="inline-flex text-slate-300 gap-3 items-center">
                        <img src={metal} alt="sign language" className="h-6 w-6" />
                        <span>Sign language interpreters</span>
                      </li>
                      <li className="inline-flex text-slate-300 gap-3 items-center">
                        <img src={bell} alt="accessible facilities" className="h-6 w-6" />
                        <span>Accessible facilities throughout</span>
                      </li>
                      <li className="inline-flex text-slate-300 gap-3 items-center">
                        <img src={handshake} alt="support staff" className="h-6 w-6" />
                        <span>Trained support staff and volunteers</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 shadow-sm">
                    <p className="text-center md:text-left text-lg">We prioritise accessibility in venue design, programming, and support services so every participant can fully engage and perform.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="p-6 bg-blue-100">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-slate-600 text-center mt-2 bolder2 text-2xl md:text-3xl">What participants will gain</h2>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-blue-500 rounded-[20px] p-4 flex flex-col items-center text-center">
                    <img src={tv} alt="TV" className="h-10 mb-3" />
                    <span className="bolder2 text-[#334155]">Media exposure<br />(Social media, TV)</span>
                  </div>

                  <div className="bg-orange-400 rounded-[20px] p-4 flex flex-col items-center text-center">
                    <img src={mic} alt="Mic" className="h-10 mb-3" />
                    <span className="bolder2 text-[#334155]">Live performance opportunities</span>
                  </div>

                  <div className="bg-orange-100 rounded-[20px] p-4 flex flex-col items-center text-center">
                    <img src={brand} alt="Brand" className="h-10 mb-3" />
                    <span className="bolder2 text-[#334155]">Brand Recognition</span>
                  </div>

                  <div className="bg-green-100 rounded-[20px] p-4 flex flex-col items-center text-center">
                    <img src={cash} alt="Cash" className="h-10 mb-3" />
                    <span className="bolder2 text-[#334155]">Cash prizes and awards</span>
                  </div>

                  <div className="bg-red-200 rounded-[20px] p-4 flex flex-col items-center text-center">
                    <img src={handshake} alt="Handshake" className="h-10 mb-3" />
                    <span className="bolder2 text-[#334155]">Endorsement and sponsorship deals</span>
                  </div>

                  <div className="bg-black rounded-[20px] p-4 flex flex-col items-center text-center">
                    <img src={star} alt="Star" className="h-10 mb-3" />
                    <span className="bolder2 text-[#ffffff]">Talent management opportunities</span>
                  </div>

                  <div className="bg-green-300 rounded-[20px] p-4 flex flex-col items-center text-center">
                    <img src={compass} alt="Compass" className="h-10 mb-3" />
                    <span className="bolder2 text-[#334155]">Confidence, visibility and clear direction</span>
                  </div>
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
                <Link to="/register" className="button-theme bolder">Register</Link>
                {/* <Link className=" bg-white bolder text-black p-3 rounded-[20px]">
            Accessibility
          </Link> */}
              </div>
            </section>

          </main>

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
                  <a href="https://www.instagram.com/meritandvalueawards?igsh=MXA4NmpwczN0M2c3dA=="
                    target="_blank"
                  >
                    <img src={ig} alt="Instagram" className="h-[30px] md:h-[30px]" />
                  </a>
                  <a href="https://www.facebook.com/share/1D8MB5LWgH/?mibextid=wwXIfr"
                    target="_blank"
                  >
                    <img src={fb} alt="Facebook" className="h-[30px] md:h-[30px]" />
                  </a>
                  <a href="https://x.com/mvaevent"
                    target="_blank"
                  >
                    <img src={x} alt="X" className="h-[30px] md:h-[30px]" />
                  </a>
                  <a href="https://www.tiktok.com/@_meritandvalueawards_?_r=1&_t=ZS-98KU4UeRLFs"
                    target="_blank"
                  >
                    <img src={tiktok} alt="tiktok" className="h-[30px] md:h-[30px]" />
                  </a>
                  <a href="https://youtube.com/@meritandvalueawards?si=eawtqPzlaQw77ym3"
                    target="_blank"
                  >
                    <img
                      src={youtube}
                      alt="youtube"
                      className="h-[30px] md:h-[30px]"
                    />
                  </a>

                </div>
                <div><Link to="/privacyPolicy">Privacy Policy</Link></div>
              </div>
            </div>
            <span>&copy; 2026 Merit and value awards</span>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Stardom;
