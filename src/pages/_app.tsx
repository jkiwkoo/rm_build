import '@/styles/globals.css';
import 'i18n';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Applefonts = localFont({
  src: [
    {
      path: '../../public/fonts/AppleSDGothicNeoB.ttf',
      weight: '400',
    },
  ],
  variable: '--font-apple',
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Research Mentor</title>
        <meta name="description" content="research mentor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="researchmentor" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.researchmentor.co.kr/" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${Applefonts.variable}`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default App;
