import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Database from "./components/Database";
import Services from "./components/Services";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Database />
        <Services />
        <Waitlist />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
