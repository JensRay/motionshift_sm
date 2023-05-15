import React, { history, useContext, useEffect } from "react";

import FacebookAuthContext from "../../context/FacebookAuthContext";
import MetaApi from "./MetaApi.component";

const FacebookAuth = () => {
  const { facebookLoggedIn, setFacebookLoggedIn } =
    useContext(FacebookAuthContext);

  useEffect(() => {
    async function fetchAccessToken() {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      if (code) {
        try {
          const response = await fetch(
            // Long-lived user access token
            `https://graph.facebook.com/v16.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.REACT_APP_FACEBOOK_APP_ID}&client_secret=${process.env.REACT_APP_FACEBOOK_APP_SECRET}&fb_exchange_token=${process.env.REACT_APP_META_ACCESS_TOKEN}`
            // `https://graph.facebook.com/oauth/access_token?client_id=${process.env.REACT_APP_FACEBOOK_APP_ID}&client_secret=${process.env.REACT_APP_FACEBOOK_APP_SECRET}&grant_type=client_credentials`
          );
          console.log(response);
          const data = await response.json();
          console.log(data);
          if (data.access_token) {
            setFacebookLoggedIn(true);
          }
        } catch (error) {
          console.error("Error exchanging code for access token:", error);
        }
      } else {
        const authUrl = `https://www.facebook.com/v16.0/dialog/oauth?client_id=${process.env.REACT_APP_FACEBOOK_APP_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=ads_read`;
        window.location.replace(authUrl);
      }
    }

    fetchAccessToken();
  }, [setFacebookLoggedIn]);

  useEffect(() => {
    const authUrl = `https://www.facebook.com/v16.0/dialog/oauth?client_id=${process.env.REACT_APP_FACEBOOK_APP_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=ads_read&state=facebookLoggedIn=${facebookLoggedIn}`;
    if (!facebookLoggedIn) {
      history.push(authUrl);
    }
  }, [facebookLoggedIn]);

  console.log(facebookLoggedIn);

  facebookLoggedIn ? console.log("logged in") : console.log("not logged in");

  return <div>{facebookLoggedIn ? <MetaApi /> : <p>Authenticating...</p>}</div>;
};

export default FacebookAuth;
