
import * as React from "react"
import { cn } from "@/lib/utils"

const CardBox = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(
          "bg-white/[.3] rounded-[50px] py-[25px] px-[25px] shadow-lg/[.035]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
CardBox.displayName = "CardBox"
export { CardBox }