import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Cabin?display=optional' rel='stylesheet' />

        <meta property="og:title" content="Home - Heart Kids Academy" />
        <meta name="description" content="At Heart Kids Academy children will experience hands on learning and play in an inspiring, exciting, developmentally appropriate environment. Our mission is to provide a positive foundation for learning in a faith-based environment where learning is fun." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="At Heart Kids Academy children will experience hands on learning and play in an inspiring, exciting, developmentally appropriate environment. Our mission is to provide a positive foundation for learning in a faith-based environment where learning is fun." />
        {/* <meta property="og:image" content={logo} /> */}
        <meta property="og:url" content="https://www.heartkidsacademy.org/" />
        <meta property="og:site_name" content="HeartKidsAcademy" />

        <meta name="twitter:title" content="Heart Kids Academy" />
        <meta name="twitter:description" content="At Heart Kids Academy children will experience hands on learning and play in an inspiring, exciting, developmentally appropriate environment. Our mission is to provide a positive foundation for learning in a faith-based environment where learning is fun." />
        {/* <meta name="twitter:image" content={logo} /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}