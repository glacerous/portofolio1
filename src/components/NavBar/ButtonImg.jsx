import { useState, useEffect } from 'react';
import DesktopView from '../../lib/DesktopView';
// import Arrow from '../../assets/elements/arrow.webp';
import Laptop from '../../assets/creds/laptop.webp';
// import Flag from '../../assets/creds/flag.webp';
import Globe from '../../assets/creds/globe.webp';
// import Test from '../../assets/creds/test.webp';
import Indonesia from '../../assets/creds/indonesia.webp';
// import PFP2 from '../../assets/creds/pfp.svg';
import PFP3 from '../../assets/creds/pfp.webp';
import Fasilkom from '../../assets/orgs/fasilkom.svg';
import Lift from '../../assets/creds/lift.webp';

const imgs = [Laptop, Indonesia];

const ButtonImg = () => {
  const [hovered, setHovered] = useState(false);
  const [hoveredOnce, setHoveredOnce] = useState(false);
  const [counter, setCounter] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const desktopView = DesktopView();

  const currentEmoji = imgs[counter];

  useEffect(() => {
    if (!hoveredOnce) {
      const timer = setTimeout(() => {
        if (!hoveredOnce) {
          setShowMessage(true);
          const hideMessageTimer = setTimeout(() => {
            setShowMessage(false);
          }, 15000);
          return () => clearTimeout(hideMessageTimer);
        } else {
          setShowMessage(false);
        }
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setShowMessage(false);
    }
  }, [hoveredOnce]);

  const hoverEmoji = () => {
    setHovered(true);
    setHoveredOnce(true);
  };

  const changeEmoji = () => {
    setCounter((counter + 1) % imgs.length);
  };

  return (
    <div>
      <div className='relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#424242] shadow-xl hover:bg-blurple hover:bg-opacity-40 active:bg-blurple active:bg-opacity-85'>
        {desktopView && (
          <div className={`absolute -bottom-8 -left-6 flex flex-col space-y-1 transition-all duration-[1000ms] ease-out ${showMessage ? 'opacity-100' : 'opacity-0'}`}>
            <div className='customgray rotate-[4deg] rounded-lg border border-customgray bg-[#161616] px-2 py-1 shadow-md'>
              <p className='text-nowrap text-xs'>Click me!</p>
            </div>
          </div>
        )}
        <img
          src={currentEmoji}
          className={`absolute -bottom-5 -right-6 z-20 ${hovered ? '-rotate-[4deg] scale-[50%]' : 'rotate-12 scale-[35%]'} transition duration-200 ease-in-out`}
          alt='Emoji'
          draggable='false'
        />
        <div
          className='clickable h-full w-full cursor-help overflow-hidden rounded-2xl bg-white'
          onMouseEnter={() => hoverEmoji()}
          onClick={() => changeEmoji()}
          onMouseLeave={() => setHovered(false)}
          aria-label='Profile picture'
          title='Profile picture'
        >
          <img
            src={PFP3}
            className={`transform scale-[110%] translate-x-[5%] translate-y-[-15%] select-none grayscale filter transition duration-200 ease-in-out ${hovered ? 'filter-none' : ''}`}

            alt='Profile picture'
            draggable='false'
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonImg;
