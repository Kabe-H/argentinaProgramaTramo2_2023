import React, { useState, useContext, useCallback } from "react";

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext() {
  return useContext(userContext);
}

export function useUserToggleContext() {
  return useContext(userToggleContext);
}

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const cerrarSesion = useCallback(() => {
    if (user) {
      setUser(null);
    } else {
      setUser({ name: "Agustín", mail: "correo@mail.com" });
    }
  }, [user]);

  return (
    <userToggleContext.Provider value={cerrarSesion}>
      <userContext.Provider value={user}>{children}</userContext.Provider>
    </userToggleContext.Provider>
  );
}
