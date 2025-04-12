import { Footer } from "../Components/Footer";
import { HeroSection } from "../Components/HeroSection";
import { NavBar } from "../Components/NavBar";

export const HomeLayout = () => {
  return (
    <div className="font-roboto">
      <header className="w-10/12 mx-auto mt-6">
        <NavBar></NavBar>
        <HeroSection></HeroSection>
      </header>
      <main>
        <section className="w-10/12 mx-auto mt-6">
          <div className="py-12 text-center">
            <p className="italic">
              Here will be implemented <b>Explore Your Next Destination </b>
              (Tour Related Cards Section)
            </p>
          </div>
        </section>
      </main>
      <footer className="w-10/12 mx-auto ">
        <Footer></Footer>
      </footer>
    </div>
  );
};
