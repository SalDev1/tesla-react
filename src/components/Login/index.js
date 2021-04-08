import React from "react";
import { Button } from "react-scroll";
import {
  LoginButton,
  LoginContainer,
  LoginContent,
  LoginLogo,
  LoginIcon,
  LoginButtonText,
} from "./LoginElements";
import { auth, provider } from "../../firebase";
import tesla_logo from "../../images/tesla-logo-png.png";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => console.log(error));
  };

  return (
    <LoginContainer>
      <LoginContent>
        <LoginLogo src={tesla_logo}></LoginLogo>
        <LoginButtonText>Developed by Salman</LoginButtonText>
        <LoginButton type="submit" onClick={signIn}>
          <LoginIcon />
          <LoginButtonText>Sign In with Google</LoginButtonText>
        </LoginButton>
      </LoginContent>
    </LoginContainer>
  );
}

export default Login;
