import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const DotButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev flex-row-reverse"
      type="button"
      {...restProps}
    >
      Previous
      <FaAngleLeft />
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      Next
      <FaAngleRight />
      {children}
    </button>
  );
};
