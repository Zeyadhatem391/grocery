// Components
import { Spinner } from "@/components/ui/spinner";

// Icons
import {
  PoundSterling,
  TrendingUp,
  ListChecks,
  HandCoins,
  Star,
} from "lucide-react";

export default function Insights({ dashboardData, isLoading }: any) {
  return (
    <div className="Insights rounded-[8px] border-[0.8px] p-[24px] flex flex-col gap-[24px]">
      <h2 className="font-medium text-[20px] leading-[30px] text-[#014162]">
        Your Shopping Insights
      </h2>

      <div className="shopping-insight flex-wrap flex items-center gap-[15px]">
        <div className="card flex-1 bg-[#014162] rounded-[10px] p-4 gap-2 flex flex-col justify-between min-w-[180px] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0px_8px_16px_rgba(1,65,98,0.25)] hover:bg-[#025a8a] cursor-pointer">
          <div className="icon flex items-center justify-between gap-[4px] w-full">
            <PoundSterling className="text-[#F7FCFF] rounded-[10px] flex items-center justify-center" />
            <TrendingUp className="text-[#F7FCFF] rounded-[10px] flex items-center justify-center" />
          </div>
          <p className="font-normal text-[#F7FCFF] text-[16px] leading-[19.2px]">
            Monthly Spend
          </p>
          <p className="font-normal text-[#F7FCFF] text-[18px] leading-[19.2px]">
            £{" "}
            {isLoading ? (
              <Spinner className="h-4 inline-block" />
            ) : (
              dashboardData?.data?.shopping_insights?.monthly_spend
            )}
          </p>
          <p className="font-normal text-[#F7FCFF] text-[14px] leading-[19.2px]">
            ↑ 12% from last month
          </p>
        </div>

        <div className="card flex-1 bg-[#014162] rounded-[10px] p-4 gap-2 flex flex-col justify-between min-w-[180px] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0px_8px_16px_rgba(1,65,98,0.25)] hover:bg-[#025a8a] cursor-pointer">
          <div className="icon flex items-center justify-between gap-[4px] w-full">
            <ListChecks className="text-[#F7FCFF] rounded-[10px] flex items-center justify-center" />
          </div>
          <p className="font-normal text-[#F7FCFF] text-[16px] leading-[19.2px]">
            Orders This Month
          </p>
          <p className="font-normal text-[#F7FCFF] text-[18px] leading-[19.2px]">
            {isLoading ? (
              <Spinner className="h-4 inline-block" />
            ) : (
              dashboardData?.data?.shopping_insights?.orders_this_month?.count
            )}
          </p>
          <p className="font-normal text-[#F7FCFF] text-[14px] leading-[19.2px]">
            Every ~
            {isLoading ? (
              <Spinner className="h-4 inline-block" />
            ) : (
              dashboardData?.data?.shopping_insights
                ?.average_days_between_orders
            )}{" "}
            days
          </p>
        </div>

        <div className="card flex-1 bg-[#014162] rounded-[10px] p-4 gap-2 flex flex-col justify-between min-w-[180px] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0px_8px_16px_rgba(1,65,98,0.25)] hover:bg-[#025a8a] cursor-pointer">
          <div className="icon flex items-center justify-between gap-[4px] w-full">
            <HandCoins className="text-[#F7FCFF] rounded-[10px] flex items-center justify-center" />
          </div>
          <p className="font-normal text-[#F7FCFF] text-[16px] leading-[19.2px]">
            Total Saving
          </p>
          <p className="font-normal text-[#F7FCFF] text-[18px] leading-[19.2px]">
            {isLoading ? (
              <Spinner className="h-4 inline-block" />
            ) : (
              dashboardData?.data?.shopping_insights?.total_savings
            )}
          </p>
          <p className="font-normal text-[#F7FCFF] text-[14px] leading-[19.2px]">
            Coupons & Discounts
          </p>
        </div>

        <div className="card flex-1 bg-[#014162] rounded-[10px] p-4 gap-2 flex flex-col justify-between min-w-[180px] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0px_8px_16px_rgba(1,65,98,0.25)] hover:bg-[#025a8a] cursor-pointer">
          <div className="icon flex items-center justify-between gap-[4px] w-full">
            <Star className="text-[#F7FCFF] rounded-[10px] flex items-center justify-center" />
          </div>
          <p className="font-normal text-[#F7FCFF] text-[16px] leading-[19.2px]">
            Avg Order Value
          </p>
          <p className="font-normal text-[#F7FCFF] text-[18px] leading-[19.2px]">
            {isLoading ? (
              <Spinner className="h-4 inline-block" />
            ) : (
              dashboardData?.data?.shopping_insights?.average_order_value
            )}
          </p>
          <p className="font-normal text-[#F7FCFF] text-[14px] leading-[19.2px]">
            Based on 8 orders
          </p>
        </div>
      </div>

      <div className="MostBought rounded-[8px] py-[24px] flex flex-col gap-[24px]">
        <h2 className="font-medium text-[20px] leading-[30px] text-[#014162]">
          Most Bought Categories
        </h2>

        <div className="bg-[#F7FCFF] rounded-[10px] p-2 flex flex-col gap-2">
          {dashboardData?.data?.category_distribution?.length == 0 ? (
            <div className="flex items-center justify-between gap-3">
              <p className="font-normal text-[#014162] text-[16px] leading-[19.2px]">
                You don't have any orders yet
              </p>
            </div>
          ) : (
            dashboardData?.data?.category_distribution.map(
              (category: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-3"
                >
                  <div className="bg-[#d1d5dc] h-2 rounded-full flex-1">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${category.percentage}%`,
                        backgroundImage:
                          "linear-gradient(90deg, rgb(247, 252, 255) 0%, rgb(154, 181, 195) 37.981%, rgb(71, 118, 143) 71.635%, rgb(1, 65, 98) 100%)",
                      }}
                    />
                  </div>
                  <p className="text-[#014162] text-[16px] leading-[19.2px] w-[150px]">
                    {category.label} ({category.percentage}%)
                  </p>
                </div>
              ),
            )
          )}
        </div>
      </div>
    </div>
  );
}
