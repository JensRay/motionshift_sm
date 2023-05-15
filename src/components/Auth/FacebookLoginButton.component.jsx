import React from 'react';

const FacebookLoginButton = ({ onLoginSuccess, onLoginError }) => {
  function handleFacebookLogin() {
    const authUrl = `https://www.facebook.com/v16.0/dialog/oauth?client_id=${process.env.REACT_APP_FACEBOOK_APP_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=ads_read`;
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          onLoginSuccess(response.authResponse.code);
        } else {
          onLoginError(response.error);
        }
      },
      { scope: "ads_read", return_scopes: true }
    );
  }

  return <button onClick={handleFacebookLogin}>Log in with Facebook</button>;
};

export default FacebookLoginButton;
