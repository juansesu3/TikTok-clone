import React, { useEffect, useState } from "react";
import { MenuItemFollowComptypes } from "../../types";
import Link from "next/link";

interface Props {}

const MenuItemFollow = ({ user }: MenuItemFollowComptypes) => {
  return (
    <>
      <Link
        href={`/profile/${user?.id}`}
        className="flex items-center hover:bg-gray-100 rounded-md w-full py-1.5 px-2"
      >
        <img
          className="rounded-full lg:mx-0 mx-auto"
          width="35"
          src={`${user?.image}`}
        />
      </Link>
    </>
  );
};

export default MenuItemFollow;
