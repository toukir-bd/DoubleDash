import * as React from "react"
import { cn } from "@/lib/utils"
import NavMenu from "./NavMenu"
import LeftMenu from "./LeftMenu"

const PageStructure = React.forwardRef<HTMLDivElement, React.PropsWithChildren<React.ComponentProps<"div">>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={cn("max-w-[1600px] w-full mx-auto mt-[100px]", className)} ref={ref} {...props}>
        <NavMenu />
        <LeftMenu />
        <div className="">{children}</div>
      </div>
    )
  }
)
PageStructure.displayName = "PageStructure"
export { PageStructure }