import React from "react";
import { FooterContainer, FooterLink } from "./FooterElements";

function Footer() {
  return (
    <FooterContainer>
      <FooterLink>Tesla @ {new Date().getFullYear()}</FooterLink>
      <FooterLink>Privacy & Legal</FooterLink>
      <FooterLink>Contact</FooterLink>
      <FooterLink>Careers</FooterLink>
      <FooterLink>Get Newsletter</FooterLink>
      <FooterLink>News</FooterLink>
      <FooterLink>Forums</FooterLink>
      <FooterLink>Location</FooterLink>
    </FooterContainer>
  );
}

export default Footer;
