import * as React from "react"
import { cn } from "@/lib/utils"

const PageStructure = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(
          "max-w-[1600px] w-full mx-auto mt-[100px]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
PageStructure.displayName = "PageStructure"
export { PageStructure }