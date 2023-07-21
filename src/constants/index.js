import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  solidity,
  hardhat,
  python,
  diamondElectric,
  vrsi,
  freelancer,
  userImage,
  nft,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Smart Contract Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HardHat",
    icon: hardhat,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Assembly Engineer",
    company_name: "Diamond Electric Manufacturing Corp.",
    icon: diamondElectric,
    iconBg: "#383E56",
    date: "Dec 2019 - April 2021",
    points: [
      "Oversaw the assembly portion of manufacturing automobile ignition coils.",
      "Small plant of about 220 people so I did a little bit of everything: milling, lathing, cutting, solidworks designing, PLC programming, met with suppliers, installed new testing stations with little supervision etc.",
      "Made sure production quota was met everyday and regularly talked with co-workers for advice.",
    ],
  },
  {
    title: "Project Engineer",
    company_name: "Variation Reduction Systems Inc.",
    icon: vrsi,
    iconBg: "#E6DEDD",
    date: "Apr 2021 - Dec 2022",
    points: [
      "Installed the first ever End of Line Gap and Flush measurement system. (https://industry.nikon.com/en-gb/products/laser-radar/apdis-gap-and-flush/) at an automobile manufacturing plant.",
      "Created measurement plans and worked with python and polyworks to process data.",
      "Provided support for previous installed VRSI laser measurement systems in auto manufacturing plants. ",
    ],
  },
  {
    title: "Full stack web3 Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Jan 2023 - Current",
    points: [
      "Setup a Fiverr, Upwork and Coconala account in search of freelance work.",
      "Wrote, tested, and deployed smart contracts using solidity and hardhat",
      "Built frontend applications for interacting with smart contracts",
    ],
  },
];

const testimonials = [
  {
    testimonial: "He works very hard all the time, but... he could work harder",
    name: "My wife",
    designation: "House Vice-president",
    company: "Married Marquis and Manae",
    image: userImage,
  },
];

const projects = [
  {
    name: "Mint SVG",
    description:
      "Smart contract with a frontend that allows users to upload an svg that will be 100% stored on chain as a NFT",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "hardhat",
        color:
          "text-transparent bg-clip-text bg-gradient-to-r from-[#ffff00] to-cyan-500",
      },
      {
        name: "viem",
        color: "text-blue-gradient",
      },
    ],
    image: nft,
    source_code_link: "https://github.com/",
  },
  /* {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  }, */
];

export { services, technologies, experiences, testimonials, projects };
