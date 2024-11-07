import BookingSection from "./components/Booking";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MarketExperiences from "./components/MarketExperiences";
import Navbar from "./components/navbar";
import PopularFoods from "./components/PopularFoods";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <MarketExperiences />
      <PopularFoods />
      <BookingSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
