"use client";

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MapIcon } from "@heroicons/react/24/solid";
import { Event, Events } from "@src/types/types";

export default function Home() {
  const [startDate, setStartDate] = useState<Date>();
  const [allEvents, setAllEvents] = useState<Events | any>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const res = await fetch("/api/events");

    const { events } = await res?.json();
    console.log(events, typeof events, "as RESPONSE");
    setAllEvents(events);
  }

  console.log("EVENTS", allEvents);

  return (
    <main className="flex flex-1 items-center w-full h-auto flex-col bg-purple-600">
      {/* <ul>{allEvents[0]?.title}</ul> */}
      <div className="flex items-center p-20 w-full h-1/2 bg-gradient-to-r from-[#afdfff] via-[#baaeff] via-30% to-[#affeb6]">
        <div className="flex w-full bg-green-90">
          <h2 className="text-7xl leading-snug">
            Buy tickets. Attend <br /> Events.
          </h2>
        </div>
      </div>
      <div className="flex justify-between items-center -mt-6 w-5/6 rounded-full bg-white p-2">
        <div className="flex w-1/3 border-r border-gray-400 px-6 py-2">
          <input
            className="w-full p-3 rounded-full outline:none focus:ring-0 focus:outline-white focus:outline:none focus:border-blue-600 border-none"
            type="search"
            placeholder=" Serach by name or type"
          />
        </div>
        <div className="flex w-1/3 p-0">
          <div className="w-1/2 border-r px-6 py-4 border-gray-400">
            <label className="flex gap-4" htmlFor="datePicker">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              <DatePicker
                className="px-4 w-full"
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                id="datePicker"
              />
            </label>
          </div>
          <div className="w-1/2 border-r  px-6 py-4 border-gray-400">
            <label htmlFor="location" className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <div className="flex flex-col w-full">
                {/* <span>Location</span> */}
                <input
                  className="w-full"
                  list="browsers"
                  name="browser"
                  id="browser"
                />
                <datalist id="browsers">
                  <option value="Edge" />
                  <option value="Firefox" />
                  <option value="Chrome" />
                  <option value="Opera" />
                  <option value="Safari" />
                </datalist>
              </div>
            </label>
          </div>
        </div>
        <div className="flex w-1/3 gap-6 px-6">
          <label
            className="flex flex-1 items-center gap-4"
            htmlFor="event-type"
          >
            Event Type
            <input
              className="flex flex-1 w-auto p-3 rounded-full outline:none focus:ring-0 focus:outline-white focus:outline:none focus:border-blue-600 border-none border-b-2 border-gray-500"
              list="browsers"
              name="browser"
              id="event-type"
            />
            <datalist className="w-auto" id="browsers">
              <option className="w-full" value="Edge" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>
          </label>
          <button className="rounded-full bg-purple-400 text-white px-6">Search</button>
        </div>
      </div>
    </main>
  );
}
