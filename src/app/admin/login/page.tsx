"use client";

import { useState } from "react";
import {
 signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "@/firebase/auth";

export default function LoginPage() {

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 async function login() {

   try {

     await signInWithEmailAndPassword(
       auth,
       email,
       password
     );

     window.location.href="/admin";

   } catch(error) {
     alert("Login Failed");
   }

 }

 return (

 <div className="min-h-screen flex items-center justify-center">

  <div className="w-full max-w-md border rounded-xl p-8">

   <h1 className="text-3xl font-bold mb-6">
    Admin Login
   </h1>

   <input
    type="email"
    placeholder="Email"
    className="w-full border p-3 mb-4"
    onChange={(e)=>setEmail(e.target.value)}
   />

   <input
    type="password"
    placeholder="Password"
    className="w-full border p-3 mb-4"
    onChange={(e)=>setPassword(e.target.value)}
   />

   <button
    onClick={login}
    className="bg-black text-white w-full p-3"
   >
    Login
   </button>

  </div>

 </div>

 );

}
