'use client';

import React, { useState, useRef } from 'react';

const MENU_GROUPS = [
  {
    label: 'About',
    children: [
      { label: 'プロフィール', target: 'profile' },
      { label: 'バリュー', target: 'value' },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: '活用シーン', target: 'usecase' },
      { label: 'サービス内容', target: 'service' },
      { label: '対応サービス', target: 'service-list' },
    ],
  },
  {
    label: 'Price',
    children: [
      { label: '料金', target: 'price' },
      { label: '印刷代参考料金', target: 'print-price' },
    ],
  },
  {
    label: 'Flow',
    children: [
      { label: '制作プロセス', target: 'process' },
      { label: 'よくある質問', target: 'faq' },
    ],
  },
];

const CONTACT = { label: 'Contact', target: 'contact' };

// Accordionアニメーション用コンポーネント
function AnimatedAccordion({ open, children }: { open: boolean, children: React.ReactNode }) {
  const contentRef = useRef<HTMLUListElement>(null);
  return (
    <div
      className="transition-all duration-500 ease-in-out overflow-hidden bg-white"
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

export const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);



  return (
    <>
      {/* モーフィング用ボタン兼メニュー背景 */}
      <div
        className={`fixed z-50 transition-all duration-500 ease-in-out
          ${open
            ? 'w-[300px] h-screen rounded-none bg-white shadow-xl border border-white/40'
            : 'w-16 h-16 rounded-full bg-white/70 backdrop-blur-md shadow-lg border border-white/40'}
          flex flex-col items-center justify-center overflow-hidden`
        }
        style={{
          position: 'fixed',
          top: 'auto',
          left: 'auto',
          right: open ? 0 : 24,
          bottom: open ? 0 : 24,
          zIndex: 50,
          padding: 0,
          transitionProperty: 'width, height, border-radius, background, right, bottom',
        }}
      >
        {/* クローズ時は三本ライン＋MENU表記 */}
        {!open && (
          <button
            className="flex flex-col items-center justify-center w-full h-full bg-transparent border-none outline-none"
            onClick={() => setOpen(true)}
            aria-label="メニューを開く"
            style={{ cursor: 'pointer' }}
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-1 bg-gray-800 rounded mb-1" />
              <div className="w-8 h-1 bg-gray-800 rounded mb-1" />
              <div className="w-8 h-1 bg-gray-800 rounded" />
              <span className="text-xs text-gray-800 mt-1 font-bold tracking-widest">MENU</span>
            </div>
          </button>
        )}
        {/* オープン時はメニュー内容を重ねて表示 */}
        {open && (
          <>
            <button
              className="absolute top-4 right-4 text-gray-600 text-2xl font-bold"
              onClick={() => setOpen(false)}
              aria-label="閉じる"
            >
              ×
            </button>
            <ul className="flex flex-col gap-4 mt-20 px-8 w-full max-w-full">
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
                        <a
                          href={`#${item.target}`}
                          className="text-base text-gray-700 hover:text-red-600 transition-colors block w-full text-left"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </AnimatedAccordion>
                </li>
              ))}
              {/* Contactは展開なし・直リンク */}
              <li className="mt-6">
                <a
                  href={`#${CONTACT.target}`}
                  className="w-full text-lg font-bold text-white bg-red-600 rounded-full py-3 hover:bg-red-700 transition-colors shadow block text-center"
                  onClick={() => setOpen(false)}
                >
                  {CONTACT.label}
                </a>
                {/* PageTopリンク追加 */}
                <a
                  href="#top"
                  className="mt-8 text-sm text-gray-700 hover:text-red-600 flex justify-center"
                  onClick={() => setOpen(false)}
                >
                  PageTop
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
      {/* オーバーレイ */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default NavMenu; 