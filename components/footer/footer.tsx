import Link from 'next/link';

export function Footer() {
  return (
    <footer>
      <section className="hero py-10 min-h-[40vh] bg-gray-700">
        <div className="hero-content text-center">
          <div className="max-w-full space-y-6">
            <h1 className="text-4xl lg:text-6xl text-project-white">Rsvp</h1>
            <p className="text-base sm:text-lg italic text-gray-400">Kindly Reply by June 16, 2023</p>
            <div className="py-4">
              <Link
                target="_blank"
                className="btn btn-outline rounded-none text-white border-tertiary italic font-light hover:bg-primary hover:border-primary"
                href="https://brittaniandklaven.rsvpify.com"
              >
                Reply now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-6 flex items-center justify-between">
        <h1 className="sub-title text-gray-500">
          {' '}
          <Link
            target="_blank"
            className="transition-all duration-100 hover:text-gray-700"
            href="https://www.instagram.com/explore/tags/SmittenwithSmithJones/"
          >
            #SmittenwithSmithJones
          </Link>
        </h1>
        <h1 className="sub-title text-gray-500">
          Site by{' '}
          <Link className="transition-all duration-100 font-bold hover:text-gray-700" href="https://klavenjones.com">
            Klaven Jones
          </Link>
        </h1>
      </section>
    </footer>
  );
}
