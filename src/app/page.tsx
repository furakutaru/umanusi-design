import HeroHeader from '../components/HeroHeader';
import ProfileSection from '../components/ProfileSection';
import { WhatWeCanMake } from '../components/WhatWeCanMake';
import { FeaturedItemsSection } from '../components/FeaturedItemsSection';
import { FeaturedWorksSection } from '../components/FeaturedWorksSection';
import { ConsultExamplesSection } from '../components/ConsultExamplesSection';
import { PricingSection } from '../components/PricingSection';
import Process from '../components/Process';
import TestimonialSection from '../components/TestimonialSection';
import FAQ from '../components/FAQ';
import NoteSection from '../components/NoteSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <HeroHeader />
      <main className="w-full p-0 m-0">
        <ProfileSection />
        <WhatWeCanMake />
        <FeaturedItemsSection />
        <FeaturedWorksSection />
        <ConsultExamplesSection />
        <PricingSection />
        <Process />
        <TestimonialSection />
        <FAQ />
        <NoteSection />
      </main>
      <Footer />
    </>
  );
}
