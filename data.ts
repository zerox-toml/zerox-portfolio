import { AiOutlineGithub } from "react-icons/ai"
import {
  FaDiscord,
  FaEye,
  FaRegListAlt,
  FaRegUser,
  FaTelegram,
  FaSkype,
  FaLinkedin,
  FaRegNewspaper,
} from "react-icons/fa"
import { SiFreelancer } from "react-icons/si";
import { FiSend } from "react-icons/fi"
import { MdComputer, MdDashboard } from "react-icons/md"
import {
  SiFirebase,
  SiBlockchaindotcom,
  SiWeb3Dotjs,
  SiFrontendmentor,
} from "react-icons/si"
import { FaXTwitter } from "react-icons/fa6"
import About from "./components/aboutPage/About"
import { FaStackOverflow } from "react-icons/fa";
import Contact from "./components/contactPage/Contact"
import GuestBook from "./components/guestbookPage/GuestBook"
import Resume from "./components/resumePage/Resume"
import Stats from "./components/statistics/Stats"
import Works from "./components/worksPage/Works"
import DevBlogs from './components/blogsPage/DevBlogs';

import {
  MenuData,
  ServiceData,
  SocialMedia,
  StatisticsData,
  TestimonialData,
  backSlideImages,
  WorkExperience,
  resume
} from "./types"

export const socialMedias: SocialMedia[] = [
  {
    id: 11,
    Icon: FaLinkedin,
    label: "Linkedin",
    logoColor: "#171515",
    mediaUrl: "https://linkedin.com/in/aldinosaputra",
    info: "Let's discuss professional vision in Linkedin.",
  },
  {
    id: 1,
    Icon: FaXTwitter,
    label: "X",
    logoColor: "#171515",
    mediaUrl: "https://x.com/SilkenCore59010",
    info: "Follow my X.",
  },

  {
    id: 6,
    Icon: FaTelegram,
    label: "Telegram",
    logoColor: "#5865f2",
    mediaUrl: "https://t.me/zerox_toml",
    info: "The faster, the better.",
  },


  {
    id: 2,
    Icon: AiOutlineGithub,
    label: "Github",
    logoColor: "#171515",
    mediaUrl: "https://www.github.com/zerox-toml",
    info: "Star my projects on Github",
  },

  {
    id: 3,
    Icon: FaDiscord,
    label: "Discord",
    logoColor: "#5865f2",
    mediaUrl: "https://discordapp.com/users/1201323402053554301",
    info: "Let's chat on Discord.",
  },




]

export const menus: MenuData[] = [
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: "works",
    Icon: FaEye,
    Component: Works,
  },
  {
    id: 4,
    label: 'blog',
    Icon: FaRegNewspaper,
    Component: DevBlogs,
  },
  {
    id: 5,
    label: "Stats",
    Icon: MdDashboard,
    Component: Stats,
  },
  {
    id: 6,
    label: "contact",
    Icon: FiSend,
    Component: Contact,
  },
  {
    id: 7,
    label: "Articles",
    Icon: MdComputer,
    Component: GuestBook,
  },
]

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    Icon: FaXTwitter,
    label: "X",
    logoColor: "#5865f2",
    mediaUrl: "https://x.com/SilkenCore59010",
    info: "Follow my X.",
  },
  {
    id: 11,
    Icon: FaLinkedin,
    label: "Linkedin",
    logoColor: "#5865f2",
    mediaUrl: "https://linkedin.com/in/aldinosaputra",
    info: "Let's discuss professional vision in Linkedin.",
  },
  {
    id: 1,
    Icon: FaTelegram,
    label: "Telegram",
    logoColor: "black",
    mediaUrl: "  https://t.me/zerox_toml",
    info: "I am open to work",
  },

  {
    id: 2,
    Icon: AiOutlineGithub,
    label: "Github",
    logoColor: "#171515",
    mediaUrl: "https://www.github.com/zerox-toml",
    info: "Star my projects on Github",
  },

  {
    id: 3,
    Icon: FaDiscord,
    label: "Discord",
    logoColor: "#5865f2",
    mediaUrl: "https://discordapp.com/users/1201323402053554301",
    info: "Let's chat on Discord. Now I am with you.",
  },


]

export const services: ServiceData[] = [
  {
    id: 1,
    title: "dApp Development",
    Icon: SiBlockchaindotcom,
    description:
      "NFT marketplace, DAO game, DEX, Lending Dapps, Web3 prediction Markets, Dcentralized CDPs.",
  },
  {
    id: 2,
    title: "LLM Chatbot Development",
    Icon: SiWeb3Dotjs,
    description:
      "Langchain, RAG, Open AI",
  },
  {
    id: 3,
    title: "Full Stack",
    Icon: SiFrontendmentor,
    description:
      "Modern user Interface trends with a highly professional and unique design and User Interface.",
  },
  {
    id: 4,
    title: "Database",
    Icon: SiFirebase,
    description:
      "",
  },
]





export const statisticsData: StatisticsData[] = [
  {
    title: "Main Stack",
    info: "Blockchain, LLM, Full Stack",
  },
  {
    title: "projects",
    info: "15+",
  },
  {
    title: "clients",
    info: "10+",
  },
]


export const backslideimages: backSlideImages[] = [
  {
    id: 1,
    imgLocation: "/images/slide/back1.png"
  },

  {
    id: 2,
    imgLocation: "/images/slide/solana.png"
  },

  {
    id: 3,
    imgLocation: "/images/slide/back3.png"
  },
  {
    id: 7,
    imgLocation: "/images/slide/uniswap.png"
  },
  {
    id: 6,
    imgLocation: "/images/slide/aptos.png"
  },
  {
    id: 4,
    imgLocation: "/images/slide/stellar.png"
  },
  {
    id: 5,
    imgLocation: "/images/slide/polkadot.png"
  },

]

