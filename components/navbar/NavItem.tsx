import classnames from "classnames";

export default function NavItem({
  children,
  href,
  scheme,
}: {
  children: React.ReactNode;
  href: string;
  scheme?: "light" | "dark";
}) {
  const schemes = {
    light: "text-white text-opacity-60 hover:text-opacity-100",
    dark: "text-black",
  };

  const pickedScheme = schemes[scheme || "dark"];
  return (
    <li>
      <a
        className={
          (classnames("text-white text-lg  font-semibold  transition"),
          pickedScheme)
        }
        href={href}
      >
        {children}
      </a>
    </li>
  );
}
