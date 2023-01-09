import clasnames from "classnames";

export default function Button({
  children,
  className,
  variant,
  pill,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "black";
  pill?: boolean;
}) {
  const addClassName = className ? `${className}` : "";
  const variants = {
    primary: `bg-yellow-500 text-black hover:bg-yellow-600`,
    secondary: `border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black`,
    black: `bg-black text-white hover:bg-gray-900`,
  };
  const pickedVariant = variant ? variants[variant] : variants["primary"];
  return (
    <a
      className={clasnames(
        "inline-block px-10 py-3 text-lg transition font-semibold ",
        pill && "rounded-full",
        pickedVariant,
        className
      )}
    >
      {children}
    </a>
  );
}
