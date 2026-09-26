import Script from "next/script";
import { CHAT_ENABLED } from "../lib/analytics";

const TAWK_EMBED_URL = "https://embed.tawk.to/6a976ca9a5d272343eb98e9b/1k1fo0tos";

export const ChatWidget = () => {
  if (!CHAT_ENABLED) return null;

  return (
    <Script id="tawk-to" strategy="afterInteractive">
      {`
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        Tawk_API.onChatStarted = function(){
          if (window.gtag) { window.gtag('event', 'chat_start'); }
        };
        (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='${TAWK_EMBED_URL}';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
        })();
      `}
    </Script>
  );
};

export default ChatWidget;
