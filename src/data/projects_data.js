// Import project images and videos
import GrabAuto from '../assets/projects/grabauto.webp';
import MIPAOpenHouse from '../assets/projects/mipaopenhouse.webp';
import DM2Calc from '../assets/projects/dm2calc.webp';
import ValentineLetter from '../assets/projects/valentineletter.webp';
import GusDur from '../assets/projects/gusdur.webp';
import Portfolio from '../assets/projects/portfolio.webp';
import DesaKedisan from '../assets/projects/desakedisan.webp';
import NuSantap from '../assets/projects/nusantap.webp';
import Ngandung from '../assets/projects/ngandung.webp';
import Rumble from '../assets/projects/rumble.webp';
import ALSAEcomp from '../assets/projects/alsaecomp.webp';
import Karakeep from '../assets/projects/karakeep.webp';
import PintaruVideo from '../assets/projects/pintaru.mp4';
import Pkkftilogoteaser from '../assets/projects/pkkftilogoteaser.mp4';
import Twine4 from '../assets/projects/twine4.webp';

const projectsData = [
  {
    preview: Twine4,
    title: 'Twine',
    type: ['Fullstack'],
    date: '2025',
    subtitle: 'Twine is a minimalist social media web application where users can share short posts and reply to others in a threaded format. Built using Next.js and Tailwind CSS, it offers a clean, responsive interface focused on simplicity and readability. On the backend, Twine uses PostgreSQL hosted on Neon to manage users, posts, and replies efficiently.',
    stacks: ['nextjs', 'typescript', 'tailwindcss', 'javascript', 'npm', 'neon'  ],
    url: '',
    github: '',
  },
  {
    preview: Pkkftilogoteaser,
    isVideo: true,
    title: 'PKKFTI Logo Teaser',
    type: ['Design'],
    date: '04/2025',
    subtitle: 'A dynamic teaser animation showcasing the new PKKFTI logo, created using Blender.',
    stacks: ['blender', ],
    url: '',
    github: '',
  },
  // {
  //   preview: null,
  //   title: 'Cobaju',
  //   type: ['Fullstack', 'Extension', 'Under Dev'],
  //   date: '03/2025',
  //   subtitle: 'Cobaju is an online shopping companion, where you can see yourself in the clothes you want, complete with accurate sizing details in a matter of seconds. Cobaju collects clothing pictures you choose from the e-commerce website you visit and combines with your full-body image to see how it would fit you!',
  //   stacks: ['nextjs', 'typescript', 'tailwindcss', 'supabase', 'vitejs', 'reactjs', 'tailwindcss', 'gemini', 'openai'],
  //   url: '',
  //   github: '',
  // },
  // {
  //   preview: ALSAEcomp,
  //   title: 'ALSA LC FH UI E-Comp Portal',
  //   type: ['Frontend'],
  //   date: '02/2025',
  //   subtitle: 'This website serves as the portal for ALSA FH UI E-Comp, a national competition held by ALSA LC UI. It features information about the competition categories, timeline, participants accomodation, etc.',
  //   stacks: ['nodejs', 'npm', 'nextjs', 'javascript', 'tailwindcss'],
  //   url: 'https://alsaecomp.id/',
  //   github: 'https://github.com/absolutepraya/alsa-ecomp',
  // },
  // {
  //   preview: Karakeep,
  //   title: 'Karakeep (Self-Hosted)',
  //   type: ['Self-Hosted'],
  //   date: '06/2025',
  //   subtitle: 'An open-source bookmark-everything app (links, notes and images) with AI-based automatic tagging and full text search. Self-hosted by me. DM me on LinkedIn or Discord if you\'re interested in trying it!',
  //   stacks: ['docker', 'meilisearch', 'openai'],
  //   url: 'https://keep.abhipraya.dev/',
  //   github: 'https://github.com/karakeep-app/karakeep',
  // },
  // {
  //   preview: null,
  //   title: 'SwiftCash',
  //   type: ['Fullstack'],
  //   date: '02/2025',
  //   subtitle: 'A fast, secure, and reliable web-based digital banking app with dynamic account management and a powerful admin system. Built by maxxing out Next.js performance optimizations.',
  //   stacks: ['bun', 'nextjs', 'typescript', 'tailwindcss', 'supabase', 'postgresql'],
  //   url: 'https://swiftcash.abhipraya.dev/',
  //   github: 'https://github.com/absolutepraya/swiftcash',
  // },
  // {
  //   preview: Rumble,
  //   title: 'Rumble Backend',
  //   type: ['Backend'],
  //   date: '01/2025',
  //   subtitle: 'Rumble is an On-Chain Solana Battle Royale Game. This is the backend server for Rumble, handling user authentication, game logic, player management, etc. Game announcements are sent via X (Twitter) Bot using X API v2.',
  //   stacks: ['nodejs', 'npm', 'express', 'javascript', 'supabase', 'x'],
  //   url: 'https://rumble-landing.vercel.app/',
  //   github: '',
  // },
  // {
  //   preview: NuSantap,
  //   title: 'NuSantap (Gov-AI Hackathon 2024)',
  //   type: ['Fullstack', 'Mobile'],
  //   date: '11/2024',
  //   subtitle: 'NuSantap is an app that uses AI and Computer Vision to provide personalized meal recommendations based on nutritional needs and local food availability, optimizing the "Makan Bergizi Gratis" program.',
  //   stacks: ['nodejs', 'npm', 'nextjs', 'javascript', 'tailwindcss', 'firebase', 'azure', 'openai'],
  //   url: 'https://www.nusantap.id/',
  //   github: '',
  // },
  // {
  //   preview: null,
  //   title: 'NuSantap Dashboard',
  //   type: ['Fullstack'],
  //   date: '11/2024',
  //   subtitle: 'A dashboard for NuSantap, featuring analytics graphs, user meal QR scans, and a stunting prevalence map at both provincial and national levels, with the ability to generate and manage weekly meal plans.',
  //   stacks: ['nodejs', 'npm', 'nextjs', 'typescript', 'tailwindcss', 'firebase', 'azure', 'openai'],
  //   url: 'https://nusantap-dashboard.vercel.app/',
  //   github: '',
  // },
  // {
  //   preview: Ngandung,
  //   title: 'Ngandung: Ngemil di Bandung',
  //   type: ['Fullstack', 'Mobile'],
  //   date: '11/2024',
  //   subtitle: 'Ngandung is an application that makes it easy for users to find information about foods and stores in Bandung, leave reviews, and save favorite stores.',
  //   stacks: ['django', 'python', 'javascript', 'tailwindcss', 'flutter', 'dart'],
  //   url: '',
  //   github: 'https://github.com/Kelompok-9-PBP-Ganjil-2024-2025/ngandung-mobile',
  // },
  // {
  //   preview: DesaKedisan,
  //   title: 'Desa Kedisan Tourism Portal',
  //   type: ['Frontend'],
  //   date: '10/2024',
  //   subtitle: 'A front-end website that serves as information center of Desa Kedisan, a small tourism village in Gianyar, Bali. This website showcases the essence of the village, its culture, and its tourism spots.',
  //   stacks: ['nodejs', 'npm', 'vitejs', 'reactjs', 'javascript', 'tailwindcss'],
  //   url: 'https://desa-kedisan.vercel.app/',
  //   github: 'https://github.com/absolutepraya/desa-kedisan',
  // },
  // {
  //   preview: Portfolio,
  //   title: 'Personal Portfolio',
  //   type: ['Frontend'],
  //   date: '08/2024',
  //   subtitle: 'Personal portfolio website, showcasing skills, experiences, achievements, and projects. Contents are to be updated regularly. Feel free to explore and reach out!',
  //   stacks: ['bun', 'npm', 'vitejs', 'reactjs', 'javascript', 'tailwindcss', 'cloudflare'],
  //   url: 'https://abhipraya.dev/',
  //   github: 'https://github.com/absolutepraya/portfolio',
  // },
  // {
  //   preview: GrabAuto,
  //   title: 'GrabAuto (hackjakarta 2024)',
  //   type: ['Frontend'],
  //   date: '07/2024',
  //   subtitle: "Grab feature that uses gen-AI to diagnose vehicle issues (even when the user has no idea what's wrong), find the nearest mechanics, book a repair service, and predict the cost. Built in 23 hours during hackjakarta.",
  //   stacks: ['nodejs', 'npm', 'vitejs', 'reactjs', 'typescript', 'tailwindcss', 'gemini'],
  //   url: '',
  //   github: 'https://github.com/Tianrider/GrabAuto',
  // },
  // {
  //   preview: MIPAOpenHouse,
  //   title: 'Open House FMIPA UI 2024',
  //   type: ['Fullstack'],
  //   date: '06/2024',
  //   subtitle: 'Event website that showcases details about the FMIPA UI 2024 Open House, including the event details and the faculty and its departments, while also functions as a payment platform for participants.',
  //   stacks: ['nodejs', 'npm', 'vitejs', 'reactjs', 'javascript', 'tailwindcss', 'nestjs', 'supabase'],
  //   url: 'https://mipaopenhouse.com',
  //   github: '',
  // },
  // {
  //   preview: DM2Calc,
  //   title: 'Discrete Math Calculator',
  //   type: ['CLI App'],
  //   date: '02/2024',
  //   subtitle: "A collection of tools for solving Discrete Math problems that doesn't just give out the final result, but also provides a step-by-step solution. The available solvers are for modular exponentiation, Euclidean's algorithm, CRT, and many more.",
  //   stacks: ['python'],
  //   url: '',
  //   github: 'https://github.com/absolutepraya/dm2-calculator',
  // },
  // {
  //   preview: GusDur,
  //   title: 'The Legend of Gus Dur: EoTR',
  //   type: ['Video Game'],
  //   date: '12/2022',
  //   subtitle: "A plotful 2D video game as the final project for the History of Indonesia subject in grade 12, with the theme being the presidency of Gus Dur. It tells a story about a young man going back in time to learn about Gus Dur's presidency.",
  //   stacks: ['rpgmaker'],
  //   url: '',
  //   github: '',
  // },
];

export default projectsData;
