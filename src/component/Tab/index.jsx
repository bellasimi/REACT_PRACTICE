import React, { useState } from "react";

const Tab = ({ children, active, onActive }) => {
  const childrenToArray = () => {
    return React.Children.toArray(children).filter((element) =>
      React.isValidElement(element)
    );
  };
  const [currentActive, setCurrentActive] = useState(() => {
    if (active) return active;
    else {
      const index = childrenToArray();
      console.log(index);
    }
  });

  return <div></div>;
};
