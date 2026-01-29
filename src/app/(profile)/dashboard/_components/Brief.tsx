import { Spinner } from "@/components/ui/spinner";
import { Package, PoundSterling, Star } from "lucide-react";

export default function Brief({ dashboardData, userData, isLoading }: any) {
  console.log(userData);
  return (
    <div className="Brief p-8 bg-[#014162] rounded-[8px] border-[0.8px] border-[#014162] flex flex-col gap-2 ">
      <h2 className="font-medium text-[#F7FCFF] text-[20px] leading-[30px] tracking-[0px]">
        Welcome back,{" "}
        {isLoading ? (
          <span>
            <Spinner className="h-4 inline-block" />
          </span>
        ) : (
          userData?.data?.firstname || "User"
        )}{" "}
        !
      </h2>
      <p className="font-normal text-[#F7FCFF] text-[16px] leading-[19.2px] tracking-[0px]">
        Here's what's happening with your grocery shopping
      </p>

      {/* cards */}
      <div className="cards flex-wrap flex gap-[24px] justify-start">
        <div className="card bg-[#F7FCFF] flex-1 p-4 rounded-[10px] min-w-[190.8px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_4px_12px_rgba(1,65,98,0.2)] cursor-pointer">
          <Package className="text-[#014162]" />
          <p className="text-[#014162] font-normal text-[16px] ">
            Track Orders
          </p>
          <p className="text-[#014162] font-normal text-[16px]">
            {isLoading ? (
              <span>
                <Spinner className="h-4 inline-block" />
              </span>
            ) : (
              dashboardData?.overview?.tracking_order || 0
            )}{" "}
            Active
          </p>
        </div>

        <div className="card bg-[#F7FCFF] flex-1 p-4 rounded-[10px] min-w-[190.8px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_4px_12px_rgba(1,65,98,0.2)] cursor-pointer">
          <Star className="text-[#014162]" />
          <p className="text-[#014162] font-normal text-[16px] ">
            Loyalty Points
          </p>
          <p className="text-[#014162] font-normal text-[16px]">
            {isLoading ? (
              <span>
                <Spinner className="h-4 inline-block" />
              </span>
            ) : (
              dashboardData?.data?.overview?.loyalty_points || 0
            )}{" "}
            pts
          </p>
        </div>

        <div className="card bg-[#F7FCFF] flex-1 p-4 rounded-[10px] min-w-[190.8px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_4px_12px_rgba(1,65,98,0.2)] cursor-pointer">
          <PoundSterling className="text-[#014162]" />
          <p className="text-[#014162] font-normal text-[16px] ">
            Store Credit
          </p>
          <p className="text-[#014162] font-normal text-[16px]">
            £{" "}
            {isLoading ? (
              <span>
                <Spinner className="h-4 inline-block" />
              </span>
            ) : (
              dashboardData?.overview?.store_credits || 0
            )}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
