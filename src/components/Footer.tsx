'use client';
import React from 'react';
import { ConsultCTA } from './ConsultCTA';
import { ContactChannels } from './ContactChannels';
import { NOTE_URL, NETSHOP_URL } from '../data/contact';
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

export const Footer = () => {
  const titleRef = useFadeInOnScroll();
  const subtitleRef = useFadeInOnScroll();
  const buttonRef = useFadeInOnScroll();

  return (
    <footer className="w-full bg-red-700">
      <section id="contact" className="w-full bg-red-700 py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-4 flex flex-col items-center gap-8 md:gap-10">
          <h1 ref={titleRef.ref} className={`fade-in${titleRef.isVisible ? ' is-visible' : ''} text-3xl md:text-4xl font-bold text-white text-center`}>
            ご相談・お問い合わせ
          </h1>
          <h2
            ref={subtitleRef.ref}
            style={{ transitionDelay: '0.3s' }}
            className={`fade-in${subtitleRef.isVisible ? ' is-visible' : ''} mt-4 text-lg md:text-xl font-semibold text-white text-center`}
          >
            ご依頼はもちろん、『こんなことは可能でしょうか？』といったご相談も
            いつでもお気軽にお寄せください。よろしくお願いいたします。
          </h2>
          <div ref={buttonRef.ref} style={{ transitionDelay: '0.6s' }} className={`fade-in${buttonRef.isVisible ? ' is-visible' : ''} w-full flex justify-center`}>
            <ConsultCTA location="footer" variant="footer" dark />
          </div>
          <ContactChannels variant="light" showFormButton={false} />
          {/* BLOG・NetShopリンク追加 */}
          <div className="flex flex-row gap-6 justify-center items-center mt-2">
            <a
              href={NOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm underline hover:text-gray-200 transition-colors"
            >
              note (BLOG)
            </a>
            <a
              href={NETSHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm underline hover:text-gray-200 transition-colors"
            >
              NetShop
            </a>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-900 py-3.5">
        <div className="max-w-[800px] mx-auto px-4 flex flex-col items-center">
          <p className="text-sm text-center text-gray-400">
            © 2024 UMANUSI Design. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
