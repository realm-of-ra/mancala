import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
import clsx from "clsx";

const Slider = React.forwardRef<any, any>(
  ({ className, track, thumb, range, hideThumb, ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className={clsx(
          "relative h-2 w-full grow overflow-hidden rounded-full bg-[#C7CAD4]",
          track,
        )}
      >
        <SliderPrimitive.Range
          className={clsx("absolute h-full bg-white", range)}
        />
      </SliderPrimitive.Track>
      {!hideThumb && (
        <SliderPrimitive.Thumb
          className={clsx(
            "block h-5 w-5 rounded-full bg-background transition-colors focus-visible:outline-none border-0 disabled:pointer-events-none disabled:opacity-50",
            thumb,
          )}
        />
      )}
    </SliderPrimitive.Root>
  ),
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
