import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
// import type { AppProps } from 'next/app'
import { Layout } from '../componets';

function MyApp({ Component, pageProps }) {
  return 
  <Layout>
<Component {...pageProps} />
</Layout>
}

export default MyApp
