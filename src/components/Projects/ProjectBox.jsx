import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';
import Docker from '../../assets/stacks/docker.svg';
import Express from '../../assets/stacks/express.svg';
import Gemini from '../../assets/stacks/gemini.svg';
import JavaScript from '../../assets/stacks/javascript.svg';
import Jest from '../../assets/tools/jest.svg';
import MongoDB from '../../assets/stacks/mongodb.svg';
import Node from '../../assets/stacks/nodejs.svg';
import NPM from '../../assets/stacks/npm.svg';
import Python from '../../assets/stacks/python.svg';
import React from '../../assets/stacks/react.svg';
import TailwindCSS from '../../assets/stacks/tailwind.svg';
import TypeScript from '../../assets/stacks/typescript.svg';
import Vite from '../../assets/stacks/vitejs.svg';
import Vitest from '../../assets/tools/vitest.svg';
import Supabase from '../../assets/stacks/supabase.svg';
import NoImage from '../../assets/projects/noimage.webp';
import Azure from '../../assets/tools/azure.svg';
import OpenAI from '../../assets/tools/openai.svg';
import Next from '../../assets/stacks/nextjs.svg';
import Firebase from '../../assets/stacks/firebase.svg';
import Dart from '../../assets/stacks/dart.svg';
import Django from '../../assets/stacks/django.svg';
import Flutter from '../../assets/stacks/flutter.svg';
import Nest from '../../assets/stacks/nestjs.svg';
import Bun from '../../assets/stacks/bun.svg';
import X from '../../assets/stacks/x.svg';
import Cloudflare from '../../assets/tools/cloudflare.svg';
import Postgres from '../../assets/stacks/postgresql.svg';
import DigitalOcean from '../../assets/tools/digitalocean.svg';
import Redis from '../../assets/stacks/redis.svg';
import RabbitMQ from '../../assets/stacks/rabbitmq.svg';
import Meilisearch from '../../assets/tools/meilisearch.svg';
import RPGMaker from '../../assets/tools/rpgmaker.png';
import Neon from '../../assets/stacks/neon.svg';
import Ae from '../../assets/tools/ae.svg';
import Photoshop from '../../assets/tools/photoshop.svg';
import Davinci from '../../assets/tools/davinci.svg';
import Ai from '../../assets/tools/ai.svg';
import Blender from '../../assets/tools/blender.svg';
import { IconArrowUpRight, IconBrandGithub } from '@tabler/icons-react';
import BlurFade from '../../blocks/Animations/BlurFade/BlurFade';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stackIcons = {
  docker: { src: Docker, name: 'Docker' },
  express: { src: Express, name: 'Express' },
  javascript: { src: JavaScript, name: 'JavaScript' },
  jest: { src: Jest, name: 'Jest' },
  mongodb: { src: MongoDB, name: 'MongoDB' },
  nodejs: { src: Node, name: 'Node.js' },
  npm: { src: NPM, name: 'NPM' },
  python: { src: Python, name: 'Python' },
  bun: { src: Bun, name: 'Bun' },
  reactjs: { src: React, name: 'React.js' },
  tailwindcss: { src: TailwindCSS, name: 'TailwindCSS' },
  typescript: { src: TypeScript, name: 'TypeScript' },
  vitejs: { src: Vite, name: 'Vite.js' },
  vitest: { src: Vitest, name: 'Vitest' },
  gemini: { src: Gemini, name: 'Gemini' },
  supabase: { src: Supabase, name: 'Supabase' },
  azure: { src: Azure, name: 'Azure' },
  openai: { src: OpenAI, name: 'OpenAI' },
  nextjs: { src: Next, name: 'Next.js' },
  firebase: { src: Firebase, name: 'Firebase' },
  dart: { src: Dart, name: 'Dart' },
  django: { src: Django, name: 'Django' },
  flutter: { src: Flutter, name: 'Flutter' },
  nestjs: { src: Nest, name: 'Nest.js' },
  x: { src: X, name: 'X (Twitter) Bot' },
  cloudflare: { src: Cloudflare, name: 'Cloudflare' },
  postgresql: { src: Postgres, name: 'PostgreSQL' },
  digitalocean: { src: DigitalOcean, name: 'DigitalOcean' },
  redis: { src: Redis, name: 'Redis' },
  rabbitmq: { src: RabbitMQ, name: 'RabbitMQ' },
  meilisearch: { src: Meilisearch, name: 'Meilisearch' },
  rpgmaker: { src: RPGMaker, name: 'RPG Maker' },
  neon: { src: Neon, name: 'Neon' },
  ae: { src: Ae, name: 'Adobe After Effects' },
  photoshop: { src: Photoshop, name: 'Adobe Photoshop' },
  davinci: { src: Davinci, name: 'DaVinci Resolve' },
  ai: { src: Ai, name: 'Adobe Illustrator' },
  blender: { src: Blender, name: 'Blender' },
};

