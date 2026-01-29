import { FC } from "react";
import Box, { BoxProps } from "./components/Box";
import { cn } from "@/utils/cn";

/**
 * when to use export type ... vs export interface ...?
 * export type ... is used when the type is a simple object or a union of simple objects
 * export interface ... is used when the type is a complex object or a union of complex objects
 *
 * interface can be extended with other interfaces, but type cannot be extended with other types
 */
export type PageProps = {
  containerProps?: BoxProps;
} & BoxProps;

export const Page: FC<PageProps> = ({ containerProps, children }) => {
  return (
    <Box>
      <main
        className={"flex flex-col items-center w-full min-h-screen"}
        {...containerProps}
      >
        {children}
      </main>
    </Box>
  );
};

export default Page;
