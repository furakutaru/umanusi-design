'use client';
import React, { useState } from 'react';
import { TabButton } from './TabButton';
import { ServiceContent } from './ServiceContent';
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const tabsData = [
  {
    id: 'goods',
    label: '記念グッズ',
    title: '記念グッズ',
    description: '勝利記念／引退記念／出走記念など、大切な瞬間を形に残すオリジナルグッズをデザインします。蹄鉄盾・蹄鉄飾り、アクリルスタンド、記念冊子など、幅広いアイテムに対応しています。',
    features: [
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/ccd2f23440e74cc7d0ab5d2c011bc9e5c85d80f7?placeholderIfAbsent=true', text: '蹄鉄盾・蹄鉄飾り' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/57df909c1f36c27c86e30cb3fb1b586d4ab7e62c?placeholderIfAbsent=true', text: 'トレーディングカード' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/035b2faf4c0fce03a002f8bc2722157656f7d150?placeholderIfAbsent=true', text: '応援タオル' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/ccd2f23440e74cc7d0ab5d2c011bc9e5c85d80f7?placeholderIfAbsent=true', text: 'アクリルスタンド' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/57df909c1f36c27c86e30cb3fb1b586d4ab7e62c?placeholderIfAbsent=true', text: '記念冊子' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/035b2faf4c0fce03a002f8bc2722157656f7d150?placeholderIfAbsent=true', text: 'Tシャツ・キャップ' },
    ],
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/a4bcb62a39eccb2b205d55c596e5f1cf2a57fa21?placeholderIfAbsent=true',
  },
  {
    id: 'logo',
    label: 'ロゴデザイン',
    title: 'ロゴデザイン',
    description: '競馬関連のロゴデザインを専門的に手がけます。馬主様、厩舎様、競馬関連企業様のブランドアイデンティティを表現するロゴを制作いたします。',
    features: [
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/ccd2f23440e74cc7d0ab5d2c011bc9e5c85d80f7?placeholderIfAbsent=true', text: '馬主ロゴ' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/57df909c1f36c27c86e30cb3fb1b586d4ab7e62c?placeholderIfAbsent=true', text: '厩舎ロゴ' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/035b2faf4c0fce03a002f8bc2722157656f7d150?placeholderIfAbsent=true', text: 'クラブロゴ' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/ccd2f23440e74cc7d0ab5d2c011bc9e5c85d80f7?placeholderIfAbsent=true', text: 'イベントロゴ' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/57df909c1f36c27c86e30cb3fb1b586d4ab7e62c?placeholderIfAbsent=true', text: 'ブランドロゴ' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/035b2faf4c0fce03a002f8bc2722157656f7d150?placeholderIfAbsent=true', text: 'シンボルマーク' },
    ],
    imageSrc: "/service-logo.jpg",
  },
  {
    id: 'print',
    label: '印刷物・販促物',
    title: '印刷物・販促物',
    description: '競馬イベントや販促活動に必要な印刷物をトータルでデザインします。パンフレット、ポスター、チラシなど、目的に応じた効果的なデザインを提供します。',
    features: [
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/ccd2f23440e74cc7d0ab5d2c011bc9e5c85d80f7?placeholderIfAbsent=true', text: 'パンフレット' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/57df909c1f36c27c86e30cb3fb1b586d4ab7e62c?placeholderIfAbsent=true', text: 'ポスター' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/035b2faf4c0fce03a002f8bc2722157656f7d150?placeholderIfAbsent=true', text: 'チラシ' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/ccd2f23440e74cc7d0ab5d2c011bc9e5c85d80f7?placeholderIfAbsent=true', text: '名刺・ショップカード' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/57df909c1f36c27c86e30cb3fb1b586d4ab7e62c?placeholderIfAbsent=true', text: 'カタログ' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/035b2faf4c0fce03a002f8bc2722157656f7d150?placeholderIfAbsent=true', text: 'のぼり・バナー' },
    ],
    imageSrc: "/service-print.jpg",
  },
  {
    id: 'web',
    label: 'SNS・WEBサポート',
    title: 'SNS・WEBサポート',
    description: 'SNSやWEBでの情報発信をサポートします。投稿用画像の制作、WEBサイトのデザイン、オンラインでの販促活動に必要な素材を提供します。',
    features: [
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/ccd2f23440e74cc7d0ab5d2c011bc9e5c85d80f7?placeholderIfAbsent=true', text: 'SNS投稿画像' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/57df909c1f36c27c86e30cb3fb1b586d4ab7e62c?placeholderIfAbsent=true', text: 'WEBバナー' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/035b2faf4c0fce03a002f8bc2722157656f7d150?placeholderIfAbsent=true', text: 'サイトデザイン' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/ccd2f23440e74cc7d0ab5d2c011bc9e5c85d80f7?placeholderIfAbsent=true', text: 'オンライン広告' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/57df909c1f36c27c86e30cb3fb1b586d4ab7e62c?placeholderIfAbsent=true', text: 'メルマガデザイン' },
      { iconSrc: 'https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/035b2faf4c0fce03a002f8bc2722157656f7d150?placeholderIfAbsent=true', text: 'デジタルコンテンツ' },
    ],
    imageSrc: "/service-sns.png",
  },
];

export const ServiceSection = () => {
  const [activeTab, setActiveTab] = useState('goods');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const headerRef = useFadeInOnScroll();
  const contentRef = useFadeInOnScroll();

  // アニメーション付きタブ切り替え
  const [displayedTab, setDisplayedTab] = useState(activeTab);
  React.useEffect(() => {
    if (activeTab !== displayedTab) {
      setIsTransitioning(true);
      const timeout = setTimeout(() => {
        setDisplayedTab(activeTab);
        setIsTransitioning(false);
      }, 300); // 300msで切り替え
      return () => clearTimeout(timeout);
    }
  }, [activeTab, displayedTab]);

  return (
    <section className="w-full max-w-[1200px] mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      {/* ヘッダー：最初にフェードイン */}
      <header ref={headerRef.ref} className={`fade-in${headerRef.isVisible ? ' is-visible' : ''} text-center w-full`}>
        <h1 className="text-3xl md:text-4xl font-bold leading-none text-black mb-0">
          サービス内容
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-4 mb-6">
          競馬に関わる様々なデザインニーズにお応えします
        </h2>
      </header>

      {/* タブボタンとServiceContent：次にフェードイン */}
      <div ref={contentRef.ref} style={{ transitionDelay: '0.3s' }} className={`fade-in${contentRef.isVisible ? ' is-visible' : ''}`}>
        <nav className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2 md:gap-4 self-center w-full text-lg font-semibold leading-loose text-center price-list">
          {tabsData.map((tab) => (
            <div key={tab.id} className="w-full md:w-auto">
              <TabButton
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </TabButton>
            </div>
          ))}
        </nav>

        {/* アニメーション付きServiceContent */}
        <div className={`relative min-h-[420px]`}>
          <div
            key={displayedTab}
            className={`relative transition-opacity duration-300 ${isTransitioning ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <ServiceContent
              title={tabsData.find(tab => tab.id === displayedTab)?.title ?? ''}
              description={tabsData.find(tab => tab.id === displayedTab)?.description ?? ''}
              features={tabsData.find(tab => tab.id === displayedTab)?.features ?? []}
              imageSrc={tabsData.find(tab => tab.id === displayedTab)?.imageSrc ?? ''}
              tabId={displayedTab}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection; 