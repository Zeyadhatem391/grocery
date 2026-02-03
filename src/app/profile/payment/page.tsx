import Card from "@/components/common/Card";
import PoundSympol from "@/components/ui/PoundSympol";
import PaymentSelector from "./_payment-selector/PaymentSelector";
import PaymentHistory from "./_payment-history/PaymentHistory";
import PaymentInvoice from "./_payment-invoice/PaymentInvoice";

const fakeDATA = {
  storeCredit: 12.5,
  currency: "£",
  expiryDate: "Dec 31, 2025",
};

function PaymentPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl">Payment & Wallet</h1>
        <p className="text-[#4A5565]">
          Manage your payment methods and view transaction history
        </p>
      </div>
      <Card>
        <h2 className="text-xl">Store Credit</h2>
        <div className="flex items-center justify-between ">
          <p>
            {fakeDATA.currency}
            {fakeDATA.storeCredit}
          </p>
          <PoundSympol />
        </div>
        <p className="font-normal">
          Available for your next purchase • Expires: {fakeDATA.expiryDate}
        </p>
      </Card>
      <div className="content-container">
        <PaymentSelector />
      </div>
      <div className="content-container">
        <PaymentHistory />
      </div>
      <div className="content-container">
        <PaymentInvoice />
      </div>
    </div>
  );
}

export default PaymentPage;
