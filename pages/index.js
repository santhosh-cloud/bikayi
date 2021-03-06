import Head from "next/head";
import Image from "next/image";
import { LaureateCard } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Nobel Prizes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/all",
    },
  };
}