const ProjectBox = ({ preview = null, isVideo = false, title, type, date, subtitle, stacks = [], url = null, github = null }) => {
  const desktopView = DesktopView();
  const tabletView = TabletView();
  const [hovered, setHovered] = useState('');
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isVideo || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isVideo]);

  var urlVisibility, githubVisibility;
  if (!url) urlVisibility = 'opacity-30';
  if (!github) githubVisibility = 'opacity-30';

  const STACKS_PER_LINE = 8;

  return (
    <BlurFade
      delay={0.05}
      offset={15}
      inView
    >
      <div className='flex h-full flex-col overflow-hidden rounded-3xl border-2 border-customgray bg-customblack py-0 shadow-lg transition-all duration-100 md:hover:scale-[101%] md:hover:border-blurple md:hover:shadow-glowblurpleextrasmall'>
        <div className='aspect-[10/7] w-full bg-[#2d2d2d]'>
          {isVideo ? (
            <video
              ref={videoRef}
              src={preview}
              className='h-full w-full object-cover'
              muted
              loop
              playsInline
              preload='metadata'
            />
          ) : (
            <img
              src={preview ? preview : NoImage}
              className='h-full w-full object-cover'
              alt={title + ' preview'}
            />
          )}
        </div>
        <div className='relative flex flex-1 flex-col space-y-2 p-6'>
          <div className='flex flex-row items-start justify-between'>
            <div className='flex flex-row items-start space-x-3'>
              <p className='font-instrument text-2xl md:text-3xl'>{title}</p>
            </div>
            <p className='md:text-md mt-[6px] text-end font-maplemono text-sm font-extrabold opacity-70 md:mt-[10px]'>{date}</p>
          </div>
          <div className='flex flex-row items-center space-x-2'>
            <p className='font-bold'>Type: </p>
            <div className='flex flex-row flex-wrap gap-2'>
              {Array.isArray(type) ? (
                type.map((t, index) => (
                  <div
                    key={index}
                    className='w-fit rounded-md border border-blurple bg-blurple bg-opacity-10 px-2'
                  >
                    <p className='font-maplemono text-xs text-blurple md:text-sm'>{t}</p>
                  </div>
                ))
              ) : (
                <div className='w-fit rounded-md border border-blurple bg-blurple bg-opacity-10 px-2'>
                  <p className='font-maplemono text-xs text-blurple md:text-sm'>{type}</p>
                </div>
              )}
            </div>
          </div>
          <p className='text-justify'>{subtitle}</p>
          <div className='flex flex-grow' />
          <div className='!mt-4 flex h-auto w-full flex-row items-start justify-between'>
            <div className='flex w-fit flex-col space-y-2 rounded'>
              {Array.from({ length: Math.ceil(stacks.length / STACKS_PER_LINE) }).map((_, chunkIndex) => (
                <div
                  key={chunkIndex}
                  className='flex flex-row space-x-2 md:space-x-3'
                >
                  {stacks.slice(chunkIndex * STACKS_PER_LINE, (chunkIndex + 1) * STACKS_PER_LINE).map((stack) => (
                    <motion.div
                      key={stack}
                      className='relative hover:cursor-pointer'
                      onHoverStart={() => setHovered(stack)}
                      onHoverEnd={() => setHovered('')}
                    >
                      <AnimatePresence>
                        {hovered === stack && (
                          <motion.div
                            initial={{ opacity: 0, y: 3 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 3 }}
                            transition={{ duration: 0.15, ease: 'easeInOut' }}
                            className='absolute -bottom-[32px] left-1/2 -translate-x-1/2 transform rounded border-[0.5px] bg-black px-[6px] py-[3px] font-maplemono text-xs'
                          >
                            <p className='text-nowrap'>{stackIcons[stack].name}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <img
                        src={stackIcons[stack].src}
                        alt={stackIcons[stack].name}
                        className={tabletView ? 'h-5 w-5 object-contain' : 'h-4 w-4 object-contain'}
                        draggable='false'
                      />
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
            <div className='flex h-[9vw] w-auto flex-row space-x-2 md:h-10 md:space-x-3'>
              {url === '' ? (
                <div className='flex h-full w-[9vw] items-center justify-center rounded-lg bg-[#2c2c32] opacity-30 md:w-10'>
                  <IconArrowUpRight
                    stroke={1.5}
                    size={desktopView ? 24 : 22}
                  />
                </div>
              ) : (
                <a
                  href={url}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Open deployed project URL'
                  title='Open deployed project URL'
                >
                  <div className={`flex h-full w-[9vw] items-center justify-center rounded-lg bg-[#2c2c32] md:w-10 ${urlVisibility ? urlVisibility : 'transition-all duration-100 ease-in-out hover:bg-blurple hover:bg-opacity-30 hover:text-blurple'}`}>
                    <IconArrowUpRight
                      stroke={1.5}
                      size={desktopView ? 24 : 22}
                    />
                  </div>
                </a>
              )}
              {github === '' ? (
                <div className='flex h-full w-[9vw] items-center justify-center rounded-lg bg-[#2c2c32] opacity-30 md:w-10'>
                  <IconBrandGithub
                    stroke={1.5}
                    size={desktopView ? 24 : 22}
                  />
                </div>
              ) : (
                <a
                  href={github}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='View project source code on GitHub'
                  title='View project source code on GitHub'
                >
                  <div className={`flex h-full w-[9vw] items-center justify-center rounded-lg bg-[#2c2c32] md:w-10 ${githubVisibility ? githubVisibility : 'transition-all duration-100 ease-in-out hover:bg-blurple hover:bg-opacity-30 hover:text-blurple'}`}>
                    <IconBrandGithub
                      stroke={1.5}
                      size={desktopView ? 24 : 22}
                    />
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

export default ProjectBox;
