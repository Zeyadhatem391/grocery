import Header from "../components/Header";
import PageTitel from "./components/PageTitel";
import ProgressBar from "./components/ProgressBar";
import TrackOrder from "./components/TrackOrder";
import DriverInfo from "./components/DriverInfo";
import OrderSummary from "./components/OrderSummary";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <PageTitel />
      <ProgressBar />
      <TrackOrder />
      <DriverInfo />
      <OrderSummary />
      <Footer />
    </>
  );
}
