import Header from "../components/Header";
import PageTitel from "./components/PageTitel";
import ProgressBar from "./components/ProgressBar";
import PaymentMethod from "./components/PaymentMethod";
import OrderSummary from "./components/OrderSummary";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <PageTitel />
      <ProgressBar />
      <PaymentMethod />
      <OrderSummary />
      <Cta text="Confirm Payment & Go To Checkout " link="/Tracking"/>
      <Footer />
    </>
  );
}
