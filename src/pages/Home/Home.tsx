import { HomeSlider } from "./HomeSlider";
import Ft from "../../components/Home/Ft";
import TopSell from "../../components/Home/TopSell";
import OfferPrice from "../../components/Home/OfferPrice";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import CustomerTestimonial from "../../components/Home/CustomerTestimonial";
import CallToAction from "../../components/Home/CallToAction";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <Ft />
      <TopSell />
      <OfferPrice />
      <WhyChooseUs />
      <CustomerTestimonial />
      <CallToAction />
    </div>
  );
};

export default Home;
