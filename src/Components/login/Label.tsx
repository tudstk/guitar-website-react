import React from "react";

const Label = (props: {
  text: string;
  htmlFor: string;
  required?: boolean;
}) => {
  const { text, required, htmlFor } = props;
  return (
    <>
      <label htmlFor={htmlFor}>
        <span className="font-bold">{text}</span>
        {required && <span className="text-gray-400">*</span>}
      </label>
    </>
  );
};

export default Label;