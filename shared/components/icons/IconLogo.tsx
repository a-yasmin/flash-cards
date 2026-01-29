import type { FC } from "react";
import { Icon, type IconProps } from "./Icon";

const variants = {
  outline: (
    <>
      <path
        d="M 1.371094 15.921875 L 52.667969 15.921875 L 52.667969 71.625 L 1.371094 71.625 Z M 1.371094 15.921875 "
        clip-rule="nonzero"
        fill="currentColor"
      />
    </>
  ),
};

const IconClose: FC<IconProps<typeof variants>> = ({
  viewBox = "0 0 24 24",
  variant = "outline",
  ...props
}) => <Icon viewBox={viewBox} element={variants[variant]} {...props} />;

export default IconClose;
