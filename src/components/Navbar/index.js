import React from "react";
import {
  NavBarContent,
  NavBarContainer,
  NavBarPartOne,
  NavBarLogo,
  NavBarPartTwo,
  NavBarLink,
  NavBarPartThree,
  NavBarIcon,
  MobileIcon,
  NavBarLinkRoute,
} from "./NavBarElements";

import { HiOutlineMenu } from "react-icons/hi";
import tesla_logo from "../../images/tesla_logo-removebg-preview.png";
import { auth } from "../../firebase";

function NavBar({ toggle }) {
  return (
    <NavBarContainer>
      <NavBarContent>
        <NavBarPartOne to="model-s" smooth="smooth">
          <NavBarLogo src={tesla_logo} />
        </NavBarPartOne>
        <NavBarPartTwo>
          <NavBarLink to="model-s" smooth="smooth">
            MODEL S
          </NavBarLink>
          <NavBarLink to="model-3" smooth="smooth">
            MODEL 3
          </NavBarLink>
          <NavBarLink to="model-x" smooth="smooth">
            MODEL X
          </NavBarLink>
          <NavBarLink to="model-y" smooth="smooth">
            MODEL Y
          </NavBarLink>
          <NavBarLink to="solar-roofs" smooth="smooth">
            SOLAR ROOF
          </NavBarLink>
          <NavBarLink to="solar-panels" smooth="smooth">
            SOLAR PANELS
          </NavBarLink>
        </NavBarPartTwo>
        <NavBarPartThree>
          <NavBarLinkRoute>SHOP</NavBarLinkRoute>
          <NavBarLinkRoute to="/signin">TESLA ACCOUNT</NavBarLinkRoute>
          <NavBarLinkRoute onClick={() => auth.signOut()}>
            SIGN OUT
          </NavBarLinkRoute>
        </NavBarPartThree>
        <NavBarIcon onClick={toggle}>
          <HiOutlineMenu />
        </NavBarIcon>
      </NavBarContent>
    </NavBarContainer>
  );
}

export default NavBar;
