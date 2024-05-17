"use client";
import { cn } from "@/utils/cn";

export const ButtonsCard = ({
  title,
  className,
  onClick,
}: {
  title?: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "shadow-[inset_0_0_0_2px_#616467] px-10 py-4 rounded-full tracking-widest uppercase font-semibold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200",
        className
      )}
    >
      {title}
    </button>
  );
};
