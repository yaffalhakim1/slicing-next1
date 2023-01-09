import NavItem from "./NavItem";
import classnames from "classnames";

export default function Nav({
  dir,
  scheme,
}: {
  dir?: "horizontal" | "vertical";
  scheme?: "light" | "dark";
}) {
  const dirs = {
    horizontal: "justify-center space-x-10",
    vertical: "flex flex-col space-y-6",
  };

  const pickedDir = dirs[dir || "horizontal"];
  return (
    <ul className={classnames("flex", pickedDir)}>
      <NavItem scheme={scheme} href="#hero">
        Home
      </NavItem>
      <NavItem scheme={scheme} href="#profile">
        About
      </NavItem>
      <NavItem scheme={scheme} href="#skill">
        Services
      </NavItem>
      <NavItem scheme={scheme} href="#project">
        Portfolio
      </NavItem>
      <NavItem scheme={scheme} href="#contact">
        Contact
      </NavItem>
    </ul>
  );
}
