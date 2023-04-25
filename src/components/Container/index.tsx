import React from "react";

import mapModifiers from "utils/functions";

interface ContainerProps {
  fullScreen?: boolean;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ fullScreen, children }) => (
  <div
    className={`container ${mapModifiers(
      "containerCustom",
      fullScreen && "fullscreen"
    )}`}
  >
    {children}
  </div>
);

Container.defaultProps = {
  fullScreen: false,
};

export default Container;
