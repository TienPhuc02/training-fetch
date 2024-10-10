import Become from '@/containers/Become/Become';
import Create from '@/containers/Create/Create';
import Diversify from '@/containers/Diversify/Diversify';
import FAQ from '@/containers/FAQ/FAQ';
import Footer from '@/containers/Footer/Footer';
import Header from '@/containers/Header/Header';
import Hero from '@/containers/Hero/Hero';
import Marketplace from '@/containers/Marketplace/Marketplace';
import Partnerships from '@/containers/Partnerships/Partnerships';
import RealTime from '@/containers/RealTime/RealTime';

export default function Home() {
  return (
    <div className="homepage-main">
      <div className="max-[1440px]:px-[120px]">
        <Header />
        <Hero />
        <Create />
        <Become />
        <RealTime />
        <Diversify />
        <Marketplace />
        <Partnerships />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
