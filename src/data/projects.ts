import { Project } from "@/types/Project";
import { FaBootstrap, FaHtml5, FaLaravel, FaReact } from "react-icons/fa";
import { GrSwift } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiDocusaurus,
  SiNextdotjs,
  SiPolkadot,
  SiTypescript,
} from "react-icons/si";

export const projects: Project[] = [
  {
    id: 0,
    title: "Animal Astronauts",
    description: "NFT's by Unit Network",
    shortSummary:
      "The NFT platform offers exclusive digital space explorers, each with a unique story. Join a community that celebrates creativity, innovation, and endless possibilities in the digital frontier.",
    link: "https://animalastronatus.org",
    techStack: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Typescript",
        icon: SiTypescript,
      },
      {
        name: "TailwindCSS",
        icon: RiTailwindCssFill,
      },
    ],
    summaryTitle: "Explore the Cosmos with Unmatched Speed",
    summaryDescription:
      "The Animal Astronauts website is a dynamic gateway to a cosmic NFT experience, showcasing unparalleled speed and performance. With a 100 performance score on the Collection page, it handles over 350 images seamlessly, offering users a smooth and engaging exploration of digital space explorers. The site highlights the platform's commitment to efficiency and innovation, inviting visitors to dive into a universe where creativity and technology meet in perfect harmony.",
    images: [
      "/images/projects/animal-astronauts/home.webp",
      "/images/projects/animal-astronauts/collection.webp",
    ],
  },
  {
    id: 1,
    title: "Unit Ventures",
    description: "Blockchain Business Landing Page",
    shortSummary:
      "Unit Ventures specialize in delivering innovative blockchain services tailored to drive your business forward.",
    link: "https://unitventures.org",
    techStack: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Typescript",
        icon: SiTypescript,
      },
      {
        name: "TailwindCSS",
        icon: RiTailwindCssFill,
      },
    ],
    summaryTitle: "A Seamless Journey with Unit Ventures",
    summaryDescription:
      "It effectively captures the essence of our innovative solutions, presenting a user-friendly interface that promises seamless integration and enhanced security. The page communicates Unit Ventures' commitment to advancing blockchain technology with features like smart contracts, decentralized applications, secure transactions, and expert consultancy. Serving as a compelling invitation, the landing page signals a transformative journey towards streamlined and secure blockchain business solutions.",
    images: [
      "/images/projects/unit-ventures/hero.webp",
      "/images/projects/unit-ventures/about.webp",
      "/images/projects/unit-ventures/shaping.webp",
      "/images/projects/unit-ventures/team.webp",
    ],
  },
  {
    id: 2,
    title: "Unit Club",
    description: "Unit Network's exclusive membership",
    shortSummary:
      "Unit Club offers exclusive blockchain services tailored for the elite members of the Unit Network community.",
    link: "https://unitclub.org",
    techStack: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Typescript",
        icon: SiTypescript,
      },
      {
        name: "TailwindCSS",
        icon: RiTailwindCssFill,
      },
    ],
    summaryTitle: "A Harmonious Website Dynamic Design",
    summaryDescription:
      "Unit Club is a cutting-edge blockchain platform that captivates users with its clean, modern design and engaging animations. The website's intuitive interface combines aesthetic elegance with high functionality, featuring smooth transitions and dynamic animations that enhance user experience. From interactive elements to fluid animations, every detail is crafted to make navigation effortless and visually appealing. The site showcases two exclusive clubs: Black Club and 365 Club, each designed with a sleek, minimalistic approach that emphasizes clarity and ease of use. With its commitment to providing a transformative blockchain experience, Unit Club ensures that every visit is not just informative but also visually memorable, reflecting our dedication to innovation and user-centric design.",
    images: [
      "/images/projects/unit-club/home.webp",
      "/images/projects/unit-club/black.webp",
    ],
  },
  {
    id: 3,
    title: "Unit App",
    description: "Unit Network's Blockchain Exchange Web App",
    shortSummary:
      "Unit App specialize in providing a state-of-the-art blockchain exchange platform designed to streamline trading experience.",
    link: "https://app.unit.network",
    techStack: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Typescript",
        icon: SiTypescript,
      },
      {
        name: "Polkadot.js",
        icon: SiPolkadot,
      },
    ],
    summaryTitle: "Advancing Blockchain Solutions with Innovative Features",
    summaryDescription:
      "The Unit App encapsulates a commitment to advancing blockchain technology through a user-friendly interface designed for seamless interaction. It features robust tools such as staking, blockchain exploration, and token creation, all aimed at enhancing the blockchain experience. While the app provides a comprehensive and secure platform for managing digital assets, efforts are ongoing to improve web performance for an even more efficient and responsive experience. Unit App serves as a gateway to innovative blockchain solutions, inviting users to explore and engage with the forefront of blockchain technology.",
    images: [
      "/images/projects/unit-app/home.webp",
      "/images/projects/unit-app/explorer.webp",
      "/images/projects/unit-app/staking.webp",
      "/images/projects/unit-app/token.webp",
    ],
  },
  {
    id: 4,
    title: "NutriCam",
    description: "Apple Developer Academy 4rd Challenge",
    shortSummary:
      "Calculate your daily calories just by taking photos of your food.",
    techStack: [
      {
        name: "SwiftUI",
        icon: GrSwift,
      },
    ],
    summaryTitle: "Very Helpful, Need a Bigger Machine Learning Model",
    summaryDescription:
      "The user response has been excellent. Because NutriCam is so simple and useful, users adore it. NutriCam offers a very straightforward program that is simple to use on a regular basis, in contrast to other food applications that have numerous menus. Users have noted that while NutriCam's food coverage is not very extensive, not all foods can be accurately recognized.",
    images: [
      "/images/projects/nutricam/home.webp",
      "/images/projects/nutricam/camera.webp",
      "/images/projects/nutricam/profile.webp",
      "/images/projects/nutricam/scan-result.webp",
      "/images/projects/nutricam/statistics.webp",
    ],
    thumbnail: "/images/projects/nutricam/thumbnail.webp",
  },
  {
    id: 5,
    title: "Careific",
    description: "Apple Developer Academy Macro Challenge",
    shortSummary:
      "Keep an eye on your seniors' health and well-being and stay in touch with them with ease using your iPhone.",
    techStack: [
      {
        name: "SwiftUI",
        icon: GrSwift,
      },
    ],
    summaryTitle:
      "Excellent Idea, However Some Functions are Previously Included in Other Apps",
    summaryDescription:
      "Caregivers who looked after their parents or grandparents praised Careific for its capabilities, which made tracking much easier. Some really useful features include the walkie-talkie, which facilitates communication, and the emergency feature, which sends alerts in the event of an emergency. Still, some features like fall detection and location tracking are already present in various applications.",
    images: [
      "/images/projects/careific/dashboard.webp",
      "/images/projects/careific/dashboard-senior.webp",
      "/images/projects/careific/history.webp",
      "/images/projects/careific/routine.webp",
      "/images/projects/careific/login.webp",
    ],
    thumbnail: "/images/projects/careific/thumbnail.webp",
  },
  {
    id: 6,
    title: "Unit Network Docs",
    description: "Unit Network Landing Page and Documentation Website",
    shortSummary:
      "Discover Unit Network, the ultimate platform for creating, managing, and scaling tokenized ecosystems.",
    link: "https://unit.network",
    techStack: [
      {
        name: "React.js",
        icon: FaReact,
      },
      {
        name: "Docusaurus",
        icon: SiDocusaurus,
      },
    ],
    summaryTitle:
      "User-friendly and Effortlessly Guiding Visitors to View the Documentation",
    summaryDescription:
      "Unit Network's landing page is a sleek introduction to a revolutionary blockchain platform. It effectively encapsulates the network's core functionalities, offering a user-friendly interface that guarantees a seamless experience for developers and users alike. The page communicates Unit Network's mission of decentralization, scalability, and innovation, spotlighting key features such as token creation, scalability solutions, and governance. Unit Network's landing page serves as an engaging invitation to join a transformative journey toward a decentralized and connected digital economy.",
    images: [
      "/images/projects/unit-docs/home.webp",
      "/images/projects/unit-docs/connect.webp",
      "/images/projects/unit-docs/docs.webp",
      "/images/projects/unit-docs/about.webp",
    ],
  },
  {
    id: 7,
    title: "Artealogic",
    description: "Design Studio Landing Page",
    shortSummary:
      "Artealogic is a design studio providing business branding services in visual design. They assist in developing your brand with a clear message, especially tailored to Gen-Z.",
    techStack: [
      {
        name: "HTML",
        icon: FaHtml5,
      },
      {
        name: "TailwindCSS",
        icon: RiTailwindCssFill,
      },
    ],
    summaryTitle: "Sleek and Clear But Lacks Animations",
    summaryDescription:
      "Artealogic's website stands out for its sleek, cool design and clear, concise content that brilliantly showcases their expertise in visual design for business branding. The site's modern aesthetic and user-friendly layout ensure a seamless experience, offering a wealth of information in a visually captivating manner. However, it notably steers away from elaborate animations, choosing instead to focus on delivering information with precision and style. Overall, while the site lacks extensive animations, its emphasis on clarity and sophistication in design remains a notable highlight.",
    images: [
      "/images/projects/artealogic/home.webp",
      "/images/projects/artealogic/about.webp",
      "/images/projects/artealogic/work.webp",
      "/images/projects/artealogic/blogs.webp",
    ],
  },
  {
    id: 8,
    title: "Horizon",
    description: "Ciputra University Orientation Week 2022 Official Website",
    shortSummary:
      "The goal of this website is to assist new students in obtaining all the information they require regarding Ciputra University Orientation Week (masa orientasi). The theme of Orientation Week 2023 is Horizon, which uses bright color and tribal pattern.",
    techStack: [
      {
        name: "React.js",
        icon: FaReact,
      },
      {
        name: "CSS",
        icon: IoLogoCss3,
      },
    ],
    summaryTitle: "Creative Design, Good User Experience, Less Interactive",
    summaryDescription:
      "Everyone loved the website's interface design and animation after hearing the committee members' and participants' views. Additionally, this website is simple to use and all the content is legible. This website's lack of interactivity has to be enhanced so that users are more interested in it.",
    images: [
      "/images/projects/horizon/home.webp",
      "/images/projects/horizon/home2.webp",
      "/images/projects/horizon/about.webp",
      "/images/projects/horizon/rules.webp",
      "/images/projects/horizon/schedule.webp",
      "/images/projects/horizon/maps.webp",
    ],
  },
  {
    id: 9,
    title: "Elevate",
    description: "Ciputra University Orientation Week 2021 Official Website",
    shortSummary:
      "The Universitas Ciputra 2022 Orientation Week (Orientation Period) carries the Elevate theme and features a galaxy pattern that symbolizes rising upward. To find the details required to participate in the 2022 Orientation Week series of events, new students can use this page.",
    techStack: [
      {
        name: "Laravel",
        icon: FaLaravel,
      },
      {
        name: "TailwindCSS",
        icon: RiTailwindCssFill,
      },
    ],
    summaryTitle: "Aesthetic Design, Need to be More Creative",
    summaryDescription:
      "This website's appealing design does a great job of showcasing the adorable characters. Still ideal is the utilization of many different colors and components. The navigation bar in particular has a layout that is reminiscent of other websites, and the scrolling and animation are not particularly impressive.",
    images: [
      "/images/projects/elevate/home.webp",
      "/images/projects/elevate/schedule.webp",
      "/images/projects/elevate/rules.webp",
      "/images/projects/elevate/task.webp",
    ],
  },
  {
    id: 10,
    title: "SABA Student Assistant",
    description: "On-site Course Marketplace Website",
    shortSummary:
      "The on-site course marketplace company SABA Student Assistant provides students with reasonable costs. I participated in the SABA launch and built and manage this company website.",
    techStack: [
      {
        name: "Laravel",
        icon: FaLaravel,
      },
      {
        name: "Bootstrap",
        icon: FaBootstrap,
      },
    ],
    summaryTitle: "Cool Design, But Website Loading Takes Too Long",
    summaryDescription:
      "The website for SABA Student Assistant has been expertly created with the targeted target market in mind. Using the website is also quite easy because the flow of buying courses on this website is very simple. This website's performance needs to be improved because it requires numerous assets that make the website load a little slowly.",
    images: [
      "/images/projects/saba/home.webp",
      "/images/projects/saba/about.webp",
      "/images/projects/saba/class.webp",
    ],
  },
  {
    id: 11,
    title: "Kukoki",
    description: "Meal Kit Marketplace Website",
    shortSummary:
      "Kukoki is a start-up that sells meal kits in Surabaya. Kukoki uses the website as a tool to receive orders from customers.",
    techStack: [
      {
        name: "Laravel",
        icon: FaLaravel,
      },
      {
        name: "React.js",
        icon: FaReact,
      },
      {
        name: "TailwindCSS",
        icon: RiTailwindCssFill,
      },
    ],
    summaryTitle:
      "This Website Has Lots of Features, But The Flow is a Little Confusing",
    summaryDescription:
      "Many features on the Kukoki website make it convenient for customers to purchase meal kits. In order to appeal to the customer's target market, which is ladies, this website also has an easy-to-use layout. However, this website's navigation is a little unclear. Users found the meal kit plan page confusing during usability testing, so the flow needs to be improved.",
    images: [
      "/images/projects/kukoki/home.webp",
      "/images/projects/kukoki/rencana.webp",
      "/images/projects/kukoki/menu.webp",
      "/images/projects/kukoki/menu-detail.webp",
    ],
  },
  {
    id: 12,
    title: "9th NPLC",
    description: "Programming Competition Website",
    shortSummary:
      "The Informatics major in Universitas Ciputra hosts the NPLC every year as a programming and mathematical logic competition. Forest is the subject of the ninth NPLC.",
    techStack: [
      {
        name: "Laravel",
        icon: FaLaravel,
      },
      {
        name: "TailwindCSS",
        icon: RiTailwindCssFill,
      },
    ],
    summaryTitle:
      "The Website Has Been Used Successfully By Hundreds of Registered Participants, Despite Hosting Issues",
    summaryDescription:
      "In over of 300 users have utilized this website successfully. Although this website is simple to use, there is a hosting issue where the storage is insufficient, necessitating a separate payment confirmation on the Google form. According to this website's review, the registration process should exclusively take place there and shouldn't involve any other platforms.",
    images: [
      "/images/projects/nplc/home.webp",
      "/images/projects/nplc/register.webp",
    ],
  },
  {
    id: 13,
    title: "Unexposed",
    description: "Apple Developer Academy 3rd Challenge",
    shortSummary: "Play Unexposed with your friends and have a fun experience!",
    techStack: [
      {
        name: "SwiftUI",
        icon: GrSwift,
      },
    ],
    summaryTitle: "A Fun Game, But not For Everyone",
    summaryDescription:
      "Our games are enjoyed by users and change the social environment and activities. Because there are lies in the game, the existence of this game makes the friendship environment even more fascinating. However, as some people have their own personal favorites, not everyone makes playing this game their first priority when hanging out with their pals.",
    images: [
      "/images/projects/unexposed/home.webp",
      "/images/projects/unexposed/draw.webp",
      "/images/projects/unexposed/next-round.webp",
      "/images/projects/unexposed/result.webp",
      "/images/projects/unexposed/room.webp",
      "/images/projects/unexposed/setting.webp",
      "/images/projects/unexposed/turn.webp",
      "/images/projects/unexposed/vote.webp",
    ],
    thumbnail: "/images/projects/unexposed/thumbnail.webp",
  },
  {
    id: 14,
    title: "Trashify AI",
    description: "Swift Student Challenge 2024 Submission",
    shortSummary:
      "Trashify AI is a trash classification app using computer vision, helping users sort waste easily while promoting eco-friendly habits through interactive learning.",
    techStack: [
      {
        name: "SwiftUI",
        icon: GrSwift,
      },
    ],
    summaryTitle:
      "A Highly Valuable Learning Experience despite not Winning the Competition",
    summaryDescription:
      "Participating in the Swift Student Challenge was an incredibly rewarding experience that provided valuable insights and inspiration. Through this challenge, I honed my skills in app ideation and learned how to effectively leverage Apple technologies to solve real-world problems. The app I developed exceeded my expectations, achieving both functionality and user engagement goals. While I didn't win the competition, I'm proud of the app's success and deeply satisfied with the knowledge and growth I gained throughout the journey.",
    images: [
      "/images/projects/trashify/scan.webp",
      "/images/projects/trashify/scan-result.webp",
      "/images/projects/trashify/start.webp",
      "/images/projects/trashify/game.webp",
    ],
    thumbnail: "/images/projects/trashify/thumbnail.webp",
  },
];
