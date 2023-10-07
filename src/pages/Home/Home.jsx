import Banner from "../../components/Banner/Banner";
import SuccessRate from "../../components/SuccessRate/SuccessRate";
import ServicesList from "../../components/servicesList/ServicesList";

const Home = () => {
  return (
    <div>
      <Banner />
      <ServicesList />
      <SuccessRate />
    </div>
  );
};

export default Home;
