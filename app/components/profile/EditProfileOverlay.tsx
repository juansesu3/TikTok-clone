import { CropperDimensions, ShowErrorObject } from "@/app/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const EditProfileOverlay = () => {
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [cropper, setCropper] = useState<CropperDimensions | null>(null);
  const [upLoadedImage, setUploadedImage] = useState<string | null>(null);
  const [userImage, setUserImage] = useState<string | "">("https://placehold.co/100");
  const [userName, setUserName] = useState<string | "">("");
  const [userBio, setUserBio] = useState<string | "">("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [error, setError] = useState<ShowErrorObject | null>(null);

  return (
    <>
      <div
        id="EditProfileOverlay"
        className="fixed flex justify-center pt-14 md:pt-[105px] 
                z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 overflow-auto "
      >
        <div
          className={`
                relative bg-white w-full max-w-[700px] sm:h-[580px] h-[655px] mx-3 p-4 rounded-lg mb-10
                ${!upLoadedImage ? "h-[655px] " : "h-[580px] "}
                `}
        >
          <div
            className="absolute flex items-center justify-between
             w-full p-5 left-0 top-0 border-b border-b-gray-300 "
          >
            <h1 className="text-[22px] font-medium">Edit profile</h1>
            <button
              disabled={isUploading}
              className="hover:bg-gray-200 p-1 rounded-full"
            >
              <AiOutlineClose size="25" />
            </button>
          </div>
          <div
            className={`h-[calc(500px-200px)] ${
              !upLoadedImage ? "mt-16" : "mt-[58px]"
            }`}
          >
            {!upLoadedImage ? (
              <div>
                <div
                  id="ProfilePhotoSection"
                  className="flex flex-col border-b sm:h-[118px] h-[145px] px-1.5 py-2 w-full"
                >
                  <h3 className="font-semibold text-[15px] sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center">
                    Profile photo
                  </h3>
                  <div className="flex items-center justify-center sm:-mt-6">
                    <label htmlFor="image" className="relative cursor-pointer">
                      <img className="rounded-full" width="95" src={userImage} alt="profile photo" />
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfileOverlay;
