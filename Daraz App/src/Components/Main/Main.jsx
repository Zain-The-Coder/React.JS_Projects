import Hero from "./Hero";
import LeftLinks from "./LeftLinks";
import Products from "../Products/Products";

const Main = () => {
  return (
    <main className="relative min-h-screen">
      <LeftLinks />
      <Hero />
      <Products />
    </main>
  );
};

export default Main;
