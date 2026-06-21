import {
 collection,
 addDoc,
 getDocs,
 deleteDoc,
 doc
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function createBooking(data:any){

 await addDoc(
   collection(db,"bookings"),
   data
 );

}

export async function getBookings(){

 const snapshot = await getDocs(
   collection(db,"bookings")
 );

 return snapshot.docs.map(doc=>({
   id:doc.id,
   ...doc.data()
 }));

}

export async function deleteBooking(id:string){

 await deleteDoc(
  doc(db,"bookings",id)
 );

}