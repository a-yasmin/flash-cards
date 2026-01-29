import { FC, ReactNode } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "./components/Card";
import { cn } from "@/utils/cn";

type FlashCardProps = {
  imageSrc?: string;
  children: ReactNode;
};

export const FlashCard: FC<FlashCardProps> = ({ imageSrc, children }) => {
  return (
    <Card
      className={cn(
        "p-4 min-w-2xl min-h-[400px] font-semibold text-3xl  shadow-xl rounded-3xl",
        imageSrc && "grid grid-cols-2",
      )}
    >
      <CardHeader>
        <CardDescription>dddd</CardDescription>
      </CardHeader>
      <CardContent className="flex h-full w-full">{children}</CardContent>
    </Card>
  );
};

export default FlashCard;
