import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import TrialModal from "../components/TrialModal";
import useModal from "../hooks/useModal";

export default function Home() {
  const { isOpen, open, close } = useModal();

  return (
    <div>
      <Navbar onStartTrial={open} />
      <Hero onStartTrial={open} />
      <Features />
      <Footer />
      <TrialModal isOpen={isOpen} close={close} />
    </div>
  );
}
