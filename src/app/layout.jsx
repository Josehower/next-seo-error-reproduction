import { NextSeo } from 'next-seo';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <NextSeo title={'title'} description={'description'} />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
