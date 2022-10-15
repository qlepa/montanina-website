import { useState, useEffect } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import logo from '../assets/logo.jpg';

function NavBar() {
  const [isShrunk, setShrunk] = useState(false);
  const scrollPosition: number = useScrollPosition();

  useEffect(() => scrollPosition > 0 ? setShrunk(true) : setShrunk(false), [scrollPosition]);

  return (
    <nav className={`fixed top-0 flex justify-center items-center border border-cyan-900 ${isShrunk ? 'h-[50px]' : 'h-[150px]'} w-[1280px] duration-1000`}>
      <div className="flex items-center flex-initial border border-red-800 h-24">
        <img src={logo} className="h-full"></img>
        ASD Polisportiva Montanina
      </div>
      <div className="grow-[2] shrink-0 border border-yellow-600">
        <ul className="flex justify-between">
          <li>Squadra</li>
          <li>Storia</li>
          <li>Community</li>
          <li>Calendar</li>
        </ul>
      </div>
      <div className="grow-[1] shrink-0 border border-purple-900">
        Next Match
      </div>
    </nav>
  );
};

export default NavBar;