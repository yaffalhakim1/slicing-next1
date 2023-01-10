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
    horizontal: "justify-end space-x-10",
    vertical: "flex flex-col space-y-6",
  };

  const pickedDir = dirs[dir || "horizontal"];
  return (
    <ul className={classnames("flex", pickedDir)}>
      <NavItem scheme={scheme} href="#hero">
        <span className="font-mono text-green">01.</span> Home
      </NavItem>
      <NavItem scheme={scheme} href="#profile">
        <span className="font-mono text-green">02.</span> Profile
      </NavItem>
      <NavItem scheme={scheme} href="#skill">
        <span className="font-mono text-green">03.</span> Skills
      </NavItem>
      <NavItem scheme={scheme} href="#project">
        <span className="font-mono text-green">04.</span> Projects
      </NavItem>
      <NavItem scheme={scheme} href="#contact">
        <span className="font-mono text-green">05.</span> Contact
      </NavItem>
    </ul>
  );
}
