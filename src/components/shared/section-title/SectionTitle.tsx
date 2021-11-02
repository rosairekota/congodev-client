import React, { ReactElement } from "react";
import { Wrapper } from "./SectionTitle.style";
type SectionTitleType = {
  title: string;
  className?: string;
};
const SectionTitle: React.FC<SectionTitleType> = ({ title, className }) => {
  return (
    <Wrapper>
      <h2 className={className}>{title}</h2>
    </Wrapper>
  );
};

export default SectionTitle;
