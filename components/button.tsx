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
    primary: `bg-purple-500 text-white hover:bg-purple-600`,
    secondary: `border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white`,
    black: `bg-black text-white hover:bg-gray-900`,
  };
  const pickedVariant = variant ? variants[variant] : variants["primary"];
  return (
    <a
      className={clasnames(
        "inline-block px-6 py-2 text-lg transition font-semibold font-mono",
        pill && "rounded-lg",
        pickedVariant,
        className
      )}
    >
      {children}
    </a>
  );
}
