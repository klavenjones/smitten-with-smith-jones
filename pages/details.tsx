import { Navigation } from '@/components';
import Head from 'next/head';

export default function Details() {
  return (
    <>
      <Head>
        <title>Brittani & Klaven</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation page="details" />
      </header>
      <section className="hero min-h-[65vh] bg-background">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-7xl lg:text-[7rem] text-bone">Reception</h1>
          </div>
        </div>
      </section>
      <main className="px-4 pt-20">
        <div className="flex flex-col items-center justify-center max-w-screen-2xl mx-auto">
          <div className="text-center text-tertiary">
            <h1 className="text-bone text-6xl lg:text-7xl">July 28, 2023</h1>
            <p className="pt-10 text-3xl uppercase font-semibold">Julliette</p>
            <div className="pt-4">
              <p className="text-xl font-light">135 N. 5th Street</p>
              <p className="text-xl font-light">Brooklyn, NY</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
