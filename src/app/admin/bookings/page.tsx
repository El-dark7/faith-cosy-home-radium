"use client";

import { useEffect,useState } from "react";
import BookingsTable from "@/components/BookingsTable";
import { getBookings }
from "@/firebase/bookings";

export default function BookingsPage() {

 const [bookings,setBookings] =
 useState<any[]>([]);

 useEffect(()=>{

  async function load(){

   const data =
   await getBookings();

   setBookings(data);

  }

  load();

 },[]);

 return (

 <div className="p-10">

  <h1 className="text-4xl font-bold mb-6">
   Booking Management
  </h1>

  <BookingsTable
   bookings={bookings}
  />

 </div>

 );

}
