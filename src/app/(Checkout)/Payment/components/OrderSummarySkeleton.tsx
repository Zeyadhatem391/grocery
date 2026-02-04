import { Skeleton } from "@/components/ui/skeleton";

export default function OrderSummarySkeleton() {
  return (
    <section className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-24 mt-10 px-4">
      {/* ================= Cart Summary Skeleton ================= */}
      <div className="w-full lg:w-[500]">
        <div className="w-full border border-gray-200 pl-4 lg:pl-6 shadow-sm rounded-md">
          <div className="max-h-[400] lg:max-h-[565] px-2 overflow-y-auto space-y-6 py-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-full border-b border-gray-300 flex gap-4 lg:gap-6 py-4 lg:py-6"
              >
                {/* Image */}
                <Skeleton className="w-[70] h-[70] rounded-md" />

                {/* Details */}
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-5 w-[60%]" />

                  <div className="flex justify-between items-center">
                    <Skeleton className="h-8 w-[110] rounded-xl" />
                    <Skeleton className="h-5 w-[60]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= Billing & Total Skeleton ================= */}
      <div className="w-full lg:w-[420] mt-8 lg:mt-12">
        <div className="w-full border border-gray-200 shadow-sm rounded-xl -4 sm:-6 py-5 space-y-4">
          {/* Total title */}
          <Skeleton className="h-6 w-40" />

          {/* Subtotal & Shipping */}
          <div className="space-y-3 pb-4 border-b border-gray-200">
            <div className="flex justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>

            <div className="flex justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between pt-4">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-20" />
          </div>

          {/* Billing title */}
          <div className="pt-6 space-y-3">
            <Skeleton className="h-6 w-44" />

            {/* Checkbox row */}
            <div className="flex items-center gap-3">
              <Skeleton className="w-5 h-5 rounded-sm" />
              <Skeleton className="h-4 w-48" />
            </div>

            {/* Address box */}
            <div className="bg-gray-100 rounded-xl p-4 space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[80%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
