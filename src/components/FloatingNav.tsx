'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MENU_GROUPS, CONTACT } from './NavMenu';

export const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const header = document.getElementById('top');
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // ヘッダーが画面内に少しでもあれば表示 (threshold 0)
        // または、ヘッダーがほぼ完全に隠れたら非表示
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // 10%見えていれば表示
    );

    observer.observe(header);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out px-4 md:px-8 h-20 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      } bg-black/60 backdrop-blur-md flex items-center justify-between shadow-lg`}
    >
      {/* ロゴ */}
      <div className="flex-shrink-0">
        <a href="#top" onClick={(e) => handleLinkClick(e, 'top')}>
          <Image
            src="/logo_long.png"
            alt="UMANUSI Design"
            width={240}
            height={48}
            className="h-8 md:h-10 w-auto object-contain"
            priority
          />
        </a>
      </div>

      {/* メニュー項目（デスクトップ） */}
      <div className="hidden lg:flex items-center gap-6">
        {MENU_GROUPS.map((group) => (
          <div key={group.label} className="relative group/group-nav">
            <button className="text-white font-bold text-sm hover:text-red-400 transition-colors py-2 flex items-center gap-1">
              {group.label}
              <svg className="w-3 h-3 opcaity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* ドロップダウン */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover/group-nav:opacity-100 group-hover/group-nav:visible transition-all duration-300 transform translate-y-2 group-hover/group-nav:translate-y-0">
              <ul className="bg-white rounded-lg shadow-xl py-3 min-w-[200px] border border-gray-100">
                {group.children.map((item) => (
                  <li key={item.label}>
                    <a
                      href={`#${item.target}`}
                      onClick={(e) => handleLinkClick(e, item.target)}
                      className="block px-6 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-red-600 transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        
        {/* Contactボタン */}
        <a
          href={`#${CONTACT.target}`}
          onClick={(e) => handleLinkClick(e, CONTACT.target)}
          className="ml-4 px-6 py-2 bg-red-600 text-white font-bold text-sm rounded-full hover:bg-red-700 transition-all hover:scale-105 shadow-md active:scale-95"
        >
          {CONTACT.label}
        </a>
      </div>

      {/* モバイル表示時はハンバーガーが右下にあるので、ここには設置しない（ロゴのみ維持、または簡略版） */}
    </nav>
  );
};

export default FloatingNav;
