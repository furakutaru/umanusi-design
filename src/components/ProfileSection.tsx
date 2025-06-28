'use client';
import React from 'react';
import { ProfileImage } from './ProfileImage';
import { ProfileContent } from './ProfileContent';
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export const ProfileSection = ({
  imageUrl = "/profile.png",
  imageAlt = "Profile image of UMA, designer horse owner"
}) => {
  const headingRef = useFadeInOnScroll();
  const contentRef = useFadeInOnScroll();
  
  return (
    <section id="profile" className="w-full py-8 md:py-10 bg-gray-50">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* 左側：プロフィール画像 */}
          <div className="w-full md:w-1/3">
            <ProfileImage src={imageUrl} alt={imageAlt} />
          </div>
          
          {/* 右側：テキストコンテンツ */}
          <div className="w-full md:w-2/3">
            <ProfileContent headingRef={headingRef.ref as React.RefObject<HTMLDivElement>} headingClassName={`fade-in${headingRef.isVisible ? ' is-visible' : ''}`} contentRef={contentRef.ref as React.RefObject<HTMLDivElement>} contentClassName={`fade-in${contentRef.isVisible ? ' is-visible' : ''}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection; 