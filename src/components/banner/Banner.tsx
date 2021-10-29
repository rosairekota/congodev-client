import React from "react";
import { Wrapper } from "./Banner.style";
import Image from "next/image";
import developerProfile from "../../../public/assets/emie.png";
import svgOne from "../../../public/assets/illustrations/Vector1.svg";
import svgTwo from "../../../public/assets/illustrations/Vector2.svg";
import svgThree from "../../../public/assets/illustrations/Vector3.svg";
import FormSearch from "../shared/form-search/FormSearch";
type BannerType = {
  title?: string;
  description?: string;
};
const Banner: React.FC<BannerType> = (props) => {
  return (
    <>
      <Wrapper>
        <section className="banner">
          <Hiro
            title={" Avez-vous un projet innovant?"}
            description="Trouvez un Dévéloppeur Qualifié et Compétent"
            className="hiro"
          />
          <LocalImage img={svgOne} className="img__svgOne" />
          <LocalImage img={developerProfile} className="image" />
          <LocalImage img={svgThree} className="img__svgThree" />
          <LocalImage img={svgTwo} className="img__svgTwo" />
        </section>
      </Wrapper>
    </>
  );
};

export default Banner;

type HiroType = {
	title: string;
	description?: string;
	className?: string | any;
	classeImg?: string | any;
};
export const Hiro: React.FC<HiroType> = ({
	title,
	description,
	className,
	classeImg,
}) => {
	return (
		<>
			<div className={className}>
				<h1>{title}</h1>
				<p>{description}</p>
				<FormSearch label={"home"} />
			</div>
		</>
	);
};

type ImageType = {
	img: any;
	className?: string;
};
export const LocalImage: React.FC<ImageType> = ({ img, className }) => {
	return (
		<>
			<div className={className}>
				<Image src={img} alt={img} />
			</div>
		</>
	);
};
