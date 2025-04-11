import { AiOutlineGithub } from "react-icons/ai"
import {
  FaDiscord,
  FaEye,
  FaRegListAlt,
  FaRegUser,
  FaTelegram,
  FaSkype,
  FaLinkedin,
  FaTwitter,
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
    Icon: FaTwitter,
    label: "Twitter",
    logoColor: "#171515",
    mediaUrl: "https://x.com/MentholMen47387",
    info: "Follow my X.",
  },
  {
    id: 4,
    Icon: SiFreelancer,
    label: "Freelancer",
    logoColor: "#5865f2",
    mediaUrl: "https://www.freelancer.com/u/spectrecoder",
    info: "Let's discuss professional vision in Freelancer.",
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
    Icon: FaTwitter,
    label: "Twitter",
    logoColor: "#5865f2",
    mediaUrl: "https://x.com/MentholMen47387",
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
  {
    id: 4,
    Icon: SiFreelancer,
    label: "Freelancer",
    logoColor: "#5865f2",
    mediaUrl: "https://www.freelancer.com/u/spectrecoder",
    info: "Let's discuss professional vision in Freelancer.",
  }

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
    title: "stack",
    info: "Solidity and Rust",
  },
  {
    title: "projects",
    info: "15+",
  },
  {
    title: "clients",
    info: "5+",
  },
]


export const backslideimages: backSlideImages[] = [
  {
    id: 1,
    imgLocation: "/images/slide/back1.png"
  },
  {
    id: 2,
    imgLocation: "/images/slide/back2.png"
  },
  {
    id: 2,
    imgLocation: "/images/slide/back4.png"
  },
  {
    id: 3,
    imgLocation: "/images/slide/back3.png"
  },
  {
    id: 4,
    imgLocation: "/images/slide/white.jpg"
  },
]

