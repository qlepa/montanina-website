import { useState, useEffect } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import logo from '../assets/logo.jpg';
import LeagueTable from "./LeagueTable";
import MatchesCarousel from "./MatchesCarousel";

function NavBar() {
  const [isShrunk, setShrunk] = useState(false);
  const scrollPosition: number = useScrollPosition();

  useEffect(() => scrollPosition > 0 ? setShrunk(true) : setShrunk(false), [scrollPosition]);

  return (
    <>

      <div className={`fixed bg-red-600 flex justify-center items-center ${isShrunk ? 'h-[50px] top-6' : 'h-[120px] top-0'} w-full duration-1000`}>
        <nav className={`flex justify-center items-center w-[1280px]`}>
          <div className="flex items-center flex-initial h-24">
            <img src={logo} className="h-full"></img>
            ASD Polisportiva Montanina
          </div>
          <div className="grow-[2] shrink-0">
            <ul className="flex justify-between">
              <li><a href="#team">Squadra</a></li>
              <li>Storia</li>
              <li>Community</li>
              <li>Calendar</li>
            </ul>
          </div>
          <div className="grow-[1] shrink-0">
            Next Match
          </div>
        </nav>
      </div>
      <div>
        {isShrunk
          ? <LeagueTable />
          : <MatchesCarousel />
        }
      </div>
    </>
  );
};

export default NavBar;