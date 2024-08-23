import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Laydout from "@/compodent/layout";

export default function Home() {
  return (
    <Laydout>
      <Head>
        <title>황현준 포트폴리오</title>
        <meta name="description" content="현준의 포트폴리오" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>황현준의 포트폴리오</h1>
    </Laydout>
  );
}
