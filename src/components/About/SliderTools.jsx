import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
// import Bash from '../../assets/tools/bash.svg';
import Figma from '../../assets/tools/figma.svg';
import GitHub from '../../assets/tools/github.svg';
import Heroku from '../../assets/tools/heroku.svg';
import Railway from '../../assets/tools/railway.svg';
import Vercel from '../../assets/tools/vercel.svg';
import Ubuntu from '../../assets/tools/ubuntu.svg';
import Azure from '../../assets/tools/azure.svg';
import OpenAI from '../../assets/tools/openai.svg';
import Vitest from '../../assets/tools/vitest.svg';
import Jest from '../../assets/tools/jest.svg';
import Selenium from '../../assets/tools/selenium.svg';
import Tableau from '../../assets/tools/tableau.svg';
import Gemini from '../../assets/stacks/gemini.svg';
import Discord from '../../assets/stacks/discord.svg';
import X from '../../assets/stacks/x.svg';
import Cloudflare from '../../assets/tools/cloudflare.svg';
import DigitalOcean from '../../assets/tools/digitalocean.svg';
import DeepSeek from '../../assets/tools/deepseek.svg';
import Ae from '../../assets/tools/ae.svg';
import Photoshop from '../../assets/tools/photoshop.svg';
import Davinci from '../../assets/tools/davinci.svg';
import Ai from '../../assets/tools/ai.svg';
import Blender from '../../assets/tools/blender.svg';
import DesktopView from '../../lib/DesktopView';

export const toolsList = [
  // { src: Azure, alt: 'Azure' },
  { src: Vercel, alt: 'Vercel' },
  // { src: Heroku, alt: 'Heroku' },
  // { src: Railway, alt: 'Railway' },
  // { src: DigitalOcean, alt: 'DigitalOcean' },
  // { src: Selenium, alt: 'Selenium' },
  { src: Vitest, alt: 'Vitest' },
  // { src: Jest, alt: 'Jest' },
  // { src: Cloudflare, alt: 'Cloudflare' },
  // { src: Tableau, alt: 'Tableau' },
  { src: Figma, alt: 'Figma' },
  // { src: Ubuntu, alt: 'Ubuntu' },
  { src: GitHub, alt: 'GitHub' },
  { src: Ae, alt: 'After Effects' },
  { src: Photoshop, alt: 'Photoshop' },
  { src: Ai, alt: 'Illustator' },
  { src: Blender, alt: 'Blender' },
  { src: Davinci, alt: 'Davinci Resolve' },
  // { src: OpenAI, alt: 'OpenAI API' },
  // { src: Gemini, alt: 'Gemini API' },
  // { src: DeepSeek, alt: 'DeepSeek API' },
  // { src: Discord, alt: 'Discord Bot' },
  // { src: X, alt: 'Twitter Bot' },
];

export const SliderTools = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const desktopView = DesktopView();

  return (
    <Marquee
      speed='40'
      gradient={true}
      gradientColor='#0d0d0d'
      gradientWidth={110}
      autoFill={true}
      direction='right'
      pauseOnClick={desktopView ? false : true}
      pauseOnHover={desktopView ? true : false}
    >
      {toolsList.map((tool, index) => (
        <div
          key={index}
          className='small-clickable mx-2 flex h-[4.5rem] w-[4.5rem] cursor-help items-center justify-center rounded-lg bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] p-4 shadow-xl md:mx-3 md:h-20 md:w-20'
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className='absolute h-[4.5rem] w-[4.5rem] rounded-lg border-2 border-b-0 border-r-0 border-[#2a2a2a] md:h-20 md:w-20' />
          {hoveredIndex === index && <div className='absolute z-30 max-w-[3.5rem] rounded bg-black px-1 py-1 text-center text-[0.6rem] text-[#cccccc] md:max-w-[4rem] md:text-xs'>{tool.alt}</div>}
          <img
            src={tool.src}
            alt={tool.alt}
            className={`h-full w-full select-none object-contain transition-all duration-200 ${hoveredIndex === index ? 'blur-sm' : ''}`}
            draggable='false'
          />
        </div>
      ))}
    </Marquee>
  );
};
