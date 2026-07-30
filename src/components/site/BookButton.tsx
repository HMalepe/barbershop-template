import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function BookButton({
  className,
  label = "Book a chair",
  href = "#visit",
}: {
  className?: string;
  label?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full bg-primary py-2 pl-5 pr-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
        className,
      )}
    >
      {label}
      <span className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <ArrowRight className="size-4" />
      </span>
    </a>
  );
}
