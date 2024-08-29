"use client";
import React, { useState } from "react";

function Navbar() {
  const [wideNavbar, setWideNavbar] = useState<boolean>(false);
  const toggleNavbar = () => {
    setWideNavbar(!wideNavbar);
  };
  return (
    <>
      <nav className="w-full bg-slate-300 flex justify-end ">
        <ul className="hidden lg:flex justify-end  ">
          <li>
            <p>nav item 1</p>
          </li>
          <li>
            <p>nav item 2</p>
          </li>
          <li>
            <p>nav item 3</p>
          </li>
        </ul>
        <button onClick={toggleNavbar} className="lg:hidden">
          x
        </button>
      </nav>
      {wideNavbar && (
        <div>
          <ul className="">
            <li>
              <p>nav item 1</p>
            </li>
            <li>
              <p>nav item 2</p>
            </li>
            <li>
              <p>nav item 3</p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
