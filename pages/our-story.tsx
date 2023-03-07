import { Navigation } from '@/components';
import Head from 'next/head';

export default function OurStory() {
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
      <section className="project-white py-10 mt-14 min-h-[calc(100vh_-_120px)]">
        <div className="block mb-5 px-5 pt-5 pb-0 max-w-[1190px] mx-auto sm:flex sm:items-center sm:justify-start  sm:px-10 sm:pt-4 sm:mb-10">
          <div className="min-h-[69.47vh] relative sm:inline-block sm:align-middle sm:min-w-[430px] sm:w-[min(100%, 430px)] sm:min-h-[645px]">
            <div className="our-story-img absolute bg-cover top-0 left-0 bottom-0 w-full" />
          </div>

          <div className="text-tertiary mt-10 my-5 mx-auto sm:mx-0 max-w-[90%] sm:px-10  sm:justify-center sm:inline-flex sm:flex-col sm:max-w-[500px]">
            <h1 className="text-4xl text-center sm:text-left">How We Met</h1>
            <div className="mt-4 align-top">
              <p className="text-center text-base font-light leading-relaxed sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sed consequuntur tenetur sequi
                similique illo eos nobis nisi atque consequatur voluptate nostrum iure quod laboriosam dolorem, iusto
                nulla esse beatae? Itaque eos consequuntur iure dolorum animi aspernatur ipsa vero nam quisquam unde,
                ullam incidunt quos? Accusamus non recusandae sequi excepturi dolorem ullam praesentium facilis eligendi
                nemo sit? Ipsum, aspernatur blanditiis.
              </p>
            </div>
          </div>
        </div>
        <div className="block mb-5 px-5 pt-5 pb-0 max-w-[1190px] mx-auto sm:flex sm:flex-row-reverse sm:items-center sm:justify-start  sm:px-10 sm:pt-4 sm:mb-10">
          <div className="min-h-[69.47vh] relative sm:inline-block sm:align-middle sm:min-w-[430px] sm:w-[min(100%, 430px)] sm:min-h-[645px]">
            <div className="our-story-img absolute bg-cover top-0 left-0 bottom-0 filter brightness-[88%] saturate-[%] hue-rotate-0 w-full" />
          </div>

          <div className="text-tertiary mt-10 my-5 mx-auto sm:mx-0 max-w-[90%] sm:px-10  sm:justify-center sm:inline-flex sm:flex-col sm:max-w-[500px]">
            <h1 className="text-4xl text-center sm:text-right">The Proposal</h1>
            <div className="mt-4 align-top">
              <p className="text-center text-base font-light leading-relaxed sm:text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sed consequuntur tenetur sequi
                similique illo eos nobis nisi atque consequatur voluptate nostrum iure quod laboriosam dolorem, iusto
                nulla esse beatae? Itaque eos consequuntur iure dolorum animi aspernatur ipsa vero nam quisquam unde,
                ullam incidunt quos? Accusamus non recusandae sequi excepturi dolorem ullam praesentium facilis eligendi
                nemo sit? Ipsum, aspernatur blanditiis.
              </p>
            </div>
          </div>
        </div>
        <div className="block mb-5 px-5 pt-5 pb-0 max-w-[1190px] mx-auto sm:flex sm:items-center sm:justify-start  sm:px-10 sm:pt-4 sm:mb-10">
          <div className="min-h-[69.47vh] relative sm:inline-block sm:align-middle sm:min-w-[430px] sm:w-[min(100%, 430px)] sm:min-h-[645px]">
            <div className="our-story-img absolute bg-cover top-0 left-0 bottom-0 filter brightness-[88%] saturate-[%] hue-rotate-0 w-full" />
          </div>

          <div className="text-tertiary mt-10 my-5 mx-auto sm:mx-0 max-w-[90%] sm:px-10  sm:justify-center sm:inline-flex sm:flex-col sm:max-w-[500px]">
            <h1 className="text-4xl text-center sm:text-left">The Elopment</h1>
            <div className="mt-4 align-top">
              <p className="text-center text-base font-light leading-relaxed sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sed consequuntur tenetur sequi
                similique illo eos nobis nisi atque consequatur voluptate nostrum iure quod laboriosam dolorem, iusto
                nulla esse beatae? Itaque eos consequuntur iure dolorum animi aspernatur ipsa vero nam quisquam unde,
                ullam incidunt quos? Accusamus non recusandae sequi excepturi dolorem ullam praesentium facilis eligendi
                nemo sit? Ipsum, aspernatur blanditiis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
