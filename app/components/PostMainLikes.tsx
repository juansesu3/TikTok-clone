import { useState } from "react";
import { Like, PostMainLikesCompTypes } from "../types";
import { AiFillHeart } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface Props {}

const PostMainLikes = ({ post }: PostMainLikesCompTypes) => {
  const router = useRouter();
  const [hasClickedLike, setHasClickedLike] = useState<boolean>(false);
  const [userLiked, setUserLiked] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [likes, setLikes] = useState<Like[]>([]);
  const likeOrUnlilke = () => {
    console.log("likeOrUnlilke");
  };

  return (
    <>
      <div id={`PostMainLikes-${post.id}`} className="relative mr-[75px]">
        <div className="absolute bottom-0 pl-2">
          <div className="pb-4 text-center">
            <button
              disabled={hasClickedLike}
              onClick={() => likeOrUnlilke()}
              className="rounded-full bg-gray-200 p-2 cursor-pointer"
            >
              {!hasClickedLike ? (
                <AiFillHeart
                  color={likes?.length > 0 && userLiked ? "#ff2626" : ""}
                />
              ) : (
                <BiLoaderCircle className="animate-spin " size="25" />
              )}
            </button>
            <span className="text-xs text-gray-800 font-semibold">
              {likes?.length}
            </span>
          </div>
          <button
            onClick={() =>
              router.push(`/post/${post?.id}/${post?.profile?.user_id}`)
            }
            className="pb-4 text-center"
          >
            <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
              <FaCommentDots />
            </div>
            <span className="text-xs text-gray-800 font-semibold">
              {comments?.length}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PostMainLikes;
