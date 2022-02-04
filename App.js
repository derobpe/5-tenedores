import React, { useEffect } from "react";
import Navigation from "./app/navigations/Navigation";
import {firebaseApp} from "./app/utils/firebase";

export default function App() {
  useEffect(() =>{
    firebaseApp.auth().onAuthStateChanged((user) => {
      console.log(user);
    });
  },[]);

  return <Navigation />;
}
