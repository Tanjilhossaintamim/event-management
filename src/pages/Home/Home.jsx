import Banner from "../../components/Banner/Banner";
import SuccessRate from "../../components/SuccessRate/SuccessRate";
import TestmonialList from "../../components/Testmonial/TestmonialList";
import ServicesList from "../../components/servicesList/ServicesList";

const Home = () => {
  return (
    <div>
      <Banner />
      <ServicesList />
      <SuccessRate />
      <TestmonialList />
    </div>
  );
};

export default Home;
