import Script from "next/script";
import { ANALYTICS_ENABLED } from "../lib/analytics";

const GA_MEASUREMENT_ID = "G-VYY9Y5V89Q";

export const AnalyticsScripts = () => {
  if (!ANALYTICS_ENABLED) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
};

export default AnalyticsScripts;