export const workExperience: WorkExperience[] = [

// AI & Decentralized Cloud Computing Platform
{
  id: 77,
  title: "AI & Decentralized Cloud Computing Platform",
  images: [
    { url: "/images/projects/ens2.png" },
    { url: "/images/projects/ens.png" }
  ],
  workTabs: "Blockchain",
  workContent: "Web3 Full Stack Developer",
  workGithub: "",
  workRealLink: "https://www.opsec.computer/",
  projectId: 1,
  description: "You can deploy your applications on the blockchain using this app built with Decentralized CI/CD, ens, ipfs technologies",
  stack: [
    { stack: "ENS" },
    { stack: "IPFS" },
    { stack: "Next.js" },
    { stack: "Pinata" },
    { stack: "TypeScript" },
  ],
  keya: [
    { keya: "Decentralized CI/CD" },
    { keya: "Github/Wallet/Goolge Login" },
    { keya: "IPFS Hosting" },
    { keya: "Supabase" },
  ],
  responsibility: "Web3 & Full Stack Developer",
  techview1: "Developed decentralized CI/CD pipeline with GitHub integration for automated deployments.",
  techview2: "Implemented IPFS-based storage solution for secure, distributed content hosting.",
  techview3: "Integrated ENS for decentralized domain management and routing.",
  issues: "Ensuring persistent file availability in distributed IPFS network.",
  solutions: "Implemented Pinata integration for reliable file pinning and persistent storage management.",
},

  // Ape-lol Pumpfun
  {
    id: 101,
    title: "Ape-lol Pumpfun",
    images: [
      { url: "/images/projects/apelol.png" },
    ],
    workTabs: "Blockchain",
    workContent: "Solana Blockchain Developer",
    workGithub: "https://github.com/zerox-toml/pumpfun-solana",
    workRealLink: "https://app.ape.lol/",
    projectId: 1,
    description: "Developed smart contract and integrated with frontend.",
    stack: [
      { stack: "Solana Web3" },
      { stack: "Solana" },
      { stack: "Anchor" },
      { stack: "Next.js" },
      { stack: "TypeScript" },
    ],
    keya: [
      { keya: "Coin Creation" },
      { keya: "Wallet Integration" },
      { keya: "Leaderboard" },

    ],
    responsibility: "Solana Blockchain Developer",
    techview1: "Token Creation Platform: APE.LOL allows users to launch memecoins on the Solana blockchain for as little as $1, targeting fast and fair token launches without presales.",
    techview2: "Bonding Curve Mechanics: Uses bonding curves for token pricing, where liquidity is automatically deployed to Raydium at a $42,000 market cap, ensuring a fair and automated liquidity process.",
    techview3: "Simplified UX: Features a highly intuitive user interface designed for quick token creation and seamless trading experiences.",
    issues: "Managing real-time bonding curve updates and dynamic price adjustments within the frontend interface while ensuring responsiveness across devices.",
    solutions: "Solution: Implemented React hooks and WebSocket connections to sync live price data efficiently, reducing latency by 20%, and utilized optimized CSS frameworks to maintain UI performance on mobile and desktop.",
  },

  // HOG
  {
    id: 102,
    title: "Hand of God",
    images: [
      { url: "/images/projects/hog1.png" },
      { url: "/images/projects/hog2.png" },
    ],
    workTabs: "Blockchain",
    workContent: "Lead Blockchain Developer",
    workGithub: "https://github.com/zerox-toml/HOG-Governance",
    workRealLink: "https://www.handofgod.app/",
    projectId: 1,
    description: "Hand of God is a next-generation DeFi protocol built on the Sonic blockchain, featuring AI-driven automation and real-time on-chain analysis for dynamic supply management and ecosystem optimization.",
    stack: [
      { stack: "Sonic Blockchain" },
      { stack: "Foundry" },
      { stack: "Solidity" },
      { stack: "Next.js" },
      { stack: "TypeScript" },
      { stack: "AI Integration" }
    ],
    keya: [
      { keya: "AI-Governed Emissions" },
      { keya: "Multi-Token System" },
      { keya: "Automated Analysis" },
      { keya: "Dynamic Management" }
    ],
    responsibility: "Blockchain Developer & AI Integration Specialist",
    techview1: "AI-Driven Protocol Management: Implements an AI agent that conducts on-chain analysis every six hours to optimize emission rates, stabilize peg, and maximize protocol efficiency through real-time data analysis.",
    techview2: "Multi-Token Architecture: Features a sophisticated three-token system ($HOG as peg token, $gHOG for governance, and $bHOG for stabilization) with automated supply management and liquidity incentives.",
    techview3: "Transparent Decision System: All AI-generated decisions are publicly posted and tracked through the Scriptures, providing full transparency and detailed protocol statistics between epochs.",
    issues: "Maintaining peg stability while implementing AI-driven decision-making systems and ensuring transparent, real-time data analysis across the protocol.",
    solutions: "Developed an advanced AI agent for automated analysis and decision-making, implemented a three-token stabilization mechanism, and created a public tracking system for complete transparency of protocol operations.",
  },

  // Champion City Poker
  {
    id: 31,
    title: "Champion City Poker",
    images: [
      { url: "/images/projects/champion.png" },
      { url: "/images/projects/champion2.png" }
    ],
    workTabs: "Blockchain",
    workContent: "Blockchain Developer",
    workGithub: "https://github.com/zerox-toml",
    workRealLink: "https://staging.ccpoker.games/",
    projectId: 4,
    description: "Texas Hold'em Poker Game on Ethereum, Polygon using ElGamal Encryption System, ZKP for security on Ethereum, Polygon.",
    stack: [    
      { stack: "React.js" },
      { stack: "ElGamal Encryption" },
      { stack: "ZK Snarks" },
      { stack: "Solidity" },
      { stack: "Web3.js" },
    ],
    keya: [
      { keya: "Avatar Customization" },
      { keya: "NFT Marketplace" },
      { keya: "In-game Chat" },
      { keya: "On-chain Shuffle" },
      { keya: "Admin Panel" },
      { keya: "ETH" },
    ],
    responsibility: "Blockchain Developer & Cryptographer & Full Stack Developer",
    techview1: "BRIDGING: The Native token will be developed in the ERC-20 standard with the necessary and suggested tokenomics from the client and the platform will have the provision to swap the native token for BNB, ETH AND MATIC through bridging protocol. This will enable users of the above mentioned token holders to swap the nativetoken of this game in order to participate in the game.",
    techview2: "NFT Marketplace: NFTs can either be bought with crypto or fiat currency (through master, visa, Union Pay)",
    techview3: "Challenge Mechanism : if a particular player has doubts of the game's fairness and would like to challenge and check the fairness of cards, aspecial mode is triggered to pull what's on the chain and check. challenger pays the gas fee.",
    issues: "On-chain shuffl ing logic: Shuffl ing process should be on-chain, secure and fair.",
    solutions: "Used ZK-Snarks, asymmetric feature of Elgamal Encryption",
  },
  // Treasure Aptos NFT Game
  {
    id: 106,
    title: "Treasure Aptos Tokenized Game",
    images: [
      { url: "/images/projects/treasure1.png" },
    ],
    workTabs: "Blockchain",
    workContent: "Move Blockchain Developer",
    workGithub: "https://github.com/zerox-toml/Aptos-Clicker-Game-Contract",
    workRealLink: "https://aptostreasurehunt.vercel.app/",
    projectId: 1,
    description: "A blockchain-based treasure hunt game on Aptos that combines geolocation technology with NFT rewards. Players discover and claim digital treasures by visiting real-world locations, creating an engaging blend of physical and digital experiences.",
    stack: [
      { stack: "Aptos" },
      { stack: "Move" },
      { stack: "Next.js" },
      { stack: "P2E" },
      { stack: "TypeScript" },
    ],
    keya: [
      { keya: "Google Login" },
      { keya: "Wallet integration" },
      { keya: "Reward System" },
      { keya: "Geolocation-Based GamePlay" },
    ],
    responsibility: "Move Blockchain & Full Stack Developer",
    techview1: "The game combines blockchain technology with real-world geolocation, allowing players to discover and claim treasures by physically visiting specific locations. This feature adds an engaging layer of interaction between the digital and physical world. ",
    techview2: "Built on the Aptos blockchain, the game leverages smart contracts to ensure transparent, immutable, and secure treasure drops and claims, providing fairness and decentralized control. Scalable and Fast Transactions: By utilizing Aptos' high throughput and low latency infrastructure, the game supports large-scale user participation without compromising performance. ",
    techview3: "The platform integrates Aptos wallets for smooth token transactions, enabling players to easily claim rewards and trade their assets with low transaction fees.",
    issues: "In IPFS, files are stored in a distributed network, but they're not guaranteed to persist unless they are actively 'pinned' on one or more nodes. If no node is pinning the file, it may become unavailable over time..",
    solutions: "Used third-party pinning services like Pinata to ensure that your dApp's files remain available. This service provide persistent storage by keeping your files pinned in their IPFS nodes. Players can receive and trade treasures as tokens, making the rewards system transparent and adaptable to various gameplay dynamics.",
  },

  // Frontier Registry
  {
    id: 81,
    title: "Frontier Registry",
    images: [
      { url: "/images/projects/frontier1.png" },
      { url: "/images/projects/frontier2.png" }
    ],
    workTabs: "Blockchain",
    workContent: "Blockchain Developer",
    workGithub: "https://github.com/zerox-toml/Frontier-Registry-Contract-Stellar",
    workRealLink: "https://www.youtube.com/watch?v=lAxw35kjUzI",
    projectId: 4,
    description: "Scientific research published and peer reviewed on-chain. Option to crowdsource funding by minting your research paper/IP as a NFT. Now I am focusing on AI integration with this dapp.",
    stack: [
      { stack: "Stellar" },
      { stack: "Rust" },
      { stack: "Soroban SDK" },
      { stack: "IPFS" },
      { stack: "React" },
      { stack: "NFT" },
    ],
    keya: [
      { keya: "Register IP as NFT" },
      { keya: "Wallet Integration" },
      { keya: "RAG Chatbot" },
      { keya: "AI Search Engine" },
    ],
    responsibility: "Blockchain Developer",
    techview1: "Frontier Registry provides simple UX/UI that does not require any prior knowledge or experience of blockchain.For researchers this lightens technology capacity building.",
    techview2: "Users can certify their IP ownership with one simple click. Through automated certification their research artefact certification hash is immutably stored on the Stellar blockchain.",
    techview3: "As AI is used more frequently for Scientific (STEM) research, data authentication aids researchers in establishing defensible foundations for their data artefact.",
    issues: "In the age of AI augmented scientific research, data provenance is increasingly a potential unknown. Leaving these building block elements vulnerable to compromise during the scientific research process could render questionable the accuracy of scientific outputs.",
    solutions: "Frontier Registry carry out this issue by using AI Search Engine, provide on-line guide service using LLM RAG Chatbot.",
  },




  

  // Beowulf
  // {
  //   id: 24,
  //   title: "Beowulf",
  //   images: [
  //     { url: "/images/projects/beowulf1.png" },
  //     { url: "/images/projects/beowulf2.png" }
  //   ],
  //   workTabs: "Blockchain",
  //   workContent: "",
  //   workGithub: "",
  //   workRealLink: "https://beowulfchain.com",
  //   projectId: 1,
  //   description: "The Beowulf's architecture provides a Decentralized Communication and Data Network by utilizing computing resources globally to form a supercomputer network. Combining with blockchain for a payment system, Beowulf brings in transparency for all users and miners of the network.",
  //   stack: [
  //     { stack: "Vue3" },
  //     { stack: "Componsition API" },
  //     { stack: "Web3.js" },
  //     { stack: "TypeScript" },
  //   ],
  //   keya: [
  //     { keya: "game-changing tools" },
  //     { keya: "Wallet Integration" },
  //     { keya: "The world-class network" },
  //   ],
  //   responsibility: "Web3 Frontend Developer",
  //   techview1: "Beowulf turns computing resources worldwide into a global cloud computing network more powerful than a supercomputer to serve as communication services.",
  //   techview2: "The payment for miners and expenses paid by users/businesses are made with real fiat via the W native coin.",
  //   techview3: "The Beowulf blockchain employs Delegated Proof-of-Stake and native dual coin structure to ensure transparency for all transactions in the system.",
  //   issues: "Interactions with Web3 (e.g., smart contract calls, fetching wallet balances, etc.) are asynchronous, which can cause issues with Vue's reactivity system and make it hard to maintain smooth user experience, loading states, and error handling.",
  //   solutions: "Use Promises/Await: Ensure all Web3 calls are properly handled using JavaScript async/await or Promises. Make sure to handle data reactivity in Vue correctly. Use Vue's data() or ref()/reactive() (in Vue 3 with Composition API) to bind asynchronous Web3 data and update the UI reactively when the data changes.",
  // },


  // Sportsbox AI
  {
    id: 41,
    title: "Sportsbox AI",
    images: [
      { url: "/images/projects/sportsbox.png" },
      { url: "/images/projects/sportsbox2.png" }
    ],
    workTabs: "AI",
    workContent: "Image and Video Analysis",
    workGithub: "",
    workRealLink: "https://www.sportsbox.ai",
    projectId: 4,
    description: "Sportbox AI uses computer vision to provide real-time corrective feedback to golf players",
    stack: [
      { stack: "React" },
      { stack: "Computer Vision" },
      { stack: "CNN" },
      { stack: "Keras" },
      { stack: "YOLO" },
    ],
    keya: [
      { keya: "Check motion from different angles" },
      { keya: "VIDEO ANALYSIS TOOL" },
      { keya: "BIOMECHANICAL MEASUREMENTS" },
      { keya: "CUSTOM WATCHLISTS" },
    ],
    responsibility: "AI & Full Stack Developer",
    techview1: "Markerless 3D Motion Capture: Sportsbox AI uses patent-pending technology to transform 2D videos captured on mobile devices into highly accurate 3D motion models, eliminating the need for traditional markers or multi-camera setups. This allows athletes to analyze complex body movements in real-time.",
    techview2: "AI-Driven Feedback and Coaching: The platform provides real-time corrective feedback based on kinematic AI, enabling golfers and other athletes to refine their technique through data-driven insights and comparisons with professional standards.",
    techview3: "Multi-Angle 3D Visualization: Users can view and analyze their swings from six different angles, including face-on, down-the-line, and above, providing comprehensive insights into athletic performance.",
    issues: "Developing highly accurate markerless 3D motion capture technology from single-camera video inputs. Traditional motion capture systems rely on multi-camera setups or markers, which are expensive and cumbersome. Creating a solution that uses only a mobile phone required overcoming significant technical hurdles in computer vision, such as detecting fine-grained body movements and maintaining accuracy across diverse lighting conditions and user environments..",
    solutions: "Leveraged cutting-edge deep learning models and computer vision algorithms to track and analyze over 30 key points on the body, ensuring precise detection of joints and body segments without physical markers​.​",
  },

  // Wonder Chatbot
  {
    id: 51,
    title: "Wonder Chatbot",
    images: [
      { url: "/images/projects/wonder.png" },
    ],
    workTabs: "LLM",
    workContent: "Chatbot",
    workGithub: "",
    workRealLink: "https://wonderchat.io/",
    projectId: 4,
    description: "A chatbot which has feeling",
    stack: [
      { stack: "React" },
      { stack: "Open AI" },
      { stack: "Multi-Language and Data Source Support" },
      { stack: "Custom AI chatbot builder" },
      { stack: "No-Code Integration" },
    ],
    keya: [
      { keya: "Self-Serve Customer Support" },
      { keya: "Integrations" },
      { keya: "human-like chat" },
    ],
    responsibility: "LLM FullStack Developer",
    techview1: "Wonderchat enables users to build AI-powered chatbots quickly by training them on specific websites or uploaded files, providing responses tailored to user-provided data. The platform supports popular AI models such as GPT-4, Claude, and othersg.",
    techview2: "Wonderchat allows embedding chatbots into websites like Shopify, WordPress, Webflow, and more without requiring coding expertise, streamlining deployment for non-technical users.",
    techview3: " The platform supports multilingual capabilities and can extract knowledge from PDFs, CSVs, and other file formats to provide accurate responses in various languages.",
    issues: "Ensuring seamless real-time synchronization of chatbot responses across various e-commerce platforms and optimizing performance for high traffic volumes.",
    solutions: "Leveraged React.js with WebSocket connections to manage real-time data flow, ensuring low-latency interactions. Used dynamic rendering techniques to optimize performance across multiple platforms while maintaining consistent user experiences.",
  },


  // RAG Chatbot
  {
    id: 55,
    title: "RAGChatbot",
    images: [
      { url: "/images/projects/ragchatbot.png" },
      { url: "/images/projects/ragchatbot.png" }
    ],
    workTabs: "LLM",
    workContent: "LLM",
    workGithub: "",
    workRealLink: "https://rag-chat.oodleslab.com",
    projectId: 4,
    description: "An AI-driven virtual agent capable of conducting human-like phone conversations ranging from 1 to 30 minutes. With unlimited memory and perfect recall, Verbo handles tasks like sales calls and customer support around the clock, requiring no training, management, or motivation. ",
    stack: [
      { stack: "Langchain" },
      { stack: "RAG" },
      { stack: "GPT-4o" },
      { stack: "Fast API" },
      { stack: "Pinecone" },

    ],
    keya: [
      { keya: "PDF Upload" },
      { keya: "Post Processing Engine" },
      { keya: "Information Extractor" },
      { keya: "Data Retrival Engine" },
    ],
    responsibility: "AI & Full Stack Developer",
    techview1: "PDF parser will parse PDF document and do basic preprocessing, Metadata extractor will use LLM to extract metadata. Metadata will includes Title, Summary, Published Date, keywords, Category, writers, etc.",
    techview2: "As AI is used more frequently for Scientific (STEM) research, data authentication aids researchers in establishing defensible foundations for their data artefact.",
    techview3: "Used LangSmith which is the most popular LLM logging framework",
    issues: "Ensuring that the system provided real-time feedback was crucial for maintaining an engaging user experience.",
    solutions: "We optimized the processing pipeline, using efficient data handling and minimizing unnecessary delays between STT, processing the text via OpenAI, and the final TTS response.",
  },


 


  // Roadninja
  {
    id: 9,
    title: "Roadninja",
    images: [
      { url: "/images/projects/roadninja.png" },
      { url: "/images/projects/roadninja2.png" }
    ],
    workTabs: "Full Stack",
    workContent: "Online Ecommercial Platform",
    workGithub: "https://drive.google.com/file/d/1WIekx5Y9lOmv-iWpQvr2m8nLcnDJzRxy/view?usp=drive_link",
    workRealLink: "https://www.roadninja.co.nz/",
    projectId: 6,
    description: "An online platform that allows companies to hire drivers for commercial purposes. Find a driver of any type of vehicles & trailers, for any type of job and period of time.",
    stack: [
      { stack: "React.js" },
      { stack: "AWS" },
      { stack: "Laravel" }
    ],
    keya: [
      { keya: "Login/Register" },
      { keya: "Dashboard" },
      { keya: "Payment Gateway" },
      { keya: "Notification Service" },
      { keya: "Payment Gateway" },

    ],
    responsibility: "React & Laravel & DevOps Developer",
    techview1: "The React frontend leverages component-based architecture, enhancing reusability and scalability while handling dynamic data updates efficiently with React's state management.",
    techview2: "On the backend, Laravel provides a robust, scalable structure for RESTful APIs, handling authentication, database interactions, and business logic.",
    techview3: "Real-time data handling, possibly through WebSocket integration or AJAX requests, ensures users have up-to-date information on road conditions and navigation.",
    issues: "Ensuring a responsive and consistent user experience across various devices and browsers required extensive testing and fine-tuning.",
    solutions: "Built with responsive design principles using CSS media queries and styled components in React. Conducted cross-browser testing to detect and fix compatibility issues, ensuring seamless performance across devices.",

  },

  // Stronghold
  // {
  //   id: 5,
  //   title: "Stronghold",
  //   images: [
  //     { url: "/images/projects/stronghold.png" },
  //     { url: "/images/projects/stronghold2.png" }
  //   ],
  //   workTabs: "Blockchain",
  //   workContent: "Open-source projects",
  //   workGithub: "",
  //   workRealLink: "https://stronghold.co/shx",
  //   projectId: 2,
  //   description: "Stronghold's expanding payments ecosystem uses the SHx token as a building block with real-world purpose. Integrate online and in-store payments using Stronghold Pay's APIs and libraries.",
  //   stack: [
  //     { stack: "Solidity" },
  //     { stack: "Ethereum" },
  //     { stack: "Next.js" },
  //     { stack: "Web3.js" },
  //   ],
  //   keya: [
  //     { keya: "" },
  //     { keya: "Wallet Integration" },
  //     { keya: "RAG Chatbot" },
  //     { keya: "AI Search Engine" },
  //   ],
  //   responsibility: "Web3 Frontend Developer",
  //   techview1: "Handled the development of smart contracts to manage transactions and asset storage, ensuring transparency and immutability, and created a Web3-integrated frontend for user interaction with decentralized features. The platform likely utilizes Ethereum or similar EVM-compatible blockchains, and wallet integrations (e.g., MetaMask) to enable smooth user onboarding and transaction handling.",
  //   techview2: "The smart contracts were designed to maintain security and enforce contract logic, ensuring asset transfers and data storage were both secure and reliable on-chain.",
  //   techview3: "On the frontend, implemented Web3.js or Ethers.js to connect the decentralized app (dApp) with the blockchain, handling real-time updates, user authentication, and transaction processing for a seamless decentralized experience.",
  //   issues: "Frontend and Smart Contract Synchronization:Delays in transaction confirmation or network congestion could lead to frontend desynchronization, causing a lag in displayed information.",
  //   solutions: "Integrated a real-time polling mechanism to refresh transaction status, and used event listeners for smart contracts to update the frontend upon state changes, ensuring that users received accurate, up-to-date information without noticeable lag.",
  // },

 

  // TrueRev
  


   // Emarque
  {
    id: 111,
    title: "Emarque",
    images: [
      { url: "/images/projects/marque.png" },
      { url: "/images/projects/realestate.png" }
    ],
    workTabs: "Ecommerce",
    workContent: "leading Ecommerce Platform",
    workGithub: "",
    workRealLink: "https://emarque.co/",
    projectId: 4,
    description: "custom PC retailer based in Malaysia, offering high-performance desktops and workstations tailored for gaming and professional use.",
    stack: [
      { stack: "Shopify" },
      { stack: "Google Analytics" },
      { stack: "Facebook Chat Plugin" },
      { stack: "YMQ Product Options" },
    ],
    keya: [
      { keya: "Custom PC Builds" },
      { keya: "Payment Gateway" },
      { keya: "AI-Driven Customer Support" },
      { keya: "Advanced Marketing Integration" },
    ],
    responsibility: "Full Stack Developer",
    techview1: "Offers fully customizable PCs with a variety of components tailored to gaming and professional applications.",
    techview2: "Provides a user-friendly order tracking system with real-time updates and opportunities for repeat sales through AfterShip. ",
    techview3: "Leverages tools like Facebook Pixel and TikTok Pixel for targeted advertising and retargeting​.",
    issues: "Managing the complexities of offering a wide range of customizable product options within Shopify's standard limitations.",
    solutions: "Emarque overcomes this by integrating YMQ Product Options, which allows the addition of unlimited product variants and customization options, enhancing the user experience without overcomplicating backend operations.",
  },

  // Carnival Fair
  {
    id: 112,
    title: "Carnival Fair",
    images: [
      { url: "/images/projects/carnival.png" },
      { url: "/images/projects/realestate.png" }
    ],
    workTabs: "Ecommerce",
    workContent: "E-commerce Platform",
    workGithub: "",
    workRealLink: "https://www.thecarnivalfair.com.sg/",
    projectId: 4,
    description: "Leading event planning and carnival rental platform in Singapore, specializing in corporate events and private parties.",
    stack: [
      { stack: "Shopify" },
      { stack: "Google Analytics" },
      { stack: "Webflow" },
      { stack: "YMQ Product Options" },
    ],
    keya: [
      { keya: "Event Management" },
      { keya: "Inventory Control" },
      { keya: "Payment Processing" },
      { keya: "Analytics Integration" },
    ],
    responsibility: "Full Stack Developer",
    techview1: "Developed scalable e-commerce platform with 300+ product options and real-time inventory management.",
    techview2: "Implemented secure payment gateway and automated booking system for seamless transactions.",
    techview3: "Integrated analytics and marketing tools for enhanced customer engagement and tracking.",
    issues: "Managing high-volume inventory and booking systems during peak seasons.",
    solutions: "Implemented automated scheduling and inventory management systems with real-time synchronization.",
  },

 

   // Medical Reservation System
  {
    id: 37,
    title: "Medical Reservation System",
    images: [
      { url: "/images/projects/medical-system.png" },
      { url: "/images/projects/medical-system2.png" }
    ],
    workTabs: "Full Stack",
    workContent: "Booking System",
    workGithub: "https://github.com/zerox-toml/medical-reservation-app",
    workRealLink: "https://medical-reservation-system.vercel.app/",
    projectId: 4,
    description: "Online Reservation Medical System",
    stack: [
      { stack: "NextJS" },
      { stack: "Typescript" },
      { stack: "Restful API" },
      { stack: "MySQL" },
      { stack: "TailwindCSS" },
    ],
    keya: [
      { keya: "Search Features" },
      { keya: "Payment Gateway" },
      { keya: "" },
    ],
    responsibility: "Full Stack Developer",
    techview1: "Developed responsive UI with NextJS, TypeScript, and TailwindCSS for optimal user experience.",
    techview2: "Implemented secure payment processing for seamless transactions.",
    techview3: "Developed RESTful API integrations for efficient data flow.",
    issues: "Global state management complexity with Redux Toolkit can impact performance and debugging.",
    solutions: "Implemented modular state architecture with Redux slices, selectors, and DevTools for optimized performance and maintainability.",

  },



  

]


