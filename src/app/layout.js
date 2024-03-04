import StyledComponentsRegistry from '@/lib/registry'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Zenbooker from '../lib/Zenbooker'
import Script from 'next/script'
import Head from 'next/head'


export default function RootLayout(props) {
  return (
    <html lang="en">
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"></link>
      <link rel="manifest" href="/favicon/site.webmanifest"></link>
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#00aeef"></link>
      <meta name="msapplication-TileColor" content="#003179"></meta>
      <meta name="theme-color" content="#ffffff"></meta>
      <Script id="hotjar">
        {`(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3018417,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`}
      </Script>
      <StyledComponentsRegistry>
        <body >
          <Header />
          {props.children}
          <Footer />

        </body>
      </StyledComponentsRegistry>
      <Zenbooker />
    </html>
  )
}

