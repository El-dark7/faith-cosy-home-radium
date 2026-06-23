import {
 collection,
 addDoc,
 getDocs
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function createMessage(data:any){

 return await addDoc(
   collection(db,"messages"),
   data
 );

}

export async function getMessages(){

 const snapshot = await getDocs(
   collection(db,"messages")
 );

 return snapshot.docs.map(doc=>({
  id:doc.id,
  ...doc.data()
 }));

}
