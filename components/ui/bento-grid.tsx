import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-8 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <article
      className={cn(
        "shadow-input flex flex-col justify-between rounded-xl border p-4 transition duration-200 hover:shadow-xl overflow-hidden",
        "w-full h-full",
        className
      )}
    >
      <div className="relative w-full h-2/3 overflow-hidden rounded-lg">
        {header}
        <div className="absolute top-1 right-1">{icon}</div>
      </div>
      <div className="flex flex-col  h-1/3 mt-4">
        <h2 className="font-sans font-bold text-lg">{title}</h2>
        <div className="font-sans text-sm font-light overflow-auto scrollbar-hide">
          {description}
        </div>
      </div>
    </article>
  );
};
