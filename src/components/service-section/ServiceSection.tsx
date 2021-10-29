import React from "react";
import SectionTitle from "../shared/section-title/SectionTitle";
import { Wrapper } from "./ServiceSection.style";

export type ServiceSectionType = {};
const ServiceSection: React.FC<ServiceSectionType> = () => {
  return (
    <>
      <Wrapper>
        <div className="marketing">
          <div>
            <h4>Proféssionalisme</h4>
          </div>
          <div>
            <h4>Proféssionalisme</h4>
          </div>
          <div>
            <h4>Proféssionalisme</h4>
          </div>

          <div className="card">
            <h4>100%</h4>
            <p>Nous assurons le suivi des projets de nos clients</p>
          </div>
        </div>
        <div className="services">
          <SectionTitle title={"Découvrer nos offres"} />
          <div className="card__service">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates in inventore eaque ipsum ea molestiae dicta ipsam eius?
              Atque asperiores inventore assumenda consequatur aut possimus
              perspiciatis qui velit neque minima?
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default ServiceSection;
