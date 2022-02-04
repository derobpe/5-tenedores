import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export default function Account(props) {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) return <Text>Cargando...</Text>;

  return login ? <UserLogged /> : <UserGuest />;
}