export const resumeExp: resume[] = [
  {
    id: 1,
    title: "Blockchain & Full Stack Developer",
    subtitle: "Blockchain",
    desc: "- Worked on Substrate-based Blockchain. \n - Developed EarnLumens on Stellar.\n - Contributed blockchain infrastructure-Syntor protocol. \n - Built Python SDK & Indexer on Radiant.",
    badge: "2024 - 2025",
    experience: false,
    logo: "",
    link: "https://www.syntor.ai/",
  },
  {
    id: 9,
    title: "Blockchain Developer",
    subtitle: "Opsec",
    desc: "- Developed AI & Decentralized Cloud Computing Platform. \n - Designed StableCoin on Sonic. \n - Built perp-swap using Chainlink Oracles.",
    badge: "2023 - 2024",
    experience: false,
    logo: "",
    link: "https://www.opsec.computer/",
  },

  {
    id: 10,
    title: "Smart Contract Developer",
    subtitle: "G.U.Technologies",
    desc: "- Developed a custom NFT launch platform on Solana using pumpfun architecture. \n - Frontier Registry, Treasure Aptos Game. \n - Developed cross-platform custodial wallets for desktop and mobile using svelte and react native. \n - Designed and implemented a cross-chain asset bridge. ...",
    badge: "2022 - 2023",
    experience: false,
    logo: "",
    link: "https://www.gu-tech.com/ja/about-us",
  },

  {
    id: 2,
    title: "Web3 Developer",
    subtitle: "Osiz Technologies",
    desc: "- Secured on-chain poker game on Ethereum & BNB. \n - Built responsive, real-time dashboards. \n - Developed scalable backend services web3 platforms using node, django.",
    badge: "2020 - 2022",
    logo: "",
    experience: false,
    link: "https://www.osiztechnologies.com/",
  },
  {
    id: 3,
    title: "Software Developer",
    subtitle: "Roadninja",
    desc: "- Developed Roadninja commercial platform web & mobile versions.",
    badge: "2019 - 2020",
    logo: "",
    experience: false,
    link: "https://www.roadninja.co.nz/",
  },

  {
    id: 5,
    title: "Frontend Developer",
    subtitle: "Third Eye",
    desc: "- Built cross-platform mobile app using Flutter. \n - Developed backend API with NodeJS.",
    badge: "2018 - 2019",
    logo: "",
    experience: false,
    link: " https://thirdeyedata.ai/",
  },






]