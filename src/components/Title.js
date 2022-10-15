import React from "react";

const Title = ({title}) => {
  return (
    <div>
      <h2 className="section-title">{title || 'default title'}</h2>
      <div className="underline"></div>
    </div>
  );
};

export default Title;
