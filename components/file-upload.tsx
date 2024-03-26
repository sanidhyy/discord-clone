"use client";

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css";

type FileUploadProps = {
  endpoint: "messageFile" | "serverImage";
  onChange: (url?: string) => void;
  value: string;
};

export const FileUpload = ({ endpoint, onChange, value }: FileUploadProps) => {
  const fileType = value.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image src={value} alt="uploaded image" className="rounded-full" fill />
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      className="border-zinc-500 ut-button:bg-indigo-500 ut-button:ut-uploading:bg-indigo-500/70 after:ut-button:ut-uploading:bg-indigo-500 ut-label:text-indigo-500 hover:ut-label:text-indigo-500/70"
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error) => {
        console.error("File Upload Error: ", error);
      }}
    />
  );
};
