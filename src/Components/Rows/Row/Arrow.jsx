import React, { useContext } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import {VisibilityContext } from "react-horizontal-scrolling-menu";

//Arrow component that takes direction and onClick as props
const Arrow = ({ direction, onClick }) => {
  return (
    <div className={`arrow arrow-${direction}`} onClick={onClick}>
      {direction === "left" ? <ArrowBackIos /> : <ArrowForwardIos />}
    </div>
  );
};

//leftArroe function for scrolling left
export const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return <Arrow direction="left" onClick={() => scrollPrev()} />;
};

//rightArrow function for scrolling right
export const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return <Arrow direction="right" onClick={() => scrollNext()} />;
};
