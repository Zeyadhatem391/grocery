"use client";

// Components
import Basic from "./_components/Basic";
import Notifications from "./_components/Notifications";
import Avatar from "./_components/Avatar";
import { profileAPI } from "@/lib/api/test.api";
import { useEffect, useState } from "react";

export default function Personal() {
  const [user, setUser] = useState<any>();

  const fetchUser = async () => {
    const data = await profileAPI.getProfile();
    setUser(data.data);
    return data;
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="profile-dashboard mt-[53px]">
      <div className="content flex flex-col gap-[56px]">
        {/* Head */}
        <div className="head flex flex-col justify-between gap-4">
          <h2 className="font-medium text-[20px]">Personal Information</h2>
          <p className="font-normal text-[18px]">
            Manage your personal details and preferences
          </p>
        </div>

        {/* Avatar */}
        <Avatar dataUser={user} />

        {/* Basic Info & Language */}
        <Basic dataUser={user} />

        {/* Notification preference */}
        <Notifications />
      </div>
    </div>
  );
}
