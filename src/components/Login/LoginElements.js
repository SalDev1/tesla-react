import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

export const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
`;

export const LoginContent = styled.div`
  padding: 20px 50px;
  margin-top: 100px;
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const LoginLogo = styled.img`
  margin-top: 35px;
  object-fit: contain;
`;

export const LoginButton = styled.button`
  margin: 20px;
  padding: 15px 90px;
  border-radius: 50px;
  outline-width: 0px;
  border: none;
  text-transform: uppercase;
  background-color: black;
  color: white;
  transition: 0.6s all ease-in-out;
  border: 1px solid black;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: #e51736;
    border: 1px solid #e51736;
  }
`;

export const LoginIcon = styled(FcGoogle)`
  font-size: 16px;
`;

export const LoginButtonText = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  padding-left: 10px;
`;
