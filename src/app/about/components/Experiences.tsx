import { Timeline } from "@/components/partials/Timeline";
import Image from "next/image";

export const Experiences = () => {
  const data = [
    {
      title: "Mar 2024 - Present",
      content: (
        <div>
          <p className="text-white text-base lg:text-lg font-semibold">
            Full Stack Developer at Unit Network
          </p>
          <ul className="text-neutral-300 text-sm lg:text-base list-disc mt-2 mb-6 ml-4">
            <li>
              Crafting interactive and visually appealing cryptocurrency web app
              and landing pages using Next JS, React, Typescript, Tailwind, and
              PostgreSQL.
            </li>
            <li>
              Implementing UI/UX design principle to develop websites, striving
              to optimal user experience and interface functionality.
            </li>
            <li>Debug cryptocurrency functionalities using Metamask.</li>
          </ul>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Image
              src="/images/projects/unit-app/home.webp"
              alt="startup template"
              width={400}
              height={400}
              className="rounded-lg object-cover object-top h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/projects/animal-astronauts/home.webp"
              alt="startup template"
              width={400}
              height={400}
              className="rounded-lg object-cover object-top h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2024 - Oct 2024",
      content: (
        <div>
          <p className="text-white text-base lg:text-lg font-semibold">
            Frontend Developer (Digistar Program) at Telkom Indonesia
          </p>
          <ul className="text-neutral-300 text-sm lg:text-base list-disc mt-2 mb-6 ml-4">
            <li>
              Developed user interfaces and managed a case project as a Frontend
              Developer using React.js, Typescript, and Tailwind CSS,
              implementing frontend solutions and ensuring high-quality
              deliverables during the program.
            </li>
            <li>
              Attended comprehensive frontend and soft skills classes to enhance
              technical expertise abilities.
            </li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/images/experiences/digistar/certificate.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2024 - Jun 2024",
      content: (
        <div>
          <p className="text-white text-base lg:text-lg font-semibold">
            UI/UX Designer Apprentice at MAXY Academy
          </p>
          <ul className="text-neutral-300 text-sm lg:text-base list-disc mt-2 mb-6 ml-4">
            <li>
              Participated in brainstorming sessions, wireframing, prototyping,
              and user testing activities.
            </li>
            <li>
              Contributed to the development of design concepts, mockups, and
              interactive prototypes.
            </li>
            <li>
              Demonstrated a commitment to learning and improving UI/UX design
              skills through practical application and mentorship.
            </li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/images/experiences/maxy/certificate.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mar 2023 - Dec 2023",
      content: (
        <div>
          <p className="text-white text-base lg:text-lg font-semibold">
            iOS Developer at Apple Developer Academy
          </p>
          <ul className="text-neutral-300 text-sm lg:text-base list-disc mt-2 mb-6 ml-4">
            <li>
              Developed and maintained 5 iOS Applications using
              Swift,Objective-C, Cocoa, Xcode, and the iOS SDK, achieving 5-star
              ratings on the App Store and garnering over 150 downloads
              collectively.
            </li>
            <li>
              Implemented Agile methodologies, Test-DrivenDevelopment(TDD), and
              Automation techniques.
            </li>
            <li>
              Leveraged iOS libraries such as CoreML, WidgetKit, Charts,
              AVFoundation, CoreData, CloudKit, and more.
            </li>
            <li>
              Directed version control using GitHub, integrated RESTAPIs, and
              successfully deployed 3 applications with 100% approval rate to
              the App Store.
            </li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/images/experiences/apple/photo1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/experiences/apple/photo2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jun 2023 - Aug 2023",
      content: (
        <div>
          <p className="text-white text-base lg:text-lg font-semibold">
            Research Assistant at Ciputra University
          </p>
          <ul className="text-neutral-300 text-sm lg:text-base list-disc mt-2 ml-4">
            <li>
              Research: Development of an Artificial Intelligence-Based
              Predictive Analytics Model for Entrepreneurial Performance
              Identification
            </li>
            <li>
              Being a researcher to research entrepreneurial performance
              predictive analysis using python and pandas
            </li>
            <li>
              Performed in-depth Exploratory Data Analysis (EDA) on the provided
              dataset, scrutinizing correlations and patterns.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Jan 2023 - Jun 2023",
      content: (
        <div>
          <p className="text-white text-base lg:text-lg font-semibold">
            Frontend Developer at SABA Student Assistant
          </p>
          <ul className="text-neutral-300 text-sm lg:text-base list-disc mt-2 mb-6 ml-4">
            <li>
              Engineered a course marketplace platform using HTML, CSS,
              Tailwind, MySQL, and Laravel, facilitating user-friendly
              navigation and robust functionality.
            </li>
            <li>
              Successfully deployed and utilized by over 100 of SABA&apos;s
              client, enhancing their access to courses and resources.
            </li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/images/projects/saba/home.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/projects/saba/about.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-top h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2022 - Feb 2023",
      content: (
        <div>
          <p className="text-white text-base lg:text-lg font-semibold">
            Assistant Lecturer at Ciputra University
          </p>
          <ul className="text-neutral-300 text-sm lg:text-base list-disc mt-2 ml-4">
            <li>
              Educating junior individuals on web development encompassing HTML,
              CSS, JavaScript, jQuery, Bootstrap, Tailwind, PHP, SQL, and
              Laravel.
            </li>
            <li>
              Evaluating student assignments and projects to gauge comprehension
              and progress.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
};
