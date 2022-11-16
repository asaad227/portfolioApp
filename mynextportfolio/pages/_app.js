 import "../styles/globals.css"
import 'bootstrap/dist/css/bootstrap.css';
import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
   
      <Script
        src="https://kit.fontawesome.com/bb76509ad4.js" crossorigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;