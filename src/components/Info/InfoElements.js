import styled from "styled-components";

export const InfoSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  position: relative;
`;

export const InfoSectionImg = styled.img`
  width: 100%;
  background-size: cover;
  flex: 1;

  &:hover {
    cursor: pointer;
  }
`;

export const InfoSectionContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  z-index: 10;
  padding: 100px;
`;

export const InfoSectionH1 = styled.h1`
  font-weight: 600;
  font-size: 45px;
`;

export const InfoSectionP = styled.p`
  padding-top: 5px;
  font-size: 18px;
  color: #575859;
`;

export const InfoSectionButtons = styled.div`
  margin-top: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const InfoSectionButton = styled.button`
  margin: 20px;
  padding: 15px 90px;
  border-radius: 50px;
  outline-width: 0px;
  border: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1rem;
  background-color: ${({ isOpen }) =>
    isOpen ? "rgba(23,26,32,.8)" : "hsla(0,0%,100%,.5)"};
  color: ${({ isOpen }) => (isOpen ? "white" : "black")};

  &:hover {
    cursor: pointer;
  }
`;

export const InfoSectionSpan = styled.span`
  text-decoration: underline;
  color: black;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;
