import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #010101;
`;

export const FooterLink = styled.a`
  top: 20px;
  bottom: 20px;
  color: white;
  padding: 10px 30px;

  &:hover {
    cursor: pointer;
  }
`;
