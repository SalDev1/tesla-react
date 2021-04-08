import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: black;
  margin-left: 1000px;
  position: relative;
`;

export const SideBarContent = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  padding: 20px;
  border: 0.5px solid gray;
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: #ffffff;
  transition: 0.2s all ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "0" : "100%")};
  display: ${({ isOpen }) => (isOpen ? "none" : "block")};
  z-index: 9999;
  overflow-x: hidden;
`;

export const SideBarIcon = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const SideBarLink = styled.div`
  position: relative;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px 10px;
  outline-width: 0px;
  margin: 0 20px;
  text-transform: uppercase;
  border-bottom: 1px solid gray;
  border-collapse: collapse;
  font-size: 18px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;
