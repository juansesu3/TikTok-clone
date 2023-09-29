"use clilent";
import { CommentsHeaderCompTypes } from "@/app/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import { ImMusic } from "react-icons/im";
import ClientOnly from "../ClientOnly";
import { AiFillHeart } from "react-icons/ai";

const CommentsHeader = ({ post, params }: CommentsHeaderCompTypes) => {
  const router = useRouter();
  const [handleClickedLike, setHandleClickedLike] = useState<boolean>(false);
  const [hasClcikedLike, setHasClcikedLike] = useState<boolean>(false);
  const [isDelteing, setIsDelteing] = useState<boolean>(false);
  const [userLiked, setUserLiked] = useState<boolean>(false);

  const deletePost = () => {};

  const likeOnUnLike =()=>{};
  return (
    <>
      <div className="flex items-center justify-between px-8">
        <div className="flex items-center">
          <Link href={`/profile/${post?.user_id}`}>
            {post?.profile.image ? (
              <img
                className="rounded-full lg:mx-0 mx-auto"
                width="40"
                src={post?.profile.image}
              />
            ) : (
              <div className="w-[40px] h-[40px] bg-gray-200 rounded-full" />
            )}
          </Link>
          <div className="ml-3 pt-0.5">
            <Link
              href={`/profile/${post?.user_id}`}
              className="relative z-10 text-[17px] font-semibold hover:underline"
            >
              {post?.profile.name}
            </Link>
            <div className="relative z-0 text-[13px] -mt-5 font-light">
              {post?.profile.name}

              <span className="realative -top-[2px] text-[30px] pl-1 pr-0.5 ">
                .
              </span>
              <span className="font-medium">{post?.created_at}</span>
            </div>
          </div>
        </div>

        {true ? (
          <div>
            {isDelteing ? (
              <BiLoaderCircle className="animate-spin" size="25" />
            ) : (
              <button disabled={isDelteing} onClick={() => deletePost()}>
                <BsTrash3 className="cursor-pointer" size="25" />
              </button>
            )}
          </div>
        ) : null}
      </div>
      <p className="px-8 mt-4 text-sm">{post?.text}</p>
      <p className="flex items-center gap-2 px-8 mt-4 text-sm font-bold">
        <ImMusic size="17" />
        original sound - {post?.profile.name}
      </p>
      <div className="flex items-center px-8 mt-8 ">
        <ClientOnly>
          <div className="pb-4 text-center flex items-center">
            <button
              disabled={hasClcikedLike}
              onClick={()=> likeOnUnLike()}
              className="rounded-full bg-gray-200 p-2 cursor-pointer"

            >
              {!hasClcikedLike ?(
                <AiFillHeart size="25"  />
              ):(
                <BiLoaderCircle className="animate-spin" size="25" />

              )}

            </button>

          </div>

        </ClientOnly>

      </div>
    </>
  );
};

export default CommentsHeader;
