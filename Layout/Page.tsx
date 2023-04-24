import Head from 'next/head';
import React from 'react';

export default function Page({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
    </Head>
  );
}
