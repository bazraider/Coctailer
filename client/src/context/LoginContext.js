import { createContext } from "react";

function noop() {}

const LoginContext = createContext({
  token:null,
  userId:null,
  login:noop,
  logout:noop,
  isAuthenticated: false
})

export {LoginContext}
