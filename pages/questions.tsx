import { Layout, Navigation } from '@/components';
import Head from 'next/head';

export default function Travel() {
  return (
    <>
      <Head>
        <title>Brittani & Klaven</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation page="questions" />
      </header>
      <section className="hero min-h-[50vh] bg-secondary">
        <div className="hero-content text-center">
          <div className="max-w-full">
            <h1 className="text-4xl lg:text-6xl text-project-white">Frequently Asked Questions</h1>
          </div>
        </div>
      </section>
      <main className="px-4 min-h-screen bg-project-white text-center">
        <div className="border-b-2 px-4 py-10">
          <h2 className="sub-title mb-4 font-bold text-2xl sm:text-3xl md:text-4xl">
            Are children allowed at the reception?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl">
            We kindly ask that your children do not attend the reception.
          </p>
        </div>
        <div className="border-b-2 px-4 py-10">
          <h2 className="sub-title mb-4 font-bold text-2xl sm:text-3xl md:text-4xl">
            Can I take photos during the reception?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl">
            Absolutely! We encourage you to post all the photos on social media with the #SmittenwithSmithJones hashtag.
          </p>
        </div>
        <div className="border-b-2 px-4 py-10">
          <h2 className="sub-title mb-4 font-bold text-2xl sm:text-3xl md:text-4xl">
            Will there be vegetarian options available?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl">
            Yes, we will have a variety of options to meet everyone's needs.
          </p>
        </div>
        <div className="px-4 py-10">
          <p className="text-lg sm:text-xl md:text-2xl italic">
            **Please check this page frequently as it will be updated with more questions, we recieve in the coming
            weeks.**
          </p>
        </div>
      </main>
    </>
  );
}