import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuItem from "./MenuItem";

interface Props {}

const SideNavMain = (props: Props) => {
  const pathname = usePathname();

  return (
    <>
      <div
        id="SideNavMain"
        className={`
        fixed z-20 bg-white pt-[70px] h-full lg:border-r w-[75px] overflow-auto
        ${pathname === "/" ? "lg:w-[310px]" : "lg:w-[220px]"}
        `}
      >
        <div className="lg:w-full w-[55px] mx-auto">
          <Link href={`/`}>
            <MenuItem
              iconString="For You"
              colorString={`${pathname === "/" ? "#F02C56" : ""}`}
              sizeString="25"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideNavMain;
