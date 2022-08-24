import { createContext, useContext, useState } from "react";

export const userContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

const USER = { name: "Guest", isGuestUser: true };

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(USER);
  return <userContextProvider>{children}</userContextProvider>;
}

export function useUserContext() {
    const {user, logIn, logOut} = useContext()
}
