import React from "react";

function Navbar() {
  return (
    <div className="flex fixed z-40 w-full max-h-24 h-20 px-20 justify-between bg-white bg-transparent">
      <div className="flex flex-1 items-center gap-8">
        <div className="flex">
          <p>Logo</p>
        </div>
        <div className="flex px-40">
          <ul className="flex gap-4">
            <li>Events</li>
            <li>Search</li>
            <li>Favourites</li>
            <li>Calendar</li>
            <li>My tickets</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-end w-1/3">
        Call to action
      </div>
    </div>
  );
}

export default Navbar;
