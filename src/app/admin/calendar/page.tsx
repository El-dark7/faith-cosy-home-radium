"use client";

import Calendar
from "react-calendar";

import "react-calendar/dist/Calendar.css";

export default function CalendarPage(){

 return(

 <div className="p-10">

  <h1 className="text-4xl font-bold mb-8">
   Availability Calendar
  </h1>

  <Calendar/>

 </div>

 );

}
