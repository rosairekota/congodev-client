import React from "react";
import SectionTitle from "../../shared/section-title/SectionTitle";
import { Wrapper } from "./ServiceSection.style";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import htmlPhoto from "../../../../public/assets/icones/html.svg";
import coding from "../../../../public/assets/icones/coding.svg";
import mobile from "../../../../public/assets/icones/mobile.svg";
import design from "../../../../public/assets/icones/design.svg";
import marketing from "../../../../public/assets/icones/digital_market.svg";
import laravel from "../../../../public/assets/technos/laravel.svg";
import javascript from "../../../../public/assets/technos/javascript.svg";
import reactjs from "../../../../public/assets/technos/reactjs.svg";
import graphql from "../../../../public/assets/technos/graphql.svg";
import nodejs from "../../../../public/assets/technos/nodejs.svg";
import neo4j from "../../../../public/assets/technos/neo4j.svg";

export type ServiceSectionType = {};
const ServiceSection: React.FC<ServiceSectionType> = () => {
  return (
    <>
      <Wrapper>
        <div className="marketing">
          <div>
            <Image src={laravel} alt={htmlPhoto} className="img" />
          </div>
          <div>
            <Image src={javascript} alt={javascript} className="img" />
          </div>
          <div>
            <Image src={reactjs} alt={reactjs} className="img" />
          </div>
          <div>
            <Image src={graphql} alt={graphql} className="img" />
          </div>
          <div>
            <Image src={nodejs} alt={nodejs} className="img" />
          </div>
          <div>
            <Image src={neo4j} alt={neo4j} className="img" />
          </div>
          <div className="card__marketing">
            <h4>100%</h4>
            <p>Nous assurons le suivi des projets de nos clients</p>
          </div>
        </div>
        <section>
          <SectionTitle title={"Découvrez nos offres"} />
          <Grid container spacing={2} className="services">
            <Grid item xs={4}>
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
            </Grid>
            <Grid item xs={4}>
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
            </Grid>
            <Grid item xs={4}>
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
            </Grid>
            <Grid item xs={4}>
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
            </Grid>
            <Grid item xs={4}>
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
            </Grid>
          </Grid>
        </section>
      </Wrapper>
    </>
  );
};
export default ServiceSection;
