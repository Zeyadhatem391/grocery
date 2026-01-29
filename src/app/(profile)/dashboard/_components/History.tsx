import { Button } from "@/components/ui/Button";
import { Spinner } from "@/components/ui/spinner";

import Image from "next/image";

export default function History({ dashboardData, isLoading }: any) {
  return (
    <div className="History&Purchases flex flex-wrap justify-between gap-[60px]">
      <div className="history flex-1 min-w-[340px] rounded-[8px] border border-[#D1D5DC] p-[24px] flex flex-col gap-[16px] justify-between transition-all duration-300 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#014162]">
        <div className="head flex items-center justify-between w-full">
          <p className="font-medium text-[16px] leading-[30px] text-[#0A0A0A]">
            Recent Orders
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-[#014162] text-[#F7FCFF] hover:bg-[#025a8a] transition-colors"
          >
            View All
          </Button>
        </div>

        <div className="orders w-full ">
          {dashboardData?.data?.recent_orders?.length == 0 ? (
            <div className="order flex justify-between gap-10 p-[16px] border-t-[0.8px] border-[#D1D5DC]">
              <p className="text-[#4A5565] font-normal text-[16px]">
                You have no recent orders
              </p>
            </div>
          ) : (
            dashboardData?.data?.recent_orders.map(
              (order: any, index: number) => (
                <div
                  key={index}
                  className="order flex justify-between gap-10 p-[16px] border-t-[0.8px] border-[#D1D5DC] transition-colors hover:bg-slate-50 cursor-pointer"
                >
                  <div className="left flex flex-col gap-2">
                    <p className="id font-normal text-[16px] text-[#014162]">
                      {isLoading ? (
                        <Spinner className="h-4 inline-block" />
                      ) : (
                        order.id
                      )}
                    </p>
                    <p className="date font-normal text-[16px] text-[#0A0A0A]">
                      {isLoading ? (
                        <Spinner className="h-4 inline-block" />
                      ) : (
                        order.date
                      )}
                    </p>
                    <p className="count font-normal text-[12px] text-[#4A5565]">
                      {isLoading ? (
                        <Spinner className="h-4 inline-block" />
                      ) : (
                        order.count
                      )}{" "}
                      items
                    </p>
                  </div>
                  <div className="right flex flex-col gap-2">
                    <p className="status font-normal text-[12px] text-[#232832] bg-[#D1D5DC] rounded-[4px] px-[8px] py-[4px]">
                      {isLoading ? (
                        <Spinner className="h-4 inline-block" />
                      ) : (
                        order.status
                      )}
                    </p>
                    <p className="total font-normal text-[16px] text-[#0A0A0A]">
                      {isLoading ? (
                        <Spinner className="h-4 inline-block" />
                      ) : (
                        order.total
                      )}
                    </p>
                  </div>
                </div>
              ),
            )
          )}
        </div>
      </div>

      <div className="purchases flex-1 min-w-[340px] rounded-[8px] border border-[#D1D5DC] p-[24px] flex flex-col gap-[16px] justify-right transition-all duration-300 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#014162]">
        <div className="head flex items-center justify-between w-full">
          <p className="font-medium text-[16px] leading-[30px] text-[#0A0A0A]">
            Your Top Purchases
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-[#014162] text-[#F7FCFF] hover:bg-[#025a8a] transition-colors"
          >
            Add as List
          </Button>
        </div>

        <div className="purchases w-full ">
          {dashboardData?.data?.top_purchases?.length == 0 ? (
            <div className="purchase flex items-center justify-between border-t gap-3 p-3 border-[#D1D5DC]">
              <p className="text-[#4A5565] font-normal text-[16px]">
                You have no top purchases
              </p>
            </div>
          ) : (
            dashboardData?.data?.top_purchases.map(
              (purchase: any, index: number) => (
                <div
                  key={index}
                  className="purchase flex items-center justify-between border-t gap-3 p-3 border-[#D1D5DC] transition-colors hover:bg-slate-50 cursor-pointer"
                >
                  <Image
                    width={50}
                    height={40}
                    className="rounded-[4px]"
                    alt=""
                    src={purchase.img}
                  />
                  <div className="details flex-1 flex justify-between items-center gap-3">
                    <div className="flex flex-col gap-3">
                      <p className="name font-normal text-[16px] text-[#0A0A0A]">
                        {isLoading ? (
                          <Spinner className="h-4 inline-block" />
                        ) : (
                          purchase.title
                        )}
                      </p>
                      <p className="count font-normal text-[12px] text-[#4A5565]">
                        {isLoading ? (
                          <Spinner className="h-4 inline-block" />
                        ) : (
                          purchase.count
                        )}{" "}
                        items
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-[#014162] text-[#F7FCFF] hover:bg-[#025a8a] transition-colors"
                    >
                      Add
                    </Button>
                  </div>
                </div>
              ),
            )
          )}
        </div>
      </div>
    </div>
  );
}
