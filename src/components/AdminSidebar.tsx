import Link from "next/link";

export default function AdminSidebar(){

 return(

 <div className="w-64 h-screen bg-black text-white p-6">

  <h2 className="font-bold text-2xl mb-10">
   Admin
  </h2>

  <div className="space-y-4">

   <Link href="/admin">
    Dashboard
   </Link>

   <Link href="/admin/bookings">
    Bookings
   </Link>

   <Link href="/admin/calendar">
    Calendar
   </Link>

  </div>

 </div>

 );

}
