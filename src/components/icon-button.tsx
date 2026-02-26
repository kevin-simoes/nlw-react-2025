import { type ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function IconButton({ className, children, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        "p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue-500 text-gray-900",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
