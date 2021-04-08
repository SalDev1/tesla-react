import React from "react";
import {
  InfoSectionContainer,
  InfoSectionImg,
  InfoSectionContent,
  InfoSectionButton,
  InfoSectionButtons,
  InfoSectionH1,
  InfoSectionP,
  InfoSectionSpan,
} from "./InfoElements";

function InfoSection({
  isOpen,
  name,
  img,
  id,
  isChangeText,
  infounderline,
  info,
}) {
  return (
    <InfoSectionContainer id={id}>
      <InfoSectionImg src={img} />
      <InfoSectionContent>
        <InfoSectionH1>{name}</InfoSectionH1>
        <InfoSectionP>
          {info}
          <InfoSectionSpan>{infounderline}</InfoSectionSpan>
        </InfoSectionP>
        <InfoSectionButtons>
          <InfoSectionButton isOpen={!isOpen}>
            {isChangeText ? "order now" : "custom order"}
          </InfoSectionButton>
          <InfoSectionButton>
            {" "}
            {isChangeText ? "learn more" : "existing invertory"}
          </InfoSectionButton>
        </InfoSectionButtons>
      </InfoSectionContent>
    </InfoSectionContainer>
  );
}

export default InfoSection;
