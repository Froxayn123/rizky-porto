import Facebook from "../assets/fb-logo.png";
import Instagram from "../assets/ig-logo.png";
import Linkedin from "../assets/ln-logo.png";
import GitHub from "../assets/gh-logo.webp";
import anime from "animejs";
import { useEffect } from "react";
import Dot from "./Dot";

const Jumbotron = () => {
  window.addEventListener("scroll", function () {
    let wScroll = this.scrollY;

    console.log(wScroll);
    if (wScroll === 0) {
      anime({
        targets: document.getElementById("grids"),
        easing: "easeInOutQuad",
        keyframes: [{ translateX: 0 }, { translateY: 600 }],
        duration: 1000,
      });
    } else if (wScroll >= 600 && wScroll <= 1150) {
      anime({
        targets: document.getElementById("grids"),
        easing: "easeInOutQuad",
        keyframes: [{ translateX: 0 }, { translateY: wScroll + 500 }],
        duration: 1000,
      });
    } else if (wScroll >= 1500) {
      anime({
        targets: document.getElementById("grids"),
        easing: "easeInOutQuad",
        keyframes: [{ translateX: 1000 }, { translateY: wScroll + 500 }],
        duration: 1000,
      });
    }

    anime({
      targets: "#kanji",
      translateY: `${wScroll / 6}px`,
    });
  });
  const introTxt = ["Hi!, I am", "Rizky Muhammad Yusuf"];
  const introTxt1 = "I am Fullstack Web Developer Enthusiast";
  const quoteTxt = ["勇", "気"];

  const dstyle = ["flex  flex-col absolute md:start-24 max-md:justify-center max-md:items-center top-24 max-md:relative ", "absolute end-96 top-20 max-md:hidden", "flex absolute end-2 bottom-2 max-md:relative max-md:justify-center"];
  const qstyle = ["font-japan text-9xl text-center select-none"];
  const istyle = ["me-2 font-sec text-2xl ", "font-sec text-md text-slate-600", "font-sec text-sm capitalize", "font-sec text-2xl text-yellow-300"];
  const icoStyle = "w-10 md:m-2 max-md:ms-4";

  useEffect(() => {
    anime({
      targets: document.getElementById("dotGrid1"),
      easing: "easeInOutSine",
      keyframes: [
        { translateY: -50 },
        { translateX: 50 },
        { translateY: 0 },
        { translateX: 100 },
        { translateY: 50 },
        { translateX: 50 },
        { translateY: 100 },
        { translateX: 0 },
        { translateY: 50 },
        { translateX: -50 },
        { translateY: 0 },
        { translateX: 0 },
      ],
      duration: 12000,
      loop: true,
    });
    anime({
      targets: document.getElementById("dotGrid2"),
      easing: "easeInOutSine",
      keyframes: [
        { translateX: 50 },
        { translateY: 50 },
        { translateX: 0 },
        { translateY: 100 },
        { translateX: -50 },
        { translateY: 50 },
        { translateX: -100 },
        { translateY: 0 },
        { translateX: -50 },
        { translateY: -50 },
        { translateX: 0 },
        { translateY: 0 },
      ],
      duration: 12000,
      loop: true,
    });
    anime({
      targets: document.getElementById("dotGrid3"),
      easing: "easeInOutSine",
      keyframes: [
        { translateY: 50 },
        { translateX: -50 },
        { translateY: 0 },
        { translateX: -100 },
        { translateY: -50 },
        { translateX: -50 },
        { translateY: -100 },
        { translateX: 0 },
        { translateY: -50 },
        { translateX: 50 },
        { translateY: 0 },
        { translateX: 0 },
      ],
      duration: 12000,
      loop: true,
    });
    anime({
      targets: document.getElementById("dotGrid4"),
      easing: "easeInOutSine",
      keyframes: [
        { translateX: -50 },
        { translateY: -50 },
        { translateX: 0 },
        { translateY: -100 },
        { translateX: 50 },
        { translateY: -50 },
        { translateX: 100 },
        { translateY: 0 },
        { translateX: 50 },
        { translateY: 50 },
        { translateX: 0 },
        { translateY: 0 },
      ],
      duration: 12000,
      loop: true,
    });
  });

  return (
    <div>
      <div className={dstyle[0]}>
        <div className="flex">
          <h1 className={istyle[0]}>{introTxt[0]}</h1>
          <h1 className={istyle[3]}>{introTxt[1]}</h1>
        </div>
        <h1 className={istyle[1]}>{introTxt1}</h1>
      </div>
      <div id="kanji" className={dstyle[1]}>
        <h1 className={qstyle}>{quoteTxt[0]}</h1>
        <h1 className={qstyle}>{quoteTxt[1]}</h1>
      </div>
      <div className={dstyle[2]}>
        <a href="https://www.facebook.com/708iki">
          <img src={Facebook} alt="" className={icoStyle} />
        </a>
        <a href="https://www.instagram.com/708iki_">
          <img src={Instagram} alt="" className={icoStyle} />
        </a>
        <a href="https://www.linkedin.com/in/rizky-muhammad-yusuf-436b591b2">
          <img src={Linkedin} alt="" className={icoStyle} />
        </a>
        <a href="https://github.com/Froxayn123">
          <img src={GitHub} alt="" className={icoStyle} />
        </a>
      </div>

      <div id="grids" className="max-md:hidden">
        <a href="#home">
          <Dot id="dotGrid1" title="Home" position="absolute" size="p-5" coor="start-32 bottom-48" color=" bg-yellow-300" />
        </a>
        <a href="#projects">
          <Dot id="dotGrid2" title="Projects" position="absolute" size="p-5" coor="start-44 bottom-48" color=" bg-yellow-300" />
        </a>
        <a href="#skills">
          <Dot id="dotGrid3" title="Skills" position="absolute" size="p-5" coor="start-44 bottom-36" color=" bg-yellow-300" />
        </a>
        <a href="#contacts">
          <Dot id="dotGrid4" title="Contacts" position="absolute" size="p-5" coor="start-32 bottom-36" color=" bg-yellow-300" />
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
