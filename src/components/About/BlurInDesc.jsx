import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';

export default function BlurInDesc({ className, variant, duration = 0.8 }) {
  const defaultVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;
  const desktopView = DesktopView();
  const tabletView = TabletView();

  return (
    <motion.h1
      initial='hidden'
      animate='visible'
      transition={{ duration, delay: 0.5 }}
      variants={combinedVariants}
      className={cn('bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text text-center font-instrument text-[3.4rem] leading-[3.2rem] text-transparent md:text-6xl lg:text-7xl', className)}
    >
      Full-stack developer. Systems designer. Cloud-native enthusiast. AI-integrated builder.
      <br />
      <span className='text-[0]'>eW8gaWYgeW91J3JlIHNlZWluZyB0aGlzLCB3aGF0IGFyZSB5b3UgdXAgdG8gYnJv</span>
    </motion.h1>
  );
}
