import Image from "next/image";
import React from "react";
import { IconName } from "../types/icons";

interface IconProps {
  name: IconName;
  size?: string;
  svgClassNames?: string;
  parentClassNames?: string;
  children?: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = "24",
  svgClassNames = "",
  parentClassNames = "",
  children,
}) => {
  return (
    <div className={`flex items-center ${parentClassNames}`}>
      <Image
        src={`/icons/${name}.svg`}
        alt={`${name} icon`}
        width={parseInt(size)}
        height={parseInt(size)}
        className={svgClassNames}
      />
      {children && <span>{children}</span>}
    </div>
  );
};

export default Icon;
