import Facebook from "../assets/fb-logo.png";
import Instagram from "../assets/ig-logo.png";
import Linkedin from "../assets/ln-logo.png";
import GitHub from "../assets/gh-logo.webp";
import WaBusiness from "../assets/wabusiness.png";
import Telegram from "../assets/telegram.png";
import Gmail from "../assets/gmail.png";
import Discord from "../assets/discord.png";

import Card from "./Card";

const Contacts = () => {
  return (
    <div className="md:me-12 md:mt-12 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-6xl font-frs underline underline-offset-8">Contact Me:</h1>
        <div className="text-center md:mt-28 max-md:mt-12">
          <div className="flex max-md:flex-col">
            <div className="flex">
              <Card link="https://www.facebook.com/708iki" img={Facebook} title="Facebook" size="w-36" sizeImg="w-10" />
              <Card link="https://www.instagram.com/708iki_" img={Instagram} title="Instagram" size="w-36" sizeImg="w-10" />
            </div>
            <div className="flex">
              <Card link="https://www.linkedin.com/in/rizky-muhammad-yusuf-436b591b2" img={Linkedin} title="LinkedIn" size="w-36" sizeImg="w-10" />
              <Card link="https://wa.me/message/CQEIZP26QLDVM1" img={WaBusiness} title="WhatsApp" size="w-36" sizeImg="w-10" />
            </div>
          </div>
          <div className="flex max-md:flex-col">
            <div className="flex">
              <Card link="https://github.com/Froxayn123" img={GitHub} title="GitHub" size="w-36" sizeImg="w-10" />
              <Card link="https://t.me/rizkymyusuf" img={Telegram} title="Telegram" size="w-36" sizeImg="w-10" />
            </div>
            <div className="flex">
              <Card link="https://discord.com/users/froxayn" size="w-36" img={Discord} title="Discord" sizeImg="w-10" />
              <Card link="mailto:rizkymyusuf123@gmail.com" size="w-36" img={Gmail} title="Gmail" sizeImg="w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
