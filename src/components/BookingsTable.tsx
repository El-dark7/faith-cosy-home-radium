"use client";

interface Booking {
 id:string;
 name:string;
 phone:string;
 checkIn:string;
 checkOut:string;
}

export default function BookingsTable({
 bookings
}:{
 bookings:Booking[]
}) {

 return (

 <div className="overflow-auto">

  <table className="w-full">

   <thead>

    <tr>

     <th>Name</th>
     <th>Phone</th>
     <th>Check In</th>
     <th>Check Out</th>

    </tr>

   </thead>

   <tbody>

    {bookings.map((booking)=>(

     <tr key={booking.id}>

      <td>{booking.name}</td>
      <td>{booking.phone}</td>
      <td>{booking.checkIn}</td>
      <td>{booking.checkOut}</td>

     </tr>

    ))}

   </tbody>

  </table>

 </div>

 );

}
