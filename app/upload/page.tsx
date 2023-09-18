"use client";

import { useRouter } from "next/navigation";
import { use, useState } from "react";
import { UploadError } from "../types";
import UploadLayout from "../layouts/UploadLayout";

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
        </div>
      </UploadLayout>
    </>
  );
};

export default Upload;
