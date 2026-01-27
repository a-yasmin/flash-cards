import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/utils/cn"
import { cva, VariantProps } from "class-variance-authority"


const buttonVariants = cva(
  cn( "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-medium h-10 px-4 py-3 capitalize"
   ),
  {
    variants: {
      variant: {
        default: "bg-primary1 text-primary5 font-semibold hover:opacity-90 capitalize",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        link: "text-primary underline-offset-4 hover:underline",

      },
      // size: {
      //   default: "h-9 px-4 py-2 has-[>svg]:px-3",
      //   xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
      //   sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      //   lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      //   icon: "size-9",
      //   "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
      //   "icon-sm": "size-8",
      //   "icon-lg": "size-10",
      // },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      className={cn(buttonVariants({ variant,  className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
