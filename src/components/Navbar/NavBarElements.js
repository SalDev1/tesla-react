import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const NavBarContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const NavBarContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  height: 45px;
  position: fixed;
  width: 100%;
  z-index: 999;

  @media screen and (max-width: 1120px) {
    justify-content: space-between;
    width: 100%;
    padding: 0px 15px;
    transition: 0.5s all ease-in;
  }
`;

export const NavBarPartOne = styled(LinkS)`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const NavBarPartTwo = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

export const NavBarLogo = styled.img`
  max-height: 100px;
`;

export const NavBarLink = styled(LinkS)`
  font-size: 16px;
  font-weight: 600;
  padding: 0 20px;

  &:hover {
    color: whitesmoke;
    cursor: pointer;
  }
`;

export const NavBarPartThree = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

export const NavBarIcon = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4px;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 470px) {
    display: inline-block;
    cursor: pointer;
  }
`;

export const NavBarLinkRoute = styled(LinkR)`
  font-size: 16px;
  font-weight: 600;
  padding: 0 20px;
  color: black;
  border: none;
  overflow: hidden;
  text-decoration: none;

  &:hover {
    color: whitesmoke;
    cursor: pointer;
  }
`;
