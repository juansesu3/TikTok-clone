"use client";
import React, { useEffect } from "react";
import { PostMainCompTypes } from "../types";
import Link from "next/link";

interface Props {}

const PostMain = ({ post }: PostMainCompTypes) => {
  useEffect(() => {
    const video = document.getElementById(
      `video-${post?.id}`
    ) as HTMLVideoElement;
    const postMainElement = document.getElementById(`PostMain-${post?.id}`);
    if (postMainElement) {
      let observer = new IntersectionObserver(
        (entries) => {
          entries[0].isIntersecting ? video?.play() : video.pause();
        },
        { threshold: [0.6] }
      );
      observer.observe(postMainElement);
    }
  }, []);

  return (
    <>
      <div id={`PostMain-${post.id}`} className="flex border-b py-6">
        <div className="cursor-popinter">
          <img
            className="rounded-full max-h[60px] "
            width="60"
            src={post?.profile?.image}
          />
        </div>
        <div className="pl-3 w-full px-4">
          <div className="flex items-center justify-between pb-0.5">
            <Link href={`/profile/${post.profile.user_id}`}>
              <span className="font-bold hover:underline cursor-pointer">
                {post?.profile?.name}
              </span>
            </Link>
            <button className="border text-[15px] px-[21px] py-0.5 border-[#F02C56] text-[#F02C56] hover:bg-[#ffeef2] font-semibold rounded-md">
              Follow
            </button>
          </div>
          <p className="text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px] ">
            {post.text}
          </p>
          <p className="text-[14px] text-gray-500 pb-0.5 ">
            #fun #cool #SuperAwesome 

          </p>
        </div>
      </div>
    </>
  );
};

export default PostMain;
