import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React from "react";

interface Props {}

const TopNav = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div
        id="TopNav"
        className="fixed bg-white z-30 flex items-center w-full border-b h[-60px]"
      >
        <div
          className={`flex  items-center justify-between gap-6 w-full p-2 mx-auto ${
            pathname === "/" ? "max-w-[1150px]" : ""
          }`}
        >
          <Link href="/">
            <img
              className="min-w-[115px] w-[115px] "
              src="/images/tiktok-logo.png"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopNav;
