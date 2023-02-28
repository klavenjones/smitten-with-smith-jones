import classNames from 'classnames';

interface MarqueeProps {
  direction: string;
}

export function Marquee({ direction }: MarqueeProps) {
  return (
    <div className="container min-w-full relative overflow-hidden">
      <div
        className={classNames(
          'flex w-full max-h-64 gap-1',
          { 'animate-marquee': direction == 'left' },
          { 'animate-marquee3': direction == 'right' }
        )}
      >
        <div className="w-1/2">
          <img className="h-full object-cover w-full object-center" src="/black_couple_2.jpeg" alt="black couple" />
        </div>
        <div className="w-full">
          <img className="h-full object-cover w-full object-center" src="/black_couple_1.jpeg" alt="black couple" />
        </div>
        <div className="w-1/2">
          <img className="h-full object-cover w-full object-center" src="/black_couple_3.jpeg" alt="black couple" />
        </div>
        <div className="w-2/3">
          <img className="h-full object-cover w-full object-center" src="/black_couple_4.jpeg" alt="black couple" />
        </div>
      </div>

      <div
        className={classNames(
          'flex w-full max-h-64 gap-1 absolute top-0',
          { 'animate-marquee2 ml-1': direction == 'left' },
          { 'animate-marquee4 mr-1': direction == 'right' }
        )}
      >
        <div className="w-1/2">
          <img className="h-full object-cover w-full object-center" src="/black_couple_2.jpeg" alt="black couple" />
        </div>
        <div className="w-full">
          <img className="h-full object-cover w-full object-center" src="/black_couple_1.jpeg" alt="black couple" />
        </div>
        <div className="w-1/2">
          <img className="h-full object-cover w-full object-center" src="/black_couple_3.jpeg" alt="black couple" />
        </div>
        <div className="w-2/3">
          <img className="h-full object-cover w-full object-center" src="/black_couple_4.jpeg" alt="black couple" />
        </div>
      </div>
    </div>
  );
}
