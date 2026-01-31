import Header from "../components/Header";
import PageTitel from "./components/PageTitel";
import ProgressBar from "./components/ProgressBar";
import Info from "./components/Info";
import SpecialNotes from "./components/SpecialNotes";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <PageTitel />
      <ProgressBar />
      <Info />
      <SpecialNotes />
      <Cta text="Continue Checkout" link="/Payment" />
      <Footer />
    </>
  );
}
