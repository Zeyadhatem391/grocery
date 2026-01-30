"use client";

// Components 
import Container from "@/components/common/Container";
import Navbar from "@/components/layout/Navbar";

// API
import { profileAPI } from "@/lib/api/test.api";

// React
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState();
  const fetchProfileData = async () => {
    const data = await profileAPI.getProfile();
    setUserData(data?.data);
  };

  useEffect(() => {
    fetchProfileData();
  }, []);
  return (
    <Container>
      <div className="flex gap-[24px] justify-between h-auto">
        <div className="left-content w-[70px] md:w-[267px] transition-all duration-300 shrink-0 relative">
          <Navbar userData={userData} />
        </div>
        <div className="right-content flex-1 pt-[20px] pb-[50px]">
          {children}
        </div>
      </div>
    </Container>
  );
}
