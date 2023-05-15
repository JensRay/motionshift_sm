import { useState } from "react";

import FacebookAuthContext from "./FacebookAuthContext";

const FacebookAuthProvider = ({ children }) => {
  const [facebookLoggedIn, setFacebookLoggedIn] = useState("");

  return (
    <FacebookAuthContext.Provider
      value={{
        facebookLoggedIn: facebookLoggedIn,
        setFacebookLoggedIn: setFacebookLoggedIn,
      }}
    >
      {children}
    </FacebookAuthContext.Provider>
  );
};

export default FacebookAuthProvider;
