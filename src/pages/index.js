import React, { useState } from "react";
import Footer from "../components/Footer";
import InfoSection from "../components/Info";
import NavBar from "../components/Navbar";
import SideBar from "../components/SideBar";
import SignIn from "./signin";
import { useAuthState } from "react-firebase-hooks/auth";

function HomePage() {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <InfoSection
        id="model-s"
        name="Model S"
        img="https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop"
        info="Order Online for"
        infounderline="Touchless Delivery"
      />
      <InfoSection
        id="model-3"
        name="Model 3"
        img="https://www.tesla.com/sites/default/files/model3-new/social/model-3-hero-social.jpg"
        info="Order Online for"
        infounderline="Touchless Delivery"
      />
      <InfoSection
        id="model-x"
        name="Model X"
        img="https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop"
        info="Order Online for"
        infounderline="Touchless Delivery"
      />
      <InfoSection
        id="model-y"
        name="Model Y"
        img="https://tesla-cdn.thron.com/delivery/public/image/tesla/48b20b9d-9322-4cf9-b079-44797fc32600/bvlatuR/std/0x0/AWD_hero@2"
        info="Order Online for"
        infounderline="Touchless Delivery"
      />
      <InfoSection
        id="solar-roofs"
        name="Solar for New Roofs"
        img="https://www.tesla.com/sites/default/files/solarroof/v3/value/solar-roof_value_D.jpg"
        isChangeText={true}
        info="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
      />
      <InfoSection
        id="solar-panels"
        name="Lowest Cost Solar Panels in America"
        img="https://www.tesla.com/sites/default/files/solarpanels/hero/D_solarpanels_hero_2880x1800_20201120.jpg"
        isChangeText={true}
        info="Money Back guarantee"
      />
      <Footer />
    </>
  );
}

export default HomePage;
