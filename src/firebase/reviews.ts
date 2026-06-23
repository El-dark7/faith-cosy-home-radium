import {
 collection,
 addDoc,
 getDocs
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function createReview(
 review:any
){

 await addDoc(
  collection(db,"reviews"),
  review
 );

}

export async function getReviews(){

 const snapshot =
 await getDocs(
  collection(db,"reviews")
 );

 return snapshot.docs.map(doc=>({
  id:doc.id,
  ...doc.data()
 }));

}
