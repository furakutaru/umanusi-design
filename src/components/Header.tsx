'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_FORM_URL } from '../data/contact';
import { sendEvent } from '../lib/analytics';

const MENU_GROUPS = [
  {
    label: 'About',
    children: [{ label: '馬主デザイナー', href: '/#profile' }],
  },
  {
    label: 'できること',
    children: [
      { label: '対応アイテム', href: '/items' },
      { label: '制作事例', href: '/works' },
    ],
  },
  {
    label: '料金・流れ',
    children: [
      { label: '料金', href: '/#price' },
      { label: '制作の流れ', href: '/#process' },
      { label: 'よくある質問', href: '/#faq' },
    ],
  },
];

function AnimatedAccordion({ open, children }: { open: boolean; children: React.ReactNode }) {
  const contentRef = useRef<HTMLUListElement>(null);
  return (
    <div
      className="transition-all duration-500 ease-in-out overflow-hidden"
      style={{
        maxHeight: open ? `${contentRef.current ? contentRef.current.scrollHeight : 0}px` : '0px',
        opacity: open ? 1 : 0,
      }}
    >
      <ul ref={contentRef} style={{ margin: 0, padding: 0 }}>
        {children}
      </ul>
    </div>
  );
}

export const Header = () => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero) {
      setScrolledPastHero(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setScrolledPastHero(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const handleCtaClick = () => {
    sendEvent('contact_form_click', { location: 'header' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out px-4 md:px-8 h-20 flex items-center justify-between shadow-lg ${
          scrolledPastHero
            ? 'bg-black/70 backdrop-blur-md translate-y-0 opacity-100'
            : 'bg-black/40 backdrop-blur-sm translate-y-0 opacity-100'
        }`}
      >
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo_long.png"
            alt="UMANUSI Design"
            width={240}
            height={48}
            className="h-8 md:h-10 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {MENU_GROUPS.map((group) => (
            <div key={group.label} className="relative group/group-nav">
              <button className="text-white font-bold text-sm hover:text-red-400 transition-colors py-2 flex items-center gap-1">
                {group.label}
                <svg className="w-3 h-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover/group-nav:opacity-100 group-hover/group-nav:visible transition-all duration-300 transform translate-y-2 group-hover/group-nav:translate-y-0">
                <ul className="bg-white rounded-lg shadow-xl py-3 min-w-[200px] border border-gray-100">
                  {group.children.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block px-6 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-red-600 transition-colors whitespace-nowrap"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <a
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="ml-4 px-6 py-2 bg-red-600 text-white font-bold text-sm rounded-full hover:bg-red-700 transition-all hover:scale-105 shadow-md active:scale-95"
          >
            相談する
          </a>
        </div>

        <button
          className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10"
          onClick={() => setMobileOpen(true)}
          aria-label="メニューを開く"
        >
          <div className="w-6 h-0.5 bg-white rounded" />
          <div className="w-6 h-0.5 bg-white rounded" />
          <div className="w-6 h-0.5 bg-white rounded" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)}>
          <div
            className="fixed top-0 right-0 w-[300px] max-w-[85vw] h-screen bg-white shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 text-2xl font-bold"
              onClick={() => setMobileOpen(false)}
              aria-label="閉じる"
            >
              ×
            </button>
            <ul className="flex flex-col gap-4 mt-20 px-8 w-full">
              {MENU_GROUPS.map((group) => (
                <li key={group.label}>
                  <button
                    className="flex items-center gap-2 w-full text-lg font-bold text-gray-800 hover:text-red-600 transition-colors"
                    onClick={() => setExpanded(expanded === group.label ? null : group.label)}
                  >
                    <span>{group.label}</span>
                    <span className={`ml-auto transition-transform ${expanded === group.label ? 'rotate-45' : ''}`}>＋</span>
                  </button>
                  <AnimatedAccordion open={expanded === group.label}>
                    {group.children.map((item, idx) => (
                      <li key={item.label} style={{ marginBottom: idx !== group.children.length - 1 ? '8px' : 0 }}>
                        <Link
                          href={item.href}
                          className="text-base text-gray-700 hover:text-red-600 transition-colors block w-full text-left py-1"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </AnimatedAccordion>
                </li>
              ))}
              <li className="mt-6">
                <a
                  href={CONTACT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleCtaClick();
                    setMobileOpen(false);
                  }}
                  className="w-full text-lg font-bold text-white bg-red-600 rounded-full py-3 hover:bg-red-700 transition-colors shadow block text-center"
                >
                  馬主デザイナーに相談する
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
