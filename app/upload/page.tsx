"use client";

import { useRouter } from "next/navigation";
import { use, useState } from "react";
import { UploadError } from "../types";
import UploadLayout from "../layouts/UploadLayout";
import { BiSolidCloudUpload } from "react-icons/bi";

const Upload = () => {
  const router = useRouter();
  let [fileDisplay, setFileDisplay] = useState<string>("");
  let [caption, setCaption] = useState<string>("");
  let [file, setFile] = useState<File | null>(null);
  let [error, setError] = useState<UploadError | null>(null);
  let [isUploading, setIsUploading] = useState<boolean>(false);

  return (
    <>
      <UploadLayout>
        <div className="w-full mt-[80px] mb-[40px] bg-white shadow-lg rounded-md py-6 md:px-10 px-4">
          <div>
            <h1 className="text-[23px] font-semibold ">Upload video</h1>

            <h2 className="text-gray-400 mt-1">Post a video to your account</h2>
          </div>
          <div className="mt-8 md:flex gap-6">
            {!fileDisplay ? (
              <label
                htmlFor="fileInput"
                className="md:mx-0 mx-auto mt-4 mb-6 flex flex-col 
                        items-center justify-center w-full max-w-[260px] h-[470px] 
                        text-center p-3 border-2 border-dashed border-gray-300 
                        rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <BiSolidCloudUpload size="40" color="#b3b3b1" />
                <p className="mt-4 text-[17px] ">Select video to upload</p>
                <p className="mt-1.5 text-gray-500 text-[13px] ">
                  Or drag and drop a file
                </p>
                <p className="mt-12 text-gray-400 text-sm">MP4</p>
                <p className="mt-2 text-gray-400 text-[13px] ">
                  Up to 30 minutes
                </p>
                <p className="mt-2 text-gray-400 text-13px] ">Less than 2 GB</p>
              </label>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </UploadLayout>
    </>
  );
};

export default Upload;
