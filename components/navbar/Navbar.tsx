import Button from "../button";
import Logo from "../logo";
import Nav from "./Nav";
import { useState } from "react";
import classnames from "classnames";

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);

  return (
    <>
      <div className="flex items-center py-10">
        <div className="w-3/12 ">
          <Logo />
        </div>
        <div className="w-7/12 hidden md:block">
          <Nav dir="horizontal" scheme="light" />
        </div>
        <div className="w-2/12 text-right hidden md:block">
          <Button pill variant="secondary">
            Get Started
          </Button>
        </div>

        <div className="w-9/12 md:hidden text-right">
          <img
            src="/menu.svg"
            alt=""
            className="inline-block"
            onClick={() => setOffcanvas(true)}
          />
        </div>
      </div>
      <div
        className={classnames(
          "fixed bg-white z-10 top-0 h-full w-full p-10 md:hidden transition-all",
          offcanvas ? "right-0" : "-right-full"
        )}
      >
        <img
          src="/x.svg"
          className="absolute top-8 right-8 w-8"
          alt=""
          onClick={() => setOffcanvas(false)}
        />
        <Nav dir="vertical" scheme="dark" />
      </div>
    </>
  );
}
