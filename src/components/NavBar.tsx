import { useState, useEffect } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";

function NavBar() {
  const [isShrunk, setShrunk] = useState(false);
  const scrollPosition: number = useScrollPosition();

  useEffect(() => scrollPosition > 0 ? setShrunk(true) : setShrunk(false), [scrollPosition]);

  return (
    <nav className={`fixed top-0 flex justify-center items-center border border-cyan-900 ${isShrunk ? 'h-[50px]' : 'h-[150px]'} w-[1280px] duration-1000`}>
      <div className="border border-red-800">
        Logo
      </div>
      <div className="border border-yellow-600">
        Menu List
      </div>
      <div className="border border-purple-900">
        Next Match
      </div>
    </nav>
  );
};

export default NavBar;