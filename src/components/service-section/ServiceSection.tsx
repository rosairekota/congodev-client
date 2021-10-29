import React from "react";
import { Wrapper } from "./ServiceSection.style";

export type ServiceSectionType = {};
const ServiceSection: React.FC<ServiceSectionType> = () => {
  return (
    <>
      <Wrapper>
        <div className="marketing">
          <div>marketing</div>
          <div>card</div>
        </div>
        <div className="services">service</div>
      </Wrapper>
    </>
  );
};
export default ServiceSection;
