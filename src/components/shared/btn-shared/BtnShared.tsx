import React from "react";
import { Wrapper } from "./BtnShared.style";
import Link from "next/link";

export type BtnSharedType = {
  className?: string;
  title: string;
  link: string;
};
const BtnShared: React.FC<BtnSharedType> = ({ className, title, link }) => {
  return (
    <Wrapper>
      <Link href={link}>
        <a className={"join" ? "join" : className}>{title}</a>
      </Link>
    </Wrapper>
  );
};

export default BtnShared;
