"use client";
import React, { useState } from "react";

function Sidebar() {
  return (
    <div className="h-screen flex flex-col align-middle justify-center ">
      <div className="flex justify-center align-middle">
        <h1>Sidebar HEADER</h1>
      </div>
      <div>
        <div
          className="flex justify-center align-middle"
          onClick={() => console.log("armagan")}
        >
          <img
            className="w-10 h-10"
            src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/ICON-ICX-icon.png"
          />
          <p className="hidden lg:block">sidebar item 1</p>
        </div>
        <div className="flex justify-center align-middle">
          <img
            className="w-10 h-10"
            src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/ICON-ICX-icon.png"
          />
          <p className="hidden lg:block">sidebar item 1</p>
        </div>
        <div className="flex justify-center align-middle">
          <img
            className="w-10 h-10"
            src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/ICON-ICX-icon.png"
          />
          <p className="hidden lg:block">sidebar item 1</p>
        </div>
        <div className="flex justify-center align-middle">
          <img
            className="w-10 h-10"
            src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/ICON-ICX-icon.png"
          />
          <p className="hidden lg:block">sidebar item 1</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
