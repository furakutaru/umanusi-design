import React from 'react';
import { ValuePropositionSection } from './ValuePropositionSection';
import { ProfileSection } from './ProfileSection';

export const MainContentWrapper = () => {
  return (
    <main className="w-full p-0 m-0">
      <ProfileSection />
      <ValuePropositionSection />
    </main>
  );
};

export default MainContentWrapper; 