import { cn } from "../utils/cn";

const positionStyles = {
  bottom: "top-full left-1/2 mt-1 -translate-x-1/2",
  right: "top-1/2 left-full ml-1 -translate-y-1/2",
};

export function Tooltip({ children, text, side = "bottom" }) {
  return (
    <div className="group/tooltip relative size-fit">
      <div
        className={cn(
          "pointer-events-none invisible absolute z-50 w-max rounded-xs bg-blue-900 px-2 py-1 text-sm opacity-0 transition-all duration-250 group-hover/tooltip:visible group-hover/tooltip:opacity-100 group-has-focus-visible/tooltip:visible group-has-focus-visible/tooltip:opacity-100",
          positionStyles[side],
        )}
      >
        {text}
      </div>
      {children}
    </div>
  );
}
