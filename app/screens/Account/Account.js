import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default function Account(props) {

  if (login===null) return <Text>Cargando...</Text>;

  return login ? <UserLogged/> : <UserGuest/>
}