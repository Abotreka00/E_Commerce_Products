import Catagories from "../components/Catagories";
import InfoSection from "../components/InfoSection";
import ManWK from "../components/ManWK";
import Products from "../components/Products";

function Home() {
  return (
    <div className="mt-6 md:mt-16 mx-3 md:mx-auto">
      <div className="relative container mx-auto">
        <Catagories />
      </div>
      <div className="relative container mx-auto">
        <InfoSection />
      </div>
      <div className="relative container mx-auto">
        <ManWK />
      </div>
      <div className="relative container mx-auto">
        <Products titlePage={"Top Products"} minProdc={0} maxProdc={5} />
      </div>
      <div className="relative container mx-auto">
        <Products titlePage={"Shop"} minProdc={5} maxProdc={15} />
      </div>
    </div>
  );
}

export default Home;
