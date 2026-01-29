import type { FC } from "react";
import { Icon, type IconProps } from "./Icon";

const variants = {
  outline: (
    <>
      <path
        d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z"
        fill="currentColor"
      />
    </>
  ),
};

const IconArrowRight: FC<IconProps<typeof variants>> = ({
  viewBox = "0 0 24 24",
  variant = "outline",
  ...props
}) => <Icon viewBox={viewBox} element={variants[variant]} {...props} />;

export default IconArrowRight;
