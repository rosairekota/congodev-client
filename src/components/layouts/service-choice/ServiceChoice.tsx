import React from "react";
import { Wrapper } from "./ServiceChoice.style";
import SectionTitle from "../../shared/section-title/SectionTitle";

type ServiceChoice = {};

function ServiceChoice(props) {
  return (
    <Wrapper>
      <SectionTitle
        title={"Pourquoi nous faire Confiance?"}
        className="title"
      />
      <section>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
          quaerat. Ipsa laboriosam facilis dolores necessitatibus! Iste, quam
          unde. Esse fugiat obcaecati corporis pariatur magnam illo possimus
          quidem laborum, nisi recusandae!
        </p>
      </section>
    </Wrapper>
  );
}

export default ServiceChoice;
