"use client";

// Icons
import { Plus } from "lucide-react";

// React
import { useRef, useState, ChangeEvent, useEffect } from "react";

// Next
import Image from "next/image";
import avatar from "../../../../../public/avatar.jpg";
import { profileAPI } from "@/lib/api/test.api";

export default function Avatar({ dataUser }: any) {
  const [imageSrc, setImageSrc] = useState<any>(avatar);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (dataUser?.profile_image_url) {
      setImageSrc(dataUser.profile_image_url);
    }
  }, [dataUser]);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  // Update Image
  const updateImage = async (file: File) => {
    const data = await profileAPI.updateImage(file);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      updateImage(file);
    }
  };

  return (
    <div className="bg-white border border-[#dad8d8] rounded-lg p-6 w-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex flex-col gap-4 items-start">
        <h2 className="text-[#0a0a0a] text-[20px]">Profile Picture</h2>

        <div className="flex flex-wrap gap-6 items-center">
          <div className="h-[96px] w-[96px] rounded-full overflow-hidden relative">
            <Image
              src={imageSrc}
              alt="Profile"
              fill
              className="relative -top-3 object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            <button
              onClick={handleButtonClick}
              className="cursor-pointer bg-[#014162] text-[#f7fcff] w-fit flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-[#015b7f] transition-colors"
            >
              <Plus className="text-[#f7fcff]" />
              <span>Upload New Photo</span>
            </button>

            <p className="text-[#bcb8b1] text-[18px]">
              JPG, PNG or GIF. Max size 5MB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
