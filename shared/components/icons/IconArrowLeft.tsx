import type { FC } from "react";
import { Icon, type IconProps } from "./Icon";

const variants = {
  outline: (
    <>
      <path
        d="M19,11H9l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-4.29,4.3A2,2,0,0,0,6,12H6a2,2,0,0,0,.59,1.4l4.29,4.3a1,1,0,1,0,1.41-1.42L9,13H19a1,1,0,0,0,0-2Z"
        fill="currentColor"
      />
    </>
  ),
};

const IconAroowLeft: FC<IconProps<typeof variants>> = ({
  viewBox = "0 0 24 24",
  variant = "outline",
  ...props
}) => <Icon viewBox={viewBox} element={variants[variant]} {...props} />;

export default IconAroowLeft;