export const workExperience: WorkExperience[] = [
  {
    id: 31,
    title: "Champion City Poker",
    images: [
      { url: "/images/projects/champion.png" },
      { url: "/images/projects/champion2.png" }
    ],
    workTabs: "Blockchain",
    workContent: "Texas Hold'em Poker Game",
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
    techview3: "Challenge Mechanism : if a particular player has doubts of the game’s fairness and would like to “challenge” and check the fairness of cards, aspecial mode is triggered to pull what’s on the chain and check. challenger pays the gas fee.",
    issues: "On-chain shuffl ing logic: Shuffl ing process should be on-chain, secure and fair.",
    solutions: "Used ZK-Snarks, asymmetric feature of Elgamal Encryption",
  },
  {
    id: 7,
    title: "XANA ",
    images: [
      { url: "/images/projects/xana1.png" },
      { url: "/images/projects/xana2.png" }
    ],
    workTabs: "Blockchain",
    workContent: "NFT Game",
    workGithub: "",
    workRealLink: "https://xana.net/",
    projectId: 4,
    description: "Next-Gen Tech x Entertainment Gathering in the Metaverse.",
    stack: [
      { stack: "React.js" },
      { stack: "XANA Chain" },
      { stack: "Ether.js" },
      { stack: "Socket.io" },
      { stack: "WordPress" },
      { stack: "PHP" },
      { stack: "Node.js" },
    ],
    keya: [
      { keya: "Avatar Customization" },
      { keya: "NFT Marketplace" },
      { keya: "In-game Chat" },
      { keya: "Launchpad" },
    ],
    responsibility: "Blockchain Developer & Cryptographer & Full Stack Developer",
    techview1: "Custom Blockchain Integration: XANA operates on an Ethereum sidechain, enabling high-speed, low-cost transactions tailored for metaverse applications, including land trading, NFT management, and GameFi features like trading card battles.",
    techview2: "Interactive User-Generated Worlds: The platform supports user-generated virtual worlds, enabling customization through tools like XANA Builder, with features such as NFT integration and 3D assets​.",
    techview3: "Challenge Mechanism : if a particular player has doubts of the game’s fairness and would like to “challenge” and check the fairness of cards, aspecial mode is triggered to pull what’s on the chain and check. challenger pays the gas fee.",
    issues: "Challenge: Ensuring seamless rendering and interaction of high-quality 3D assets across different devices, including mobile and VR, while maintaining performance and low latency.",
    solutions: "Leveraged frameworks like React Three.js and optimized rendering pipelines to reduce load times by 30%. Implemented real-time asset compression and caching strategies, ensuring consistent performance on low-bandwidth networks​.",
  },
  // {
  //   id: 107,
  //   title: "BlueMove NFT Marketplace",
  //   images: [
  //     { url: "/images/projects/sui.png" },
  //   ],
  //   workTabs: "Blockchain",
  //   workContent: "NFT Marketplace",
  //   workGithub: "",
  //   workRealLink: "https://sui.bluemove.net/",
  //   projectId: 4,
  //   description: "BlueMove is an NFT marketplace built on the Sui blockchain, enabling users to buy, sell, and mint NFTs with low fees and high throughput..",
  //   stack: [
  //     { stack: "Move" },
  //     { stack: "SUI" },
  //     { stack: "Aptos" },
  //     { stack: "React" },
  //     { stack: "" },
  //     { stack: "Node.js" },
  //   ],
  //   keya: [
  //     { keya: "Avatar Customization" },
  //     { keya: "NFT Marketplace" },
  //     { keya: "In-game Chat" },
  //     { keya: "Launchpad" },
  //   ],
  //   responsibility: "Blockchain Developer & Cryptographer & Full Stack Developer",
  //   techview1: "BlueMove leverages the high-performance Sui blockchain, which uses a DAG-based consensus mechanism to provide fast transaction finality and scalability. This ensures a seamless trading experience even during high network activity.",
  //   techview2: "By utilizing Sui’s Move language, BlueMove achieves secure and efficient execution of its NFT-related smart contracts, including those for minting, transfers, and auctions. Move's resource-centric model enhances security by preventing common vulnerabilities like reentrancy attacks.",
  //   techview3: "BlueMove is designed to support multi-chain interactions, aiming to integrate other blockchains over time to expand its reach and enable interoperability for NFT creators and collectors.",
  //   issues: "Limited Liquidity for Newly Minted NFTs: Newly launched NFTs on emerging platforms like Sui often struggle with liquidity, reducing their appeal to traders and collectors.",
  //   solutions: "Introduce automated liquidity mechanisms, such as NFT liquidity pools, where users can stake tokens or NFTs to create instant buy/sell opportunities. Additionally, partner with popular NFT projects and integrate incentive programs, such as rewards for staking or participating in initial NFT offerings (INOs), to attract liquidity providers and boost market activity.",
  // },
  {
    id: 81,
    title: "Frontier Registry",
    images: [
      { url: "/images/projects/frontier1.png" },
      { url: "/images/projects/frontier2.png" }
    ],
    workTabs: "Blockchain",
    workContent: "IP NFT Marketplace",
    workGithub: "https://github.com/FrontierRegistry",
    workRealLink: "https://www.youtube.com/watch?v=lAxw35kjUzI",
    projectId: 4,
    description: "Scientific research published and peer reviewed on-chain. Option to crowdsource funding by minting your research paper/IP as a NFT. Now I am focusing on AI integration with this dapp.",
    stack: [
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
    responsibility: "Blockchain & AI & Full Stack Developer",
    techview1: "Frontier Registry provides simple UX/UI that does not require any prior knowledge or experience of blockchain.For researchers this lightens technology capacity building.",
    techview2: "Users can certify their IP ownership with one simple click. Through automated certification their research artefact certification hash is immutably stored on the Stellar blockchain.",
    techview3: "As AI is used more frequently for Scientific (STEM) research, data authentication aids researchers in establishing defensible foundations for their data artefact.",
    issues: "In the age of AI augmented scientific research, data provenance is increasingly a potential unknown. Leaving these building block elements vulnerable to compromise during the scientific research process could render questionable the accuracy of scientific outputs.",
    solutions: "Frontier Registry carry out this issue by using AI Search Engine, provide on-line guide service using LLM RAG Chatbot.",
  },

  {
    id: 107,
    title: "Dex-Tool",
    images: [
      { url: "/images/projects/dex-tool.png" },
      { url: "/images/projects/dex-tool2.png" }
    ],
    workTabs: "Blockchain",
    workContent: "DEX Platform",
    workGithub: "https://github.com/dextools-io/web3.js",
    workRealLink: "https://info.dextools.io/",
    projectId: 1,
    description: "I updated the project functionalities and UI",
    stack: [
      { stack: "Web3" },
      { stack: "Ethereum" },
      { stack: "Javascript API" },
      { stack: "Vue.js, Vuetify" },
      { stack: "TypeScript" },
    ],
    keya: [
      { keya: "Register IP as NFT" },
      { keya: "Wallet Integration" },
      { keya: "RAG Chatbot" },
      { keya: "AI Search Engine" },
    ],
    responsibility: "Blockchain & Full Stack Developer",
    techview1: "Comprehensive DeFi Analytics: DEXTools offers a robust platform for tracking live token data, market trends, and trading activity across over 100 blockchains, providing traders with tools like real-time transaction monitoring, order books, and liquidity metrics.",
    techview2: "Advanced Charting and Indicators: Integrates TradingView-powered charts with technical analysis tools such as RSI, MACD, and Bollinger Bands to help users identify trends and predict market movements.",
    techview3: "Liquidity and Pool Monitoring: Features like Pool Explorer enable users to evaluate token liquidity, locked amounts, and market depth for secure and informed trading. Customizable Alerts and Bots: Includes tools such as price alerts and buy/sell bots for automated trading and real-time notifications, ensuring users can quickly react to market fluctuations",
    issues: "Challenge: Ensuring smooth real-time data updates for multiple trading pairs and charts across chains without overloading the frontend.",
    solutions: "Leveraged React with WebSocket connections for efficient real-time updates and implemented dynamic component rendering to reduce unnecessary re-renders. Optimized state management with tools like Redux Toolkit, ensuring smooth user experience for high-traffic scenarios.",
  },
  {
    id: 101,
    title: "Ape-lol Pumpfun",
    images: [
      { url: "/images/projects/apelol.png" },
    ],
    workTabs: "Blockchain",
    workContent: "Blockchain",
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
    responsibility: "Blockchain & Full Stack Developer",
    techview1: "Token Creation Platform: APE.LOL allows users to launch memecoins on the Solana blockchain for as little as $1, targeting fast and fair token launches without presales.",
    techview2: "Bonding Curve Mechanics: Uses bonding curves for token pricing, where liquidity is automatically deployed to Raydium at a $42,000 market cap, ensuring a fair and automated liquidity process.",
    techview3: "Simplified UX: Features a highly intuitive user interface designed for quick token creation and seamless trading experiences.",
    issues: "Managing real-time bonding curve updates and dynamic price adjustments within the frontend interface while ensuring responsiveness across devices.",
    solutions: "Solution: Implemented React hooks and WebSocket connections to sync live price data efficiently, reducing latency by 20%, and utilized optimized CSS frameworks to maintain UI performance on mobile and desktop.",
  },


  {
    id: 77,
    title: "Web hosting Dapp",
    images: [
      { url: "/images/projects/ens1.png" },
      { url: "/images/projects/ens.png" }
    ],
    workTabs: "Blockchain",
    workContent: "Hackathon",
    workGithub: "",
    workRealLink: "https://drive.google.com/file/d/18GVcPtOFhg2BfBDDr0tVfeinETMGgq7f/view?usp=drive_link",
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
      { keya: "Decentralized Name Service" },
    ],
    responsibility: "Web3 & Full Stack Developer",
    techview1: "The DApp offers decentralized CI/CD services, enabling users to log in with GitHub credentials. ",
    techview2: "After building the project, the resulting output is hosted on IPFS for secure, decentralized storage. ",
    techview3: "This IPFS-hosted project is then linked to the user’s decentralized naming service (such as ENS).",
    issues: "In IPFS, files are stored in a distributed network, but they're not guaranteed to persist unless they are actively 'pinned' on one or more nodes. If no node is pinning the file, it may become unavailable over time..",
    solutions: "Used third-party pinning services like Pinata to ensure that your dApp's files remain available. This service provide persistent storage by keeping your files pinned in their IPFS nodes",
  },
  {
    id: 24,
    title: "Beowulf",
    images: [
      { url: "/images/projects/beowulf1.png" },
      { url: "/images/projects/beowulf2.png" }
    ],
    workTabs: "Blockchain",
    workContent: "",
    workGithub: "",
    workRealLink: "https://beowulfchain.com",
    projectId: 1,
    description: "The Beowulf's architecture provides a Decentralized Communication and Data Network by utilizing computing resources globally to form a supercomputer network. Combining with blockchain for a payment system, Beowulf brings in transparency for all users and miners of the network.",
    stack: [
      { stack: "Vue3" },
      { stack: "Componsition API" },
      { stack: "Web3.js" },
      { stack: "TypeScript" },
    ],
    keya: [
      { keya: "game-changing tools" },
      { keya: "Wallet Integration" },
      { keya: "The world-class network" },
    ],
    responsibility: "Web3 Frontend Developer",
    techview1: "Beowulf turns computing resources worldwide into a global cloud computing network more powerful than a supercomputer to serve as communication services.",
    techview2: "The payment for miners and expenses paid by users/businesses are made with real fiat via the W native coin.",
    techview3: "The Beowulf blockchain employs Delegated Proof-of-Stake and native dual coin structure to ensure transparency for all transactions in the system.",
    issues: "Interactions with Web3 (e.g., smart contract calls, fetching wallet balances, etc.) are asynchronous, which can cause issues with Vue’s reactivity system and make it hard to maintain smooth user experience, loading states, and error handling.",
    solutions: "Use Promises/Await: Ensure all Web3 calls are properly handled using JavaScript async/await or Promises. Make sure to handle data reactivity in Vue correctly. Use Vue's data() or ref()/reactive() (in Vue 3 with Composition API) to bind asynchronous Web3 data and update the UI reactively when the data changes.",
  },

  // {
  //   id: 43,
  //   title: "SearchKwik",
  //   images: [
  //     {url:"/images/projects/searchkwik.png"},
  //     {url:"/images/projects/searchkwik.png"}
  //   ],
  //   workTabs: "AI",
  //   workContent: "Reinforcement Learning",
  //   workGithub: "", 
  //   workRealLink: "https://shoorah.io/",
  //   projectId: 4,
  //   description:"Shoorah is a dynamic wellbeing app dedicated to supporting mental health and nurturing overall wellbeing. This platform offers a wide range of wellness tools designed to help users take care of their mental and emotional health. This immersive experience is further enhanced by an innovative chatbot with emotional intelligence, fostering a deeper level of user engagement and interaction. Shoorah is a Shuru therapy tool, which lifts your mood, improves your sleep, feels more calm, boosts your energy, manages anxiety, reduces stress and creates more joyful moments in your life by collecting daily routines from a set of activities.",
  //   stack:[
  //     {stack: "Open AI"},
  //     {stack: "Pinecone"},
  //     {stack: "Python"},   
  //     {stack:"MongoDB"},
  //     {stack: "React"},
  //     {stack:"Node"}, 
  //   ],
  //   keya:[
  //     {keya: "Register IP as NFT"},
  //     {keya: "Wallet Integration"},
  //     {keya: "RAG Chatbot"},
  //     {keya: "AI Search Engine"},      
  //   ],
  //   responsibility:"AI & Full Stack Developer",
  //   techview1:"Frontier Registry provides simple UX/UI that does not require any prior knowledge or experience of blockchain.For researchers this lightens technology capacity building.",
  //   techview2:"Users can certify their IP ownership with one simple click. Through automated certification their research artefact certification hash is immutably stored on the Stellar blockchain.",
  //   techview3:"As AI is used more frequently for Scientific (STEM) research, data authentication aids researchers in establishing defensible foundations for their data artefact.",
  //   issues:"In the age of AI augmented scientific research, data provenance is increasingly a potential unknown. Leaving these building block elements vulnerable to compromise during the scientific research process could render questionable the accuracy of scientific outputs.",
  //   solutions:"Frontier Registry carry out this issue by using AI Search Engine, provide on-line guide service using LLM RAG Chatbot.",
  // },
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
  // {
  //   id: 52,
  //   title: "eSynapse",
  //   images: [
  //     {url:"/images/projects/synapse.png"},
  //     {url:"/images/projects/synapse2.png"}
  //   ],
  //   workTabs: "AI",
  //   workContent: "Document Analysis",
  //   workGithub: "", 
  //   workRealLink: "https://www.esynapse.ai",
  //   projectId: 4,
  //   description:"A revolutionary tool that uses advanced conversational and generative AI technology to simplify data handling. It transforms complex data interactions into simple conversations, making strategic decision-making fast and straightforward by providing quick, actionable insights without the need for complicated processes or BI/Analytical tools.",
  //   stack:[
  //     {stack: "React"},
  //     {stack: "Open AI"},
  //     {stack: "Python"},   
  //     {stack: "Generative AI"},
  //     {stack: "Advanced conversational technology"}, 
  //   ],

  //   responsibility:"Blockchain & AI & Full Stack Developer",
  //   techview1:"Frontier Registry provides simple UX/UI that does not require any prior knowledge or experience of blockchain.For researchers this lightens technology capacity building.",
  //   techview2:"Users can certify their IP ownership with one simple click. Through automated certification their research artefact certification hash is immutably stored on the Stellar blockchain.",
  //   techview3:"As AI is used more frequently for Scientific (STEM) research, data authentication aids researchers in establishing defensible foundations for their data artefact.",
  //   issues:"In the age of AI augmented scientific research, data provenance is increasingly a potential unknown. Leaving these building block elements vulnerable to compromise during the scientific research process could render questionable the accuracy of scientific outputs.",
  //   solutions:"Frontier Registry carry out this issue by using AI Search Engine, provide on-line guide service using LLM RAG Chatbot.",
  // },
  // {
  //   id: 53,
  //   title: "Hurone",
  //   images: [
  //     {url:"/images/projects/hurone.png"},
  //     {url:"/images/projects/hurone2.png"}
  //   ],
  //   workTabs: "AI",
  //   workContent: "Medical AI infrastructure",
  //   workGithub: "", 
  //   workRealLink: "https://hurone.ai/",
  //   projectId: 4,
  //   description:"we built the AI infrastructure behind Hurone.ai, which helps oncologists diagnose and treat cancer patients in need of personalized healthcare. This startup just raised $3 million based on the MVP we built. Like Hurone.ai, we can help you create sophisticated AI-driven object detection models tailored to your specific needs.",
  //   stack:[
  //     {stack: "React"},
  //     {stack: "Open AI"},
  //     {stack: "Python"},   
  //     {stack: "Langchain"},
  //     {stack: "LLM"}, 
  //   ],
  //   keya:[
  //     {keya: "Register IP as NFT"},
  //     {keya: "Wallet Integration"},
  //     {keya: "RAG Chatbot"},
  //     {keya: "AI Search Engine"},      
  //   ],
  //   responsibility:"Blockchain & AI & Full Stack Developer",
  //   techview1:"Frontier Registry provides simple UX/UI that does not require any prior knowledge or experience of blockchain.For researchers this lightens technology capacity building.",
  //   techview2:"Users can certify their IP ownership with one simple click. Through automated certification their research artefact certification hash is immutably stored on the Stellar blockchain.",
  //   techview3:"As AI is used more frequently for Scientific (STEM) research, data authentication aids researchers in establishing defensible foundations for their data artefact.",
  //   issues:"In the age of AI augmented scientific research, data provenance is increasingly a potential unknown. Leaving these building block elements vulnerable to compromise during the scientific research process could render questionable the accuracy of scientific outputs.",
  //   solutions:"Frontier Registry carry out this issue by using AI Search Engine, provide on-line guide service using LLM RAG Chatbot.",
  // },
  // {
  //   id: 54,
  //   title: "VerboBot",
  //   images: [
  //     {url:"/images/projects/verbo.png"},
  //     {url:"/images/projects/verbo2.png"}
  //   ],
  //   workTabs: "AI",
  //   workContent: "Chatbot",
  //   workGithub: "", 
  //   workRealLink: "https://verbo.bot",
  //   projectId: 4,
  //   description:"An AI-driven virtual agent capable of conducting human-like phone conversations ranging from 1 to 30 minutes. With unlimited memory and perfect recall, Verbo handles tasks like sales calls and customer support around the clock, requiring no training, management, or motivation. ",
  //   stack:[
  //     {stack: "React"},
  //     {stack: "Open AI"},
  //     {stack: "Python"},   
  //     {stack:"Generative AI"},
  //     {stack:"advanced conversational technology"}, 
  //   ],
  //   keya:[
  //     {keya: "Register IP as NFT"},
  //     {keya: "Wallet Integration"},
  //     {keya: "RAG Chatbot"},
  //     {keya: "AI Search Engine"},      
  //   ],
  //   responsibility:"Blockchain & AI & Full Stack Developer",
  //   techview1:"Frontier Registry provides simple UX/UI that does not require any prior knowledge or experience of blockchain.For researchers this lightens technology capacity building.",
  //   techview2:"Users can certify their IP ownership with one simple click. Through automated certification their research artefact certification hash is immutably stored on the Stellar blockchain.",
  //   techview3:"As AI is used more frequently for Scientific (STEM) research, data authentication aids researchers in establishing defensible foundations for their data artefact.",
  //   issues:"In the age of AI augmented scientific research, data provenance is increasingly a potential unknown. Leaving these building block elements vulnerable to compromise during the scientific research process could render questionable the accuracy of scientific outputs.",
  //   solutions:"Frontier Registry carry out this issue by using AI Search Engine, provide on-line guide service using LLM RAG Chatbot.",
  // },
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


  {
    id: 2,
    title: "Puffer Staking Platform",
    images: [
      { url: "/images/projects/buffer1.png" },
      { url: "/images/projects/buffer2.png" }
    ],
    workTabs: "Blockchain",
    workContent: "Open-Source Project",
    workGithub: "https://github.com/PufferFinance",
    workRealLink: "https://www.puffer.fi/",
    projectId: 4,
    description: "Stake any amount of ETH to receive pufETH, Puffer's native Liquid Restaking Token (nLRT).",
    stack: [
      { stack: "Web3.js" },
      { stack: "Next.js" },
      { stack: "Node.js" },
    ],
    keya: [
      { keya: "Secure-Signer" },
      { keya: "RAVe" },
      { keya: "Puffer" },
    ],
    responsibility: "Web3 Frontend Developer",
    techview1: "Secure-Signer leverages Trusted Execution Environments (TEEs) and is currently implemented as an Intel SGX enclave. To mitigate points of failure, Puffer is committed to manufacturer diversity with plans to implement Secure-Signer on AMD's SEV TEE and new hardware as they come to market.",
    techview2: "RAVe is the second component of Puffer's Ethereum Foundation grant and stands for Remote Attestation Verification. This essential set of smart contracts allows enclaves to interface with blockchains securely and helps let the Puffer protocol be permissionless. RAVe enables entirely new use cases that weren't previously possible that we are excited to explore at Puffer.",
    techview3: "Native restaking allows validators to better utilize their ETH capital and hardware to supplement their PoS rewards.",
    issues: "Interact with Puffer Smart Contract.",
    solutions: "Used Puffer-SDK to seamlessly interact with puffer smart contracts",
  },
  // {
  //   id: 3,
  //   title: "UXD Protocol",
  //   images: [
  //     {url:"/images/projects/uxd-protocol.png"},
  //     {url:"/images/projects/uxd-protocol2.png"}
  //   ],
  //   workTabs: "Solana",
  //   workContent: "Defi Platform",
  //   workGithub: "https://github.com/spectrecoder/UXD-protocol",
  //   workRealLink: "https://uxd.fi/",
  //   projectId: 4,
  //   description:"UXD is backed by various low volatility strategies that generate yield. The function of the protocol is to manage the asset and liability side to ensure that there is no mismatch. Examples of low volatility strategies are delta-neutral position, overcollateralized crypto backed loans, liquid and semi-liquid lending, etc.",
  //   stack:[
  //     {stack: "Web3.js"},
  //     {stack: "React"},
  //     {stack: "Anchor"},
  //     {stack: "Rust"},
  //     {stack: "Typescript"},
  //   ],
  //   keya:[
  //     {keya: "Register IP as NFT"},
  //     {keya: "Wallet Integration"},
  //     {keya: "RAG Chatbot"},
  //     {keya: "AI Search Engine"},      
  //   ],
  //   responsibility:"Blockchain & AI & Full Stack Developer",
  //   techview1:"Frontier Registry provides simple UX/UI that does not require any prior knowledge or experience of blockchain.For researchers this lightens technology capacity building.",
  //   techview2:"Users can certify their IP ownership with one simple click. Through automated certification their research artefact certification hash is immutably stored on the Stellar blockchain.",
  //   techview3:"As AI is used more frequently for Scientific (STEM) research, data authentication aids researchers in establishing defensible foundations for their data artefact.",
  //   issues:"In the age of AI augmented scientific research, data provenance is increasingly a potential unknown. Leaving these building block elements vulnerable to compromise during the scientific research process could render questionable the accuracy of scientific outputs.",
  //   solutions:"Frontier Registry carry out this issue by using AI Search Engine, provide on-line guide service using LLM RAG Chatbot.",
  // },

  // {
  //   id: 4,
  //   title: "Gari Network",
  //   images: [
  //     {url:"/images/projects/gari.png"},
  //     {url:"/images/projects/gari2.png"}
  //   ],
  //   workTabs: "APP Development",
  //   workContent: "",
  //   workGithub: "https://github.com/spectrecoder/gari-wallet",
  //   workRealLink: "https://gari.network/",
  //   projectId: 4,
  //   description:"WORLD'S LARGEST WEB3 AUDIO AND VIDEO LIVE STREAMING PLATFORM",
  //   stack:[
  //     {stack: "Kotlin"},
  //     {stack: "React"},
  //     {stack: "Open Graph"},
  //     {stack: "HSTS"},
  //   ],
  //   keya:[
  //     {keya: "Register IP as NFT"},
  //     {keya: "Wallet Integration"},
  //     {keya: "RAG Chatbot"},
  //     {keya: "AI Search Engine"},      
  //   ],
  //   responsibility:"Blockchain & AI & Full Stack Developer",
  //   techview1:"Frontier Registry provides simple UX/UI that does not require any prior knowledge or experience of blockchain.For researchers this lightens technology capacity building.",
  //   techview2:"Users can certify their IP ownership with one simple click. Through automated certification their research artefact certification hash is immutably stored on the Stellar blockchain.",
  //   techview3:"As AI is used more frequently for Scientific (STEM) research, data authentication aids researchers in establishing defensible foundations for their data artefact.",
  //   issues:"In the age of AI augmented scientific research, data provenance is increasingly a potential unknown. Leaving these building block elements vulnerable to compromise during the scientific research process could render questionable the accuracy of scientific outputs.",
  //   solutions:"Frontier Registry carry out this issue by using AI Search Engine, provide on-line guide service using LLM RAG Chatbot.",
  // },
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
    techview1: "The React frontend leverages component-based architecture, enhancing reusability and scalability while handling dynamic data updates efficiently with React’s state management.",
    techview2: "On the backend, Laravel provides a robust, scalable structure for RESTful APIs, handling authentication, database interactions, and business logic.",
    techview3: "Real-time data handling, possibly through WebSocket integration or AJAX requests, ensures users have up-to-date information on road conditions and navigation.",
    issues: "Ensuring a responsive and consistent user experience across various devices and browsers required extensive testing and fine-tuning.",
    solutions: "Built with responsive design principles using CSS media queries and styled components in React. Conducted cross-browser testing to detect and fix compatibility issues, ensuring seamless performance across devices.",

  },
  {
    id: 5,
    title: "Stronghold",
    images: [
      { url: "/images/projects/stronghold.png" },
      { url: "/images/projects/stronghold2.png" }
    ],
    workTabs: "Blockchain",
    workContent: "Open-source projects",
    workGithub: "",
    workRealLink: "https://stronghold.co/shx",
    projectId: 2,
    description: "Stronghold’s expanding payments ecosystem uses the SHx token as a building block with real-world purpose. Integrate online and in-store payments using Stronghold Pay's APIs and libraries.",
    stack: [
      { stack: "Solidity" },
      { stack: "Ethereum" },
      { stack: "Next.js" },
      { stack: "Web3.js" },
    ],
    keya: [
      { keya: "" },
      { keya: "Wallet Integration" },
      { keya: "RAG Chatbot" },
      { keya: "AI Search Engine" },
    ],
    responsibility: "Web3 Frontend Developer",
    techview1: "Handled the development of smart contracts to manage transactions and asset storage, ensuring transparency and immutability, and created a Web3-integrated frontend for user interaction with decentralized features. The platform likely utilizes Ethereum or similar EVM-compatible blockchains, and wallet integrations (e.g., MetaMask) to enable smooth user onboarding and transaction handling.",
    techview2: "The smart contracts were designed to maintain security and enforce contract logic, ensuring asset transfers and data storage were both secure and reliable on-chain.",
    techview3: "On the frontend, implemented Web3.js or Ethers.js to connect the decentralized app (dApp) with the blockchain, handling real-time updates, user authentication, and transaction processing for a seamless decentralized experience.",
    issues: "Frontend and Smart Contract Synchronization:Delays in transaction confirmation or network congestion could lead to frontend desynchronization, causing a lag in displayed information.",
    solutions: "Integrated a real-time polling mechanism to refresh transaction status, and used event listeners for smart contracts to update the frontend upon state changes, ensuring that users received accurate, up-to-date information without noticeable lag.",
  },
  {
    id: 6,
    title: "IDEX",
    images: [
      { url: "/images/projects/idex.png" },
    ],
    workTabs: "Blockchain",
    workContent: "Open-Source Project",
    workGithub: "https://github.com/zerox-toml/idex-farm",
    workRealLink: "https://idex.io/",
    projectId: 3,
    description: "IDEX is a decentralized exchange (DEX) that combines an order-book model with an automated market maker (AMM) for seamless trading.",
    stack: [
      { stack: "Solidity" },
      { stack: "Ethereum" },
      { stack: "Polygon" },
      { stack: "Typescript" },
    ],
    keya: [
      { keya: "IDEX SDK" },
      { keya: "IDEX Contract Silverton" },
      { keya: "DefiLama Adapter" },
      { keya: "IDEX Farm V2" },
    ],
    responsibility: "Solidity Smart Contract & Web3 Frontend Developer",
    techview1: "Its perpetual swap smart contracts enable leveraged trading, allowing users to speculate on asset price movements without owning the underlying asset.",
    techview2: "The contracts are designed to ensure robust price discovery by utilizing decentralized oracles and dynamic funding rate mechanisms, maintaining fair pricing between long and short positions.",
    techview3: "Built on Ethereum and other EVM-compatible blockchains, IDEX employs high-performance infrastructure to deliver low-latency transactions while preserving decentralization.",
    issues: "Managing oracle price latency can lead to inaccurate pricing in volatile markets, potentially exposing users to risk or opening the protocol to exploitation.",
    solutions: "Integrate multiple decentralized oracles like Chainlink and Band Protocol, with aggregation and fallback mechanisms, to ensure more accurate, real-time price feeds and minimize discrepancies during high volatility.",
  },

  {
    id: 35,
    title: "TrueRev",
    images: [
      { url: "/images/projects/sass.png" },
      { url: "/images/projects/sass1.png" }
    ],
    workTabs: "Full Stack",
    workContent: "SAAS Platform",
    workGithub: "",
    workRealLink: "https://www.truerev.com",
    projectId: 3,
    description: "Move your revenue schedules off of Excel. Stay compliant with ASC 606. Generate subscription metrics (MRR/ARR, Bookings, Churn, Cash-flow). Track new deals, upgrades, cancellations & expansion.",
    stack: [
      { stack: "Svelte" },
      { stack: "Node.js" },
      { stack: "Nginx" },
    ],
    keya: [
      { keya: "CLV Wallet" },
      { keya: "CLV Mainnet" },
      { keya: "CLV Parachain" },
      { keya: "Staking" },
    ],
    responsibility: "Web3 Frontend Developer",
    techview1: "Revenue Recognition Automation: TrueRev helps B2B SaaS companies automate complex revenue recognition processes, replacing manual spreadsheets with tools that comply with standards like ASC 606, enabling accurate financial reporting and reducing errors.",
    techview2: "The platform provides real-time cash flow tracking, including deferred revenue and recurring subscription metrics (e.g., MRR/ARR), helping businesses monitor financial health and make informed decisions quickly.",
    techview3: "CRM Integration: By syncing with tools like QuickBooks and Salesforce, TrueRev consolidates customer and financial data, improving accuracy and enabling better alignment between sales and financial operations.",
    issues: "Wallet Development",
    solutions: "Developed User-friendly, Safe Wallet",
  },


  {
    id: 11,
    title: "RealEstate",
    images: [
      { url: "/images/projects/realestate2.png" },
      { url: "/images/projects/realestate.png" }
    ],
    workTabs: "Full Stack",
    workContent: "Online Commercial Platform",
    workGithub: "",
    workRealLink: "https://gedneygroup.com/",
    projectId: 4,
    description: "Real Estate Site, GoogleMaps",
    stack: [
      { stack: "React" },
      { stack: "Typescript" },
      { stack: "Next.js" },
      { stack: "GoogleMaps" },
      { stack: "ApolloGraphQL" },
    ],

    responsibility: "Full Stack Developer",
  },
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
  {
    id: 112,
    title: "Carnival Fair",
    images: [
      { url: "/images/projects/carnival.png" },
      { url: "/images/projects/realestate.png" }
    ],
    workTabs: "Ecommerce",
    workContent: "leading Ecommerce Platform",
    workGithub: "",
    workRealLink: "https://www.thecarnivalfair.com.sg/",
    projectId: 4,
    description: "The Carnival Fair is a leading event planning and carnival rental company in Singapore, specializing in organizing large-scale events like corporate functions, family days, and private parties with a focus on interactive entertainment.",
    stack: [
      { stack: "Shopify" },
      { stack: "Google Analytics" },
      { stack: "Webflow" },
      { stack: "YMQ Product Options" },
    ],
    keya: [
      { keya: "Extensive Carnival Games & Rentals" },
      { keya: "Live Food Stations" },
      { keya: "Fringe Activities" },
      { keya: "Advanced Marketing Integration" },
    ],
    responsibility: "Full Stack Developer",
    techview1: "Offers over 300 game options, including bouncy castles, arcade machines, and traditional game booths, suitable for both large events and small gatherings.",
    techview2: "Provides live catering services such as popcorn, candy floss, and local delicacies, making events more engaging and memorable​. ",
    techview3: " Includes unique offerings like face painting, henna art, photo booths, and balloon sculpting to elevate guest experiences​​.",
    issues: "Managing a wide variety of event offerings and ensuring availability and seamless booking during peak seasons.",
    solutions: "The Carnival Fair mitigates this by implementing advanced scheduling systems and real-time inventory management.",
  },
  {
    id: 113,
    title: "Medusa Eats App",
    images: [
      { url: "/images/projects/medusa-eats.png" },
      { url: "/images/projects/realestate.png" }
    ],
    workTabs: "Ecommerce",
    workContent: "leading Ecommerce Platform",
    workGithub: "",
    workRealLink: "https://medusa-eats.vercel.app/",
    projectId: 4,
    description: "The Carnival Fair is a leading event planning and carnival rental company in Singapore, specializing in organizing large-scale events like corporate functions, family days, and private parties with a focus on interactive entertainment.",
    stack: [
      { stack: "Shopify" },
      { stack: "Google Analytics" },
      { stack: "Webflow" },
      { stack: "YMQ Product Options" },
    ],
    keya: [
      { keya: "Extensive Carnival Games & Rentals" },
      { keya: "Live Food Stations" },
      { keya: "Fringe Activities" },
      { keya: "Advanced Marketing Integration" },
    ],
    responsibility: "Full Stack Developer",
    techview1: "Offers over 300 game options, including bouncy castles, arcade machines, and traditional game booths, suitable for both large events and small gatherings.",
    techview2: "Provides live catering services such as popcorn, candy floss, and local delicacies, making events more engaging and memorable​. ",
    techview3: " Includes unique offerings like face painting, henna art, photo booths, and balloon sculpting to elevate guest experiences​​.",
    issues: "Managing a wide variety of event offerings and ensuring availability and seamless booking during peak seasons.",
    solutions: "The Carnival Fair mitigates this by implementing advanced scheduling systems and real-time inventory management.",
  },
  {
    id: 114,
    title: "Medusa Mobile App",
    images: [
      { url: "/images/projects/medusa-app.png" },
      { url: "/images/projects/realestate.png" }
    ],
    workTabs: "Ecommerce",
    workContent: "React Native Medusa.js Starter Template",
    workGithub: "https://zerox-toml",
    workRealLink: "",
    projectId: 4,
    description: "Combine Medusa's modules for your commerce backend with the latest Expo features for a mobile storefront that matches Medusa Next.js starter functionality, look and feel.",
    stack: [
      { stack: "Medusa.js" },
      { stack: "React Native" },
      { stack: "Expo Router" },
      { stack: "Expo" },
      { stack: "TypeScript" },
    ],
    keya: [
      { keya: "Shipping Address" },
      { keya: "Hello Rodrigo" },
      { keya: "Profile" },
      { keya: "Advanced Marketing Integration" },
    ],
    responsibility: "Full Stack Developer",
    techview1: "All logic and user flows through the app are working with the Medusa Backend.",
    techview2: " kickstart a Medusa project with web (Next.js) and mobile (Expo) in a integrated setup for cross platform development.",
    techview3: " ",
    issues: "",
    solutions: "",
  },
  {
    id: 37,
    title: "Medical Reservation System",
    images: [
      { url: "/images/projects/medical-system.png" },
      { url: "/images/projects/medical-system2.png" }
    ],
    workTabs: "Full Stack",
    workContent: "Booking System",
    workGithub: "https://zerox-toml",
    workRealLink: "https://medical-reservation-system.vercel.app/",
    projectId: 4,
    description: "Online Reservation Medical System",
    stack: [
      { stack: "React" },
      { stack: "Typescript" },
      { stack: "Restful API" },
    ],
    keya: [
      { keya: "Search Features" },
      { keya: "Payment Gateway" },
      { keya: "" },
    ],
    responsibility: "Frontend Developer",
    techview1: "Designed and developed an intuitive, responsive user interface leveraging React.js, TypeScript, and Redux Toolkit to ensure seamless user experience and efficient state management.",
    techview2: "Integrated secure payment gateway solutions to streamline transactions, enhancing customer interaction. ",
    techview3: "Collaborated with backend teams to implement RESTful API connections, ensuring smooth data flow and robust functionality across the application.",
    issues: "As the application grows, handling global states with Redux Toolkit can become intricate, leading to potential performance bottlenecks and difficulty debugging if actions, reducers, and middleware aren't well-organized.",
    solutions: "Use Redux slices and modularize the state by feature to keep the store manageable. Implement selectors and memoization to optimize performance and prevent unnecessary re-renders. Redux DevTools can also help with debugging state changes more efficiently.",

  },
  {
    id: 102,
    title: "Treasure Aptos NFT Game",
    images: [
      { url: "/images/projects/treasure1.png" },
    ],
    workTabs: "Blockchain",
    workContent: "Freelance",
    workGithub: "https://zerox-toml",
    workRealLink: "https://aptostreasurehunt.vercel.app/",
    projectId: 1,
    description: "You can deploy your applications on the blockchain using this app built with Decentralized CI/CD, ens, ipfs technologies",
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
    responsibility: "Web3 & Full Stack Developer",
    techview1: "The game combines blockchain technology with real-world geolocation, allowing players to discover and claim treasures by physically visiting specific locations. This feature adds an engaging layer of interaction between the digital and physical world. ",
    techview2: "Built on the Aptos blockchain, the game leverages smart contracts to ensure transparent, immutable, and secure treasure drops and claims, providing fairness and decentralized control. Scalable and Fast Transactions: By utilizing Aptos’ high throughput and low latency infrastructure, the game supports large-scale user participation without compromising performance. ",
    techview3: "The platform integrates Aptos wallets for smooth token transactions, enabling players to easily claim rewards and trade their assets with low transaction fees.",
    issues: "In IPFS, files are stored in a distributed network, but they're not guaranteed to persist unless they are actively 'pinned' on one or more nodes. If no node is pinning the file, it may become unavailable over time..",
    solutions: "Used third-party pinning services like Pinata to ensure that your dApp's files remain available. This service provide persistent storage by keeping your files pinned in their IPFS nodes. Players can receive and trade treasures as tokens, making the rewards system transparent and adaptable to various gameplay dynamics.",
  },
  {
    id: 33,
    title: "Lyeintl",
    images: [
      { url: "/images/projects/lyeintl.png" },
      { url: "/images/projects/lyeintl2.png" }
    ],
    workTabs: "Full Stack",
    workContent: "Booking System",
    workGithub: "",
    workRealLink: "https://lyeintl.com/",
    projectId: 6,
    description: "Online Reservation System.",
    stack: [
      { stack: "Vue.js V3" },
      { stack: "Vuetify" },
      { stack: "Composition API" },
      { stack: "MySQL" }
    ],
    keya: [
      { keya: "Home" },
      { keya: "Cleaning Services" },
      { keya: "Manpower Supply" },
      { keya: "Careers" },
    ],
    responsibility: "Frontend Developer",
    techview1: "The Lye International platform is a web-based application developed with Vue.js. Vue was chosen for its lightweight framework and reactive data binding, which enhances user experience and facilitates efficient DOM updates. This setup also leverages Vue Router for seamless navigation and Vuex for state management, ensuring consistency and smooth user interactions across pages.",
    techview2: "Component-Based Architecture: Each part of the platform was built as reusable Vue components, allowing modular design, simplifying debugging, and enabling easy updates. This structure enhances scalability and keeps the code organized.",
    techview3: "Dynamic Data Binding and State Management: The project employs Vuex for centralized state management, handling data such as user sessions and global UI states. This ensures consistency and reactivity across the application without excessive re-rendering.",
    issues: "SEO Optimization for SPA:Single-page applications often face SEO challenges since search engines might not fully render JavaScript content.",
    solutions: "Implemented Vue Server-Side Rendering (SSR) to render pages on the server and serve pre-rendered HTML to search engines, improving SEO. Additionally, dynamic meta tags were added to enhance visibility on search engines.",

  },

]


