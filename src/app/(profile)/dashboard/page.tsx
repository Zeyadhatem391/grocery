"use client";
// APIs
import { dashboardAPI, profileAPI } from "@/lib/api/test.api";
// components
import Brief from "./_components/Brief";
import CardDeliver from "./_components/CardDeliver";
import Insights from "./_components/Insights";
import History from "./_components/History";

// React
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState();
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);

  // Fetch Dashboard Data
  const fetchDashboardData = async () => {
    const data = await dashboardAPI.getDashboard();
    setDashboardData(data);
    setLoading(false);
  };

  // Fetch User Data
  const fetchUserData = async () => {
    const data = await profileAPI.getProfile();
    setUserData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchDashboardData();
    fetchUserData();
  }, []);

  return (
    <div className="profile-dashboard mt-0 md:mt-[53px]">
      <div className="content  flex flex-col gap-[56px]">
        {/* Brief */}
        <Brief
          dashboardData={dashboardData}
          userData={userData}
          isLoading={loading}
        />

        {/* cart & deliver */}
        <CardDeliver dashboardData={dashboardData} isLoading={loading} />

        {/* Insights Cards & Most Bought Chart */}
        <Insights dashboardData={dashboardData} isLoading={loading} />

        {/* Order History & Top Purchases */}
        <History dashboardData={dashboardData} isLoading={loading} />
      </div>
    </div>
  );
}
