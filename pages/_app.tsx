import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

// import { SWRConfig } from 'swr';
// import { request } from 'graphql-request';
// import { graphqlAPI } from '@/services/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
