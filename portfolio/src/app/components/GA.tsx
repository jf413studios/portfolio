import Script from "next/script";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const GA = () => {
    return (
        <>
            {/* Load gtag.js from Google Tag Manager */}
            <Script
               strategy="afterInteractive"
               src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            {/* Initialize Google Analytics */}
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}');
                    `,
                }}
            />
        </>
    );
};

export default GA;