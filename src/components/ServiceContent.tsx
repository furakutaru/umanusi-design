import React from 'react';
import Image from 'next/image';
import { FeatureItem } from './FeatureItem';

interface Feature {
  iconSrc: string;
  text: string;
}

interface ServiceContentProps {
  title: string;
  description: string;
  features: Feature[];
  imageSrc: string;
  tabId: string;
}

const iconMap: { [key: string]: string } = {
  goods: "/CupIcon.svg",
  logo: "/PaletteIcon.svg",
  print: "/PageIcon.svg",
  web: "/WebIcon.svg",
};

export const ServiceContent = ({
  title,
  description,
  features,
  imageSrc,
  tabId,
}: ServiceContentProps) => {
  // SP用：2個2個2個に分割
  const chunkArray = (arr: Feature[], size: number): Feature[][] => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  // PC用：左右2分割
  const midpoint = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, midpoint);
  const rightFeatures = features.slice(midpoint);

  // SP用：2個ずつに分割
  const featureRows = chunkArray(features, 2);

  return (
    <article className="mt-8 px-0 w-full max-w-md md:max-w-full mx-auto">
      <div className="flex gap-8 md:gap-5 flex-col md:flex-row w-full">
        {/* テキスト＋特徴リスト */}
        <div className="w-full md:w-6/12">
          <div className="flex flex-col items-start w-full md:my-auto">
            <header className="flex gap-2 items-center text-xl md:text-2xl font-bold leading-none text-black">
              <Image
                src={iconMap[tabId] || "/CupIcon.svg"}
                width={24}
                height={24}
                className="object-contain shrink-0 self-center w-6 aspect-square"
                alt=""
              />
              <h3 className="basis-auto">{title}</h3>
            </header>
            <p className="mt-3 md:mt-7 text-sm md:text-lg leading-5 md:leading-7 text-gray-700 w-full">
              {description}
            </p>
            <div className="mt-3 md:mt-9 w-full max-w-full">
              {/* SP用：2個2個2個表示 */}
              <div className="block md:hidden space-y-2">
                {featureRows.map((row, rowIndex) => (
                  <ul key={rowIndex} className="grid grid-cols-2 gap-4 price-list">
                    {row.map((feature, index) => (
                      <li key={index} className="m-0 p-0">
                        <FeatureItem iconSrc={feature.iconSrc} text={feature.text} />
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
              
              {/* PC用：左右2分割表示 */}
              <div className="hidden md:flex md:flex-row gap-5 w-full">
                {/* 左カラム */}
                <div className="w-full md:w-6/12">
                  <div className="flex flex-col items-start w-full text-base text-black">
                    {leftFeatures.map((feature, index) => (
                      <div key={index} className={index > 0 ? 'mt-3.5' : ''}>
                        <FeatureItem iconSrc={feature.iconSrc} text={feature.text} />
                      </div>
                    ))}
                  </div>
                </div>
                {/* 右カラム */}
                <div className="w-full md:ml-5 md:w-6/12">
                  <div className="flex flex-col items-start w-full text-base text-black">
                    {rightFeatures.map((feature, index) => (
                      <div key={index} className={index > 0 ? 'mt-3.5' : ''}>
                        <FeatureItem iconSrc={feature.iconSrc} text={feature.text} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 画像 */}
        <div className="w-full md:ml-5 md:w-6/12 flex items-center justify-center">
          <Image
            src={imageSrc}
            width={400}
            height={300}
            className="object-contain w-full rounded-lg aspect-[1.33] md:mt-0 max-w-full"
            alt={`${title}のサービス内容`}
          />
        </div>
      </div>
    </article>
  );
}; 