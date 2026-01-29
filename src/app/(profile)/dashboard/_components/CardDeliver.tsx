// Icons
import { Spinner } from "@/components/ui/spinner";
import { ShoppingCart, ChevronRight, Calendar } from "lucide-react";

// Next
import Link from "next/link";

export default function CardDeliver({ dashboardData, isLoading }: any) {
  // this logic becouse the last_updated is not a date it saved as a string
  const currentCart = dashboardData?.data?.overview?.current_cart;
  let timeDisplay = "0 mins";

  if (currentCart?.last_updated) {
    const last = new Date(currentCart.last_updated).getTime();
    if (!isNaN(last)) {
      const now = new Date().getTime();
      const diffMs = now - last;
      const minutes = Math.floor(diffMs / (1000 * 60));

      if (minutes < 60) {
        timeDisplay = `${minutes} mins`;
      } else {
        const hours = Math.floor(minutes / 60);
        timeDisplay = `${hours} hours`;
      }
    }
  }

  return (
    <div className="Cart-Deliver flex flex-wrap gap-[24px] justify-between items-center">
      <div className="Cart flex-1 min-w-[340px] h-[240px] rounded-[8px] border-[0.8px] p-[24px] flex flex-col gap-[16px] shadow-[-1px_0px_4px_0px_#01416240] transition-all duration-300 hover:shadow-[0px_8px_16px_rgba(1,65,98,0.15)] hover:-translate-y-1 hover:border-[#014162]">
        <div className="head min-w-[340px] h-[35px] flex items-center justify-between gap-[60px]">
          <div className="title flex items-center gap-[12px]">
            <ShoppingCart className="text-[#014162]" />
            <p className="font-medium text-[#014162] text-[16px] leading-[19.2px] tracking-[0px]">
              Current Cart
            </p>
          </div>
          <button className="button cursor-pointer bg-[#BCB8B1] text-[#014162] h-[35px] rounded-[8px] flex items-center justify-center gap-[4px] pt-[8px] pb-[8px] pl-[6px] pr-[6px] transition-colors hover:bg-[#A8A49D]">
            View Cart
          </button>
        </div>
        <div className="items flex gap-4 bg-[#F7FCFF] rounded-[10px] min-w-[282px] p-2 justify-between items-center px-[12px] shadow-[0px_2px_4px_0px_#01416240]">
          <div className="flex flex-col gap-[4px]  ">
            <p className="font-normal text-[16px] leading-[19.2px]">
              {isLoading ? (
                <Spinner className="h-4 inline-block" />
              ) : (
                currentCart?.items_count || "0"
              )}{" "}
              items in cart
            </p>
            <p className="font-normal text-[12px] leading-[18px]">
              Last updated:{" "}
              {isLoading ? (
                <Spinner className="h-4 inline-block" />
              ) : (
                timeDisplay
              )}{" "}
              ago
            </p>
          </div>
          <p className="font-inter font-normal text-[16px] leading-[19.2px]">
            £{" "}
            {isLoading ? (
              <Spinner className="h-4 inline-block" />
            ) : (
              dashboardData?.data?.overview?.current_cart?.total
            )}{" "}
          </p>
        </div>
        <Link
          className="cursor-pointer  justify-center   text-[#F7FCFF] font-normal text-[16px] leading-[19.2px] bg-[#014162] min-w-[282px] h-[40px] rounded-[8px] flex items-center gap-[4px] p-[8px] transition-all hover:bg-[#025a8a] shadow-md hover:shadow-lg"
          href="/"
        >
          Continue Shopping <ChevronRight className="ml-1" />
        </Link>
      </div>

      <div className="Cart flex-1 min-w-[340px] h-[240px] rounded-[8px] border-[0.8px] p-[24px] flex flex-col gap-[16px] shadow-[-1px_0px_4px_0px_#01416240] transition-all duration-300 hover:shadow-[0px_8px_16px_rgba(1,65,98,0.15)] hover:-translate-y-1 hover:border-[#014162]">
        <div className="head w-full h-[35px] flex items-center justify-between gap-[60px]">
          <div className="title flex items-center gap-[12px]">
            <Calendar className="text-[#014162]" />
            <p className="font-medium text-[#014162] text-[16px] leading-[19.2px] tracking-[0px]">
              Upcoming Delivery
            </p>
          </div>
          <button className="button cursor-pointer bg-[#BCB8B1] text-[#014162] h-[35px] rounded-[8px] flex items-center justify-center gap-[4px] pt-[8px] pb-[8px] pl-[6px] pr-[6px] transition-colors hover:bg-[#A8A49D]">
            Track
          </button>
        </div>

        <div className="items flex gap-4 bg-[#F7FCFF] rounded-[10px] min-w-[282px] p-2 justify-between items-center px-[12px] shadow-[0px_2px_4px_0px_#01416240]">
          <div className="flex flex-col gap-[4px]  ">
            <p className="font-normal text-[16px] leading-[19.2px]">
              {isLoading ? (
                <Spinner className="h-4 inline-block" />
              ) : (
                dashboardData?.upcoming_delivery?.items_count || "0"
              )}{" "}
              items in cart
            </p>
            <p className="font-normal text-[12px] leading-[18px]">
              {isLoading ? (
                <Spinner className="h-4 inline-block" />
              ) : (
                dashboardData?.upcoming_delivery?.from || "00:00"
              )}{" "}
              -{" "}
              {isLoading ? (
                <Spinner className="h-4 inline-block" />
              ) : (
                dashboardData?.upcoming_delivery?.to || "00:00"
              )}
            </p>
            <p className="font-normal text-[12px] leading-[18px]">
              Order{" "}
              {isLoading ? (
                <Spinner className="h-4 inline-block" />
              ) : (
                dashboardData?.upcoming_delivery?.code || "#0000"
              )}
            </p>
          </div>
        </div>
        <Link
          className="cursor-pointer  justify-center   text-[#F7FCFF] font-normal text-[16px] leading-[19.2px] bg-[#014162] min-w-[282px] h-[40px] rounded-[8px] flex items-center gap-[4px] p-[8px] transition-all hover:bg-[#025a8a] shadow-md hover:shadow-lg"
          href="#"
        >
          View Details <ChevronRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
