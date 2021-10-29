import React from "react";
import { Wrapper } from "./FormSearch.style";
export type FormSearchType = {
	label: string;
};
const FormSearch: React.FC<FormSearchType> = ({ label }) => {
	return (
    <Wrapper>
      <input
        type="text"
        name="formSearch"
        id="formSearch"
        className="form__search"
        placeholder="Rechercher un service: site web, design,..."
      />
      <button type="submit" className="btn__search">
        Rechercher
      </button>
    </Wrapper>
  );
};

export default FormSearch;
