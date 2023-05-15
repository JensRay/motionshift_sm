import React from "react";

const FacebookAuthContext = React.createContext({
  facebookLoggedIn: "",
  setFacebookLoggedIn: () => {},
});

export default FacebookAuthContext;
