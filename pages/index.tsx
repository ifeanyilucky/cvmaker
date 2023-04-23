import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import * as home from '../components/LandingPage';

export default function Home() {
  return (
    <>
      <home.LandingHero />
      <home.CTA />
    </>
  );
}
