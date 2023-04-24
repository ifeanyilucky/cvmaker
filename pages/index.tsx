import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import * as home from '../components/LandingPage';
import Page from '../Layout/Page';

export default function Home() {
  return (
    <>
      <Page title='Build your CV like a pro' />
      <home.LandingHero />
      <home.CTA />
    </>
  );
}
