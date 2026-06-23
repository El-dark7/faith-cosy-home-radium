"use client";

import { useEffect,useState } from "react";
import { getMessages }
from "@/firebase/messages";

export default function MessagesPage(){

 const [messages,setMessages]
 = useState<any[]>([]);

 useEffect(()=>{

  async function load(){

   const data =
   await getMessages();

   setMessages(data);

  }

  load();

 },[]);

 return(

 <div className="p-10">

  <h1 className="text-4xl font-bold mb-6">
   Messages
  </h1>

  {messages.map((message)=>(
   <div
    key={message.id}
    className="border p-4 mb-4 rounded"
   >
    <h3>{message.name}</h3>
    <p>{message.message}</p>
   </div>
  ))}

 </div>

 );

}
