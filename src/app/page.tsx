import HeroHeader from '../components/HeroHeader';
import ProfileSection from '../components/ProfileSection';
import { ValuePropositionSection } from '../components/ValuePropositionSection';
import UseCaseSection from '../components/UseCaseSection';
import ServiceSection from '../components/ServiceSection';
import { CTAArea } from '../components/CTAArea';
import PortfolioSection from '../components/PortfolioSection';
import { PriceSection } from '../components/PriceSection';
import PrintPrice from '../components/PrintPrice';
import { ServiceList } from '../components/ServiceList';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <HeroHeader />
      <main className="w-full p-0 m-0">
        <ProfileSection />
        <ValuePropositionSection />
        <UseCaseSection />
        <ServiceSection />
        <CTAArea />
        <PortfolioSection />
        <PriceSection />
        <PrintPrice />
        <ServiceList />
        <CTAArea />
        <Process />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