export const resumeExp: resume[] = [
  {
    id: 9,
    title: "Blockchain Engineer",
    subtitle: "Freelancing",
    desc: "Working on Solana, Aptos, and other blockchains.",
    badge: "2025 - present",
    experience: false,
    logo: "",
    link: "https://freelancer.com/in/spectrecoer",
  },
  {
    id: 1,
    title: "Blockchain Engineer",
    subtitle: "Tangible Trade",
    desc: "Developed Tangible Trade, Hand of God, and other projects.",
    badge: "2024 - 2025",
    experience: false,
    logo: "",
    link: "https://linkedin.com/company/tangibletrade",
  },
  {
    id: 10,
    title: "Blockchain Engineer",
    subtitle: "Discord",
    desc: "Developed PumpFun, Frontier Registry, Treasure Aptos Game.",
    badge: "2024 - 2024",
    experience: false,
    logo: "",
    link: "https://discord.com/users/792121212121212121",
  },

  {
    id: 2,
    title: "Blockchain Engineer",
    subtitle: "Pixelette Technologies",
    desc: "Developed Beowulf.",
    badge: "2022 - 2024",
    logo: "",
    experience: false,
    link: "https://beowulfchain.com/",
  },
  {
    id: 3,
    title: "Web3 Frontend Engineer",
    subtitle: "XANA",
    desc: "Developed XANA NFT Game.",
    badge: "2022 - 2023",
    logo: "",
    experience: false,
    link: "https://xana.net/",
  },
  {
    id: 4,
    title: "Blockchain Engineer",
    subtitle: "Osiz Technologies",
    desc: "Developed CC-Poker Game & Defi Trading Platforms.",
    badge: "2020 - 2022",
    logo: "",
    experience: false,
    link: "https://www.osiztechnologies.com/",
  },
  {
    id: 5,
    title: "Software Engineer",
    subtitle: "Third Eye",
    desc: "Developed SASS and React Native apps for Third Eye.",
    badge: "2019 - 2020",
    logo: "",
    experience: false,
    link: " https://thirdeyedata.ai/",
  },
  {
    id: 3,
    title: "Frontend Engineer",
    subtitle: "Roadninja",
    desc: "Developed RoadNinja as Frontend Engineer.",
    badge: "2018 - 2019",
    experience: false,
    logo: "",
    link: "https://www.roadninja.com/",
  },





]