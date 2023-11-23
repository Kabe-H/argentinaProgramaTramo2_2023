import React from "react";
import UserProvider from "../userProvider";
import HijoUseContext from './HijoUseContext'

export default function EjemploUseContext() {
  return (
    <UserProvider>
      <div>
        <HijoUseContext />
      </div>
    </UserProvider>
  );
}
