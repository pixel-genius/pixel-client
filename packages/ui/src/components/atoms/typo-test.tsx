type ComponentType = "p" | "span" | "a";

// Define prop types for each component
type ComponentPropMap = {
  p: {
    margin?: string;
  };
  span: {
    fontWeight?: string;
  };
  a: {
    href: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
  };
};

// Base props plus the specific props for type T
type ComponentProps<T extends ComponentType> = {
  component: T;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropMap[T];

const Typography = <T extends ComponentType>({
  component: Component,
  className,
  children,
  ...props
}: ComponentProps<T>) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};


<Typography component="a" href="test" className="text-2xl"></Typography>
