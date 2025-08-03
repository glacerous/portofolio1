// Import organizer logos
import Kemenkeu from '../assets/orgs/kemenkeu.webp';
import JIHS from '../assets/orgs/jihs.webp';
import UC from '../assets/orgs/uc.webp';
import COMSNETS from '../assets/orgs/comsnets.webp';
import Microsoft from '../assets/orgs/microsoft.svg';
import ASSI from '../assets/orgs/assi.webp';
import Alibaba from '../assets/orgs/alibaba.webp';
import PERMIKOMNAS from '../assets/orgs/permikomnas.webp';
import BEMFTIUNTAR from '../assets/orgs/bemuntar.webp';
import BNCC from '../assets/orgs/bncc.webp';

const achievementsData = [
  {
    title: '-',
    organizer: '-',
    organizerUrl: '-',
    organizerLogo: '-',
    date: '-',
    desc: '-',
    award: '1st Place',
    awardInt: 1,
    prizeCurr: 'IDR',
    prizeInt: 50000000,
    bonus: ['-', '-'],
    location: 'Somewhere, Indonesia',
    articles: [
      {
        platform: '-',
        url: '',
      },
      {
        platform: '',
        url: '',
      },
    ],
    imagesPath: 'src/assets/achievements/test1'
  },
  // {
  //   title: 'JIHS Hackathon 2025',
  //   organizer: 'Jakarta International Polytechnic',
  //   organizerUrl: 'https://jihs.ac.id/',
  //   organizerLogo: JIHS,
  //   date: '04/2025',
  //   desc: "Winning in a competitive final round against **9 other teams** from Indonesia's leading universities. Our product features an **AI-generated explanation video** with clear & concise text, graphs, visualizations, animations, and human-like audio, alongside an **AI-generated kid storybook** that was *first of its kind*. Our team was interviewed by **JAKTV** following the winners awarding ceremony.",
  //   award: '1st Place',
  //   awardInt: 1,
  //   prizeCurr: 'IDR',
  //   prizeInt: 8000000,
  //   bonus: ['IDR 400.000 Voucher', 'Merchandises'],
  //   location: 'Jakarta, Indonesia',
  //   articles: [
  //     {
  //       platform: 'The Jakarta Post',
  //       url: 'https://www.thejakartapost.com/culture/2025/05/18/jihs-hackathon-2025-concludes-with-breakthrough-innovations-in-jakartas-scbd.html',
  //     },
  //     {
  //       platform: 'EPORTAL',
  //       url: 'https://eportal.id/release-jihs-hackathon-2025-ajang-kreativitas-teknologi-dalam-mewujudkan-visi-asta-cita/',
  //     },
  //   ],
  //   imagesPath: 'src/assets/achievements/jihs'
  // },
  // {
  //   title: 'elevAIte Hackathon 2025',
  //   organizer: 'Microsoft',
  //   organizerUrl: 'https://www.microsoft.com/',
  //   organizerLogo: Microsoft,
  //   date: '06/2025',
  //   desc: "Secured **3rd place** in **Microsoft's** flagship AI hackathon, part of the **elevAIte Indonesia** initiative aimed at developing **1 million AI talents** across the country. Our team created innovative AI solutions addressing real-world challenges using **Azure services**, with emphasis on sustainability and community impact. We are now participating in the **elevAIte final national stage** competition.",
  //   award: '3rd Place',
  //   awardInt: 3,
  //   prizeCurr: 'US$',
  //   prizeInt: 400,
  //   bonus: ['Merchandises', 'Microsoft Voucher'],
  //   location: 'Tangerang, Indonesia',
  //   imagesPath: 'src/assets/achievements/elevaite'
  // },
  // {
  //   title: 'Alibaba Cloud Hackathon 2025',
  //   organizer: 'Alibaba Cloud',
  //   organizerUrl: 'https://www.alibabacloud.com/',
  //   organizerLogo: Alibaba,
  //   date: '05/2025',
  //   desc: "Participated in **Alibaba Cloud's** flagship **GenAI Hackathon 2025**, held in collaboration with **GoTo** and **Komdigi RI** (Ministry of Communication and Information Technology). Our team developed AI solutions using **Alibaba Cloud's Model Studio** platform and **Qwen AI models**. The two-day event offered a grand prize of *trip to Paris* as Indonesia's representative, which we fumbled because we didn't have enough development time during final exam week. Ended up our team being out of theme. 💔",
  //   award: 'Runner-Up + The Most Favorite Award',
  //   awardInt: 3,
  //   prizeInt: 5000000,
  //   prizeCurr: 'IDR',
  //   bonus: ['Acrylic Plaque', 'Alibaba Cloud Voucher', 'Alibaba Merchandises', 'GoTo Merchandises'],
  //   location: 'Jakarta, Indonesia',
  //   imagesPath: 'src/assets/achievements/alibaba'
  // },
  // {
  //   title: 'AI4Accessibility Hackathon 2025',
  //   organizer: 'Microsoft',
  //   organizerUrl: 'https://www.microsoft.com/',
  //   organizerLogo: Microsoft,
  //   date: '06/2025',
  //   desc: 'Won **2nd place**  with **PINTARU** - an adaptive study helper and digital storybook solution for kids with dyslexia. The solution adjusts font size, spacing, and visual elements using **Azure OpenAI**, **Azure Search**, and **Azure Speech** to create more inclusive learning experiences. Competed against 46 teams with 10 finalists.',
  //   award: '2nd Place',
  //   awardInt: 2,
  //   bonus: ['Dinner with President of Microsoft Indonesia, Dharma Simorangkir', 'Merchandises'],
  //   location: 'FT UI, Depok, Indonesia',
  //   imagesPath: 'src/assets/achievements/ai4a'
  // },
  // {
  //   title: 'Indonesia Aerospace Hackathon 2025',
  //   organizer: 'Indonesian Satellite Association',
  //   organizerUrl: 'https://assi.or.id/id/',
  //   organizerLogo: ASSI,
  //   date: '06/2025',
  //   desc: "Competed in **ASSI's** prestigious satellite innovation competition with the theme **'Empowering Indonesia's Future with Space-Driven Innovation for Prosperity and Sustainability.'** The hackathon challenged participants to develop solutions addressing **satellite technology**, **business strategy**, and **social innovation** challenges, with a focus on **space debris collision prevention**. Teams presented proposals and technical implementations before a panel of industry experts from the **Asia-Pacific satellite sector**.",
  //   award: '1 of 4 Champions',
  //   awardInt: 1,
  //   location: 'Jakarta, Indonesia',
  // },
  // {
  //   title: 'I/O FEST Web Dev 2025',
  //   organizer: 'BEM FTI UNTAR',
  //   organizerUrl: 'https://www.instagram.com/bemftiuntar/',
  //   organizerLogo: BEMFTIUNTAR,
  //   date: '05/2025',
  //   desc: "Participating in **I/O FESTIVAL 2025**, UNTAR's largest technology competition for students and high school students. The festival features multiple categories including **Web Development**, **UI/UX Design**, **Android Development**, and **Business Plan**, with a total prize pool of **IDR 42 million**.",
  //   award: 'Finalist',
  //   awardInt: 0,
  //   location: 'Jakarta, Indonesia',
  // },
  // {
  //   title: 'COMSNETS 2025',
  //   organizer: 'COMSNETS',
  //   organizerUrl: 'https://www.comsnet.org/',
  //   organizerLogo: COMSNETS,
  //   date: '05/2025',
  //   desc: 'The **only team representing Indonesia** among finalists composed of **60% teams from India** and **40% from other nations**. Collaborating directly with **Kementerian Komunikasi dan Informatika RI** (Ministry of Communication and Information Technology of the Republic of Indonesia).',
  //   award: 'Finalist',
  //   awardInt: 0,
  //   location: 'Bali, Indonesia [Online]',
  // },
];

export default achievementsData;
