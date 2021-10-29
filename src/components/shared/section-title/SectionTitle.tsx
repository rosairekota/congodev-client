import React, { ReactElement } from "react";
import { Wrapper } from "./SectionTitle.style";
type SectionTitleType = {
  title: string;
};
const SectionTitle: React.FC<SectionTitleType> = ({ title }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
    </Wrapper>
  );
};

export default SectionTitle;
