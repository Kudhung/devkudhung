import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta content="#333333" name="theme-color" />
        <link rel="stylesheet" href="/css/nicepage.css" media="screen" />
        <link rel="stylesheet" href="/css/Post-Template.css" media="screen" />
        <Script src="/js/jquery.js" ></Script>
        <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></Script>
        <meta name="generator" content="Nicepage 3.27.0, nicepage.com" />
        <link id="u-theme-google-font" rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" />
        <link id="u-page-google-font" rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Lato:100,100i,300,300i,400,400i,700,700i,900,900i" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
