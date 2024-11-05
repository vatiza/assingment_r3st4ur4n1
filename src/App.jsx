import Header from "./components/Header";
import MarketExperiences from "./components/MarketExperiences";
import Navbar from "./components/navbar";
import PopularFoods from "./components/PopularFoods";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <MarketExperiences />
      <PopularFoods />
    </div>
  );
};

export default App;
