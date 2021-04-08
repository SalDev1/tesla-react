import React from "react";
import {
  SideBarContainer,
  SideBarContent,
  SideBarIcon,
  SideBarLink,
} from "./SideBarElements";
import { ImCross } from "react-icons/im";

function SideBar({ toggle, isOpen }) {
  return (
    <SideBarContainer>
      <SideBarContent isOpen={isOpen}>
        <SideBarIcon onClick={toggle}>
          <span></span>
          <ImCross />
        </SideBarIcon>
        <SideBarLink>Exisiting Invertory</SideBarLink>
        <SideBarLink>Used Invertory</SideBarLink>
        <SideBarLink>Trade In</SideBarLink>
        <SideBarLink>Cybertruck</SideBarLink>
        <SideBarLink>Roadster</SideBarLink>
        <SideBarLink>Semi</SideBarLink>
        <SideBarLink>Charging</SideBarLink>
        <SideBarLink>PowerWall</SideBarLink>
        <SideBarLink>Commerical SOLAR</SideBarLink>
        <SideBarLink>Find Us</SideBarLink>
        <SideBarLink>Support</SideBarLink>
        <SideBarLink>TestDrive</SideBarLink>
        <SideBarLink>United States</SideBarLink>
      </SideBarContent>
    </SideBarContainer>
  );
}

export default SideBar;
