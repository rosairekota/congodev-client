import React from "react";
import SectionTitle from "../../shared/section-title/SectionTitle";
import { Wrapper } from "./ServiceSection.style";
import Image from "next/image";
import htmlPhoto from "../../../../public/assets/icones/html.svg";
import coding from "../../../../public/assets/icones/coding.svg";
import mobile from "../../../../public/assets/icones/mobile.svg";
import design from "../../../../public/assets/icones/design.svg";
import marketing from "../../../../public/assets/icones/digital_market.svg";

export type ServiceSectionType = {};
const ServiceSection: React.FC<ServiceSectionType> = () => {
  return (
    <>
      <Wrapper>
        <div className="marketing">
          <div>
            <h4>Recherchez</h4>
          </div>
          <div>
            <h4>Retrouvez</h4>
          </div>
          <div>
            <h4>Collaborons ensemble</h4>
          </div>

          <div className="card__marketing">
            <h4>100%</h4>
            <p>Nous assurons le suivi des projets de nos clients</p>
          </div>
        </div>
        <section>
          <SectionTitle title={"Découvrez nos offres"} />
          <div className="services">
            <div className="card__services">
              <div className="card__services-head">
                <Image src={htmlPhoto} alt={htmlPhoto} />

                <h4>Conception des sites web Responsives et adaptaples</h4>
              </div>
              <p>
                Congodev est un professionnel de la conception et du
                développement de sites Web. Concentré pour livrer les
                conceptions les plus créatives quà atteindre les attentes des
                clients.
              </p>
            </div>
            <div className="card__services">
              <div className="card__services-head">
                <Image src={coding} alt={coding} />

                <h4> Dévéloppement des API</h4>
              </div>
              <p>
                Congodev est un professionnel de la conception et du
                développement de sites Web. Concentré pour livrer les
                conceptions les plus créatives quà atteindre les attentes des
                clients.
              </p>
            </div>
            <div className="card__services">
              <div className="card__services-head">
                <Image src={mobile} alt={mobile} />

                <h4>Conception des applications mobiles</h4>
              </div>
              <p>
                Congodev est un professionnel de la conception et du
                développement de sites Web. Concentré pour livrer les
                conceptions les plus créatives quà atteindre les attentes des
                clients.
              </p>
            </div>
          </div>
          <div className="services services-bottom">
            <div className="card__services">
              <div className="card__services-head">
                <Image src={design} alt={design} />

                <h4>Design et Illustration</h4>
              </div>
              <p>
                Congodev est un professionnel de la conception et du
                développement de sites Web. Concentré pour livrer les
                conceptions les plus créatives quà atteindre les attentes des
                clients.
              </p>
            </div>
            <div className="card__services">
              <div className="card__services-head">
                <Image src={marketing} alt={marketing} />

                <h4>Marketing Digital</h4>
              </div>
              <p>
                Congodev est un professionnel de la conception et du
                développement de sites Web. Concentré pour livrer les
                conceptions les plus créatives quà atteindre les attentes des
                clients.
              </p>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};
export default ServiceSection;
