import { useEffect, useState } from "react";
import logo from '../assets/logo.jpg';
import { useScrollPosition } from "../hooks/useScrollPosition";
import MatchBox from "./MatchBox";
import MatchesCarousel from "./MatchesCarousel";

function NavBar() {
  const [isShrunk, setShrunk] = useState(false);
  const scrollPosition: number = useScrollPosition();

  useEffect(() => scrollPosition > 0 ? setShrunk(true) : setShrunk(false), [scrollPosition]);

  return (
    <>
      <div className={`fixed bg-red-600 flex flex-col justify-center items-center ${isShrunk ? 'h-[60px]' : 'h-[120px]'} top-0 w-full duration-1000 text-white`}>
        <nav className={`flex justify-center items-center w-[1280px]`}>
          <div className={`flex w-72 items-center flex-initial ${isShrunk ? 'h-14' : 'h-[110px]'} duration-1000`}>
            <img src={logo} className="h-full"></img>
            <span className="text-center p-2 text-xl">
              ASD Polisportiva <br /> Montanina
            </span>
          </div>
          <div className="grow-[2] shrink-0 p-4">
            <ul className="flex justify-between">
              <li><a href="#team">Squadra</a></li>
              <li>Storia</li>
              <li>Community</li>
              <li>Calendar</li>
              <li><a href="#table">Classifica</a></li>
            </ul>
          </div>
          <div className="w-72">
            {isShrunk
              ? <MatchBox oponent="" size='S' />
              : ''
            }
          </div>
        </nav>
        <div className={`top-[120px] fixed w-full bg-white justify-center ${isShrunk ? 'hidden' : 'flex'}`}>
          <div className="w-[1280px]"><MatchesCarousel oponent="" size='M' /></div>
        </div>
      </div>
    </>
  );
};

export default NavBar;