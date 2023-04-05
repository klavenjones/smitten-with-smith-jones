import { Footer, Navigation } from '@/components';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useEffect, useState } from 'react';

interface ImageProps {
  filename: string;
}

export default function Gallery() {
  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch('/api/images');
      const filenames = await res.json();
      //@ts-ignore
      const images = filenames.map((filename: any) => ({ filename }));
      setImages(images);
    }
    fetchImages();
  }, []);

  return (
    <>
      <Head>
        <title>Brittani & Klaven</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation page="gallery" />
      </header>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-project-white min-h-screen py-10 sm:py-20 px-10"
      >
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map(image => (
              <motion.div
                key={`${image.filename}`}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="aspect-square"
              >
                <img
                  src={`img/${image.filename}`}
                  alt={`${image.filename}`}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}
