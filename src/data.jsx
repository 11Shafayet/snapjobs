import img4 from '/images/4.jpg';
import img13 from '/images/13.jpg';
import img20 from '/images/20.jpg';
import img26 from '/images/26.jpg';
import img30 from '/images/30.jpg';
import c1 from '/images/c-1.png';
import c2 from '/images/c-2.png';
import c3 from '/images/c-3.png';
import c4 from '/images/c-4.png';
import c5 from '/images/c-5.png';
import c6 from '/images/c-6.png';
import c7 from '/images/c-7.png';
import c8 from '/images/c-8.png';
import c9 from '/images/c-9.png';
import c10 from '/images/c-10.png';
import c11 from '/images/c-11.png';
import c12 from '/images/c-12.png';

import {
  SiAntdesign,
  SiGamedeveloper,
  SiGooglemarketingplatform,
  SiXdadevelopers,
} from 'react-icons/si';
import { IoLogoWebComponent } from 'react-icons/io5';
import {
  MdEngineering,
  MdOutlineSupportAgent,
  MdProductionQuantityLimits,
} from 'react-icons/md';
import { GrUserManager, GrVirtualMachine } from 'react-icons/gr';
import { VscAzureDevops } from 'react-icons/vsc';
import { CiDatabase } from 'react-icons/ci';
import { GiCyberEye } from 'react-icons/gi';
import { FaCloud } from 'react-icons/fa';

export const navData = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'All Jobs',
    link: '/all-jobs',
  },
  {
    title: 'About Us',
    link: '/about-us',
  },
  {
    title: 'All Blog',
    link: '/all-blog',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];

//all jobs
export const allJobs = [
  {
    id: 1,
    img: c1,
    title: 'UI/UX Designer',
    location: 'San Francisco',
    tags: ['Joomla', 'Wordpress', 'Javascript', 'PHP', 'HTML5'],
    salary: '$50k-$80k',
    timestamp: '3',
    featured: true,
    trending: true,
    duration: 'Full Time',
  },
  {
    id: 2,
    img: c2,
    title: 'Frontend Developer',
    location: 'California',
    tags: ['Wordpress', 'Javascript', 'PHP', 'HTML5', 'Tailwind CSS'],
    salary: '$60k-$70k',
    timestamp: '1',
    featured: false,
    trending: true,
    duration: 'Part Time',
  },
  {
    id: 3,
    img: c3,
    title: 'Web Developer',
    location: 'California',
    tags: ['Ruby', 'PHP', 'HTML5', 'SCSS', 'React JS'],
    salary: '$80k-$120k',
    timestamp: '5',
    featured: true,
    trending: false,
    duration: 'Full Time',
  },
  {
    id: 4,
    img: c4,
    title: 'Product Designer',
    location: 'Arizona',
    tags: ['Figma', 'Adobe XD', 'Photoshop', 'HTML5', 'CSS3'],
    salary: '$55k-$70k',
    timestamp: '2',
    featured: false,
    trending: false,
    duration: 'Part Time',
  },
  {
    id: 5,
    img: c5,
    title: 'Senior Backend Developer',
    location: 'Maryland',
    tags: ['Joomla', 'AWS', 'React JS', 'PHP', 'Laravel'],
    salary: '$100k-$130k',
    timestamp: '3',
    featured: false,
    trending: true,
    duration: 'Full Time',
  },
  {
    id: 6,
    img: c6,
    title: 'Marketing Head',
    location: 'Nevada',
    tags: ['Joomla', 'AWS', 'React JS', 'PHP', 'Laravel'],
    salary: '$100k-$130k',
    timestamp: '1',
    featured: false,
    trending: false,
    duration: 'Full Time',
  },
  {
    id: 7,
    img: c7,
    title: 'UI Designer',
    location: 'Alabama',
    tags: ['Figma', 'Adobe XD', 'Photoshop', 'HTML', 'CSS', 'Webflow'],
    salary: '$30k-$40k',
    timestamp: '3',
    featured: true,
    trending: false,
    duration: 'Intern',
  },
  {
    id: 8,
    img: c8,
    title: 'App Developer',
    location: 'Oklahoma',
    tags: ['Flutter', 'React JS', 'React Native', 'Javascript', 'PHP'],
    salary: '$70k-$80k',
    timestamp: '5',
    featured: true,
    trending: true,
    duration: 'Full Time',
  },
  {
    id: 9,
    img: c9,
    title: 'Project Manager',
    location: 'Alabama',
    tags: ['Book Keeping', 'HTML', 'CSS', 'Javascript'],
    salary: '$75k-$90k',
    timestamp: '9',
    featured: false,
    trending: true,
    duration: 'Full Time',
  },
  {
    id: 10,
    img: c10,
    title: 'Software Engineer',
    location: 'Seattle',
    tags: ['Python', 'Django', 'React', 'MongoDB'],
    salary: '$80k-$100k',
    timestamp: '2',
    featured: true,
    trending: true,
    duration: 'Full Time',
  },
  {
    id: 11,
    img: c11,
    title: 'DevOps Engineer',
    location: 'Austin',
    tags: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Terraform'],
    salary: '$90k-$120k',
    timestamp: '4',
    featured: true,
    trending: false,
    duration: 'Full Time',
  },
  {
    id: 12,
    img: c12,
    title: 'Mobile App Developer',
    location: 'Los Angeles',
    tags: ['Swift', 'Kotlin', 'React Native', 'Firebase'],
    salary: '$80k-$110k',
    timestamp: '2',
    featured: false,
    trending: true,
    duration: 'Full Time',
  },
  {
    id: 13,
    img: c1,
    title: 'Data Scientist',
    location: 'Chicago',
    tags: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
    salary: '$50k-$55k',
    timestamp: '6',
    featured: true,
    trending: true,
    duration: 'Part Time',
  },
  {
    id: 14,
    img: c2,
    title: 'Cybersecurity Analyst',
    location: 'Washington D.C.',
    tags: ['Cybersecurity', 'Firewall', 'CISSP', 'Penetration Testing'],
    salary: '$110k-$140k',
    timestamp: '1',
    featured: false,
    trending: false,
    duration: 'Full Time',
  },
  {
    id: 15,
    img: c3,
    title: 'AI/Machine Learning Engineer',
    location: 'San Jose',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning'],
    salary: '$120k-$150k',
    timestamp: '3',
    featured: true,
    trending: true,
    duration: 'Full Time',
  },
  {
    id: 16,
    img: c4,
    title: 'Product Manager',
    location: 'New York',
    tags: ['Product Management', 'Agile', 'Scrum', 'UX/UI'],
    salary: '$110k-$130k',
    timestamp: '5',
    featured: false,
    trending: true,
    duration: 'Full Time',
  },
  {
    id: 17,
    img: c5,
    title: 'Cloud Solutions Architect',
    location: 'Seattle',
    tags: ['AWS', 'Azure', 'Google Cloud', 'Microservices'],
    salary: '$130k-$160k',
    timestamp: '2',
    featured: true,
    trending: false,
    duration: 'Full Time',
  },
  {
    id: 18,
    img: c12,
    title: 'UI/UX Researcher',
    location: 'San Francisco',
    tags: ['User Research', 'Prototyping', 'Usability Testing'],
    salary: '$90k-$120k',
    timestamp: '4',
    featured: true,
    trending: true,
    duration: 'Part Time',
  },
  {
    id: 19,
    img: c6,
    title: 'Blockchain Developer',
    location: 'New York',
    tags: ['Blockchain', 'Smart Contracts', 'Ethereum', 'Solidity'],
    salary: '$100k-$130k',
    timestamp: '6',
    featured: false,
    trending: true,
    duration: 'Full Time',
  },
  {
    id: 20,
    img: c7,
    title: 'Network Engineer',
    location: 'Dallas',
    tags: ['Cisco', 'Routing and Switching', 'Firewall', 'CCNA'],
    salary: '$30k-$40k',
    timestamp: '3',
    featured: true,
    trending: false,
    duration: 'Intern',
  },

  {
    id: 21,
    img: c8,
    title: 'Software Quality Assurance Engineer',
    location: 'Boston',
    tags: ['Manual Testing', 'Automated Testing', 'Selenium', 'JUnit'],
    salary: '$85k-$110k',
    timestamp: '5',
    featured: true,
    trending: true,
    duration: 'Full Time',
  },
  {
    id: 22,
    img: c9,
    title: 'Full Stack Developer',
    location: 'Austin',
    tags: ['Node.js', 'React', 'MongoDB', 'Express.js'],
    salary: '$95k-$120k',
    timestamp: '2',
    featured: true,
    trending: false,
    duration: 'Full Time',
  },
  {
    id: 23,
    img: c11,
    title: 'IT Security Analyst',
    location: 'Chicago',
    tags: ['Cybersecurity', 'Network Security', 'Security Policies'],
    salary: '$90k-$115k',
    timestamp: '6',
    featured: false,
    trending: true,
    duration: 'Full Time',
  },
  {
    id: 24,
    img: c10,
    title: 'Web Designer',
    location: 'Los Angeles',
    tags: ['Adobe Creative Suite', 'HTML', 'CSS', 'Responsive Design'],
    salary: '$75k-$100k',
    timestamp: '4',
    featured: true,
    trending: false,
    duration: 'Full Time',
  },
  {
    id: 25,
    img: c5,
    title: 'Systems Analyst',
    location: 'Denver',
    tags: ['Business Analysis', 'Requirements Gathering', 'SQL'],
    salary: '$80k-$105k',
    timestamp: '3',
    featured: false,
    trending: true,
    duration: 'Full Time',
  },
  {
    id: 26,
    img: c1,
    title: 'Database Administrator',
    location: 'San Francisco',
    tags: ['SQL', 'Oracle', 'Database Optimization', 'Backup and Recovery'],
    salary: '$100k-$130k',
    timestamp: '1',
    featured: true,
    trending: false,
    duration: 'Full Time',
  },
  {
    id: 27,
    img: c2,
    title: 'IT Support Specialist',
    location: 'Seattle',
    tags: ['Technical Support', 'Troubleshooting', 'Help Desk'],
    salary: '$70k-$90k',
    timestamp: '2',
    featured: false,
    trending: true,
    duration: 'Full Time',
  },
  {
    id: 28,
    img: c3,
    title: 'UX/UI Designer',
    location: 'New York',
    tags: ['Wireframing', 'Prototyping', 'User-Centered Design'],
    salary: '$85k-$110k',
    timestamp: '5',
    featured: true,
    trending: false,
    duration: 'Full Time',
  },
  {
    id: 29,
    img: c4,
    title: 'Network Administrator',
    location: 'Dallas',
    tags: ['Cisco', 'LAN/WAN', 'Network Security', 'Troubleshooting'],
    salary: '$75k-$95k',
    timestamp: '4',
    featured: false,
    trending: true,
    duration: 'Full Time',
  },
  {
    id: 30,
    img: c6,
    title: 'React Native Developer',
    location: 'San Jose',
    tags: ['React Native', 'JavaScript', 'Redux', 'Mobile App Development'],
    salary: '$90k-$115k',
    timestamp: '6',
    featured: true,
    trending: false,
    duration: 'Full Time',
  },
];

// all categories
export const allCategories = [
  {
    icon: <SiAntdesign size={28} />,
    category: 'UI/UX Designer',
    posts: '37',
  },
  {
    icon: <SiXdadevelopers size={28} />,
    category: 'Frontend Developer',
    posts: '91',
  },
  {
    icon: <IoLogoWebComponent size={28} />,
    category: 'Web Developer',
    posts: '13',
  },
  {
    icon: <MdProductionQuantityLimits size={28} />,
    category: 'Product Designer',
    posts: '26',
  },
  {
    icon: <MdOutlineSupportAgent size={28} />,
    category: 'IT Support Specialist',
    posts: '07',
  },
  {
    icon: <SiGooglemarketingplatform size={28} />,
    category: 'Marketing Head',
    posts: '02',
  },
  {
    icon: <SiGamedeveloper size={28} />,
    category: 'App Developer',
    posts: '41',
  },
  {
    icon: <GrUserManager size={28} />,
    category: 'Project Manager',
    posts: '09',
  },
  {
    icon: <MdEngineering size={28} />,
    category: 'Software Engineer',
    posts: '11',
  },
  {
    icon: <VscAzureDevops size={28} />,
    category: 'DevOps Engineer',
    posts: '13',
  },
  {
    icon: <CiDatabase size={28} />,
    category: 'Data Scientist',
    posts: '06',
  },
  {
    icon: <GiCyberEye size={28} />,
    category: 'Cybersecurity Analyst',
    posts: '01',
  },
  {
    icon: <GrVirtualMachine size={28} />,
    category: 'AI/Machine Learning Engineer',
    posts: '19',
  },
  {
    icon: <FaCloud size={28} />,
    category: 'Cloud Solutions Architect',
    posts: '21',
  },
];

// Blogs
export const blogs = [
  {
    id: 1,
    date: '11 April, 2023',
    img: img26,
    title: 'Bridging Beauty and Function: The Art and Essence of Design',
    desc: `Design is a powerful and nuanced process that goes beyond mere aesthetics; it's about creating intentional and meaningful experiences. Whether it's crafting a visually stunning website, a user-friendly app, or a stylish product, design is the bridge that connects functionality with aesthetics, form with function. It involves understanding the needs and desires of the end user and translating those insights into a seamless and delightful solution. Effective design considers not just the visual elements, but also the user journey, accessibility, and the emotional response it evokes. It's a dynamic interplay of creativity, empathy, and problem-solving. Design is not just about making things look good; it's about making them work beautifully, creating a harmonious fusion of utility and elegance. In a world where first impressions matter, design is the silent storyteller that communicates brand identity and values. It's a language that speaks to the senses, influencing perceptions and shaping interactions. Whether in the digital realm or the tangible world, thoughtful and purposeful design has the power to enhance and elevate every aspect of our lives.`,
    content: [
      'You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.',
      'No previous design experience is needed.',
      'No previous Adobe XD skills are needed.',
    ],
  },
  {
    id: 2,
    date: '22 December, 2023',
    img: img20,
    title: 'Capturing Moments, Creating Stories: The Artistry of Photography',
    desc: `"Capturing Moments, Creating Stories" delves into the enchanting world where the click of a shutter transforms fleeting instants into everlasting tales. This blog explores the art and craft of photography, transcending the mere act of capturing images to unveil the profound storytelling embedded within each frame. Journey through the lens as we unravel the technical finesse, creative vision, and emotional resonance that define exceptional photography. From the intricate dance of light and shadow to the intricacies of composition, discover how photographers weave narratives that resonate with the soul. Join us in celebrating the magic of frozen moments and the power of images to transcend time, telling stories that linger in the hearts of those who view them.`,
    content: [
      'You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.',
      'No previous design experience is needed.',
      'No previous Adobe XD skills are needed.',
    ],
  },
  {
    id: 3,
    date: '17 February, 2023',
    img: img13,
    title: 'Beyond Buzzwords: Navigating the Dynamic Landscape of Marketing',
    desc: `"Beyond Buzzwords" is a comprehensive exploration of the ever-evolving realm of marketing, transcending the clichés to uncover the strategies and innovations that shape consumer landscapes. This blog dives deep into the dynamic interplay of data, creativity, and consumer psychology that defines successful marketing campaigns. From the digital corridors of social media to the traditional avenues of branding, discover how marketers navigate the changing tides of audience preferences, technological advancements, and societal shifts. Join us as we decode the art of storytelling, the science of analytics, and the human connection that lies at the heart of effective marketing. Whether you're a seasoned marketer or a curious observer, embark on a journey that demystifies the complexities of the marketing landscape, providing insights that inspire and strategies that resonate.`,
    content: [
      'You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.',
      'No previous design experience is needed.',
      'No previous Adobe XD skills are needed.',
    ],
  },
  {
    id: 4,
    date: '31 December, 2023',
    img: img30,
    title: 'Beyond Code: Navigating the Depths of Development',
    desc: `"Beyond Code" invites you on a deep dive into the multifaceted world of development, where lines of code transcend mere syntax to shape the future of technology. This blog explores the intricacies of software and web development, unraveling the challenges, triumphs, and innovative solutions that drive progress. From the foundations of programming languages to the frontiers of artificial intelligence, discover the evolving landscape where development becomes a dynamic force, molding the digital universe. Join us as we navigate the ever-changing currents of technology, exploring how development is not just about writing lines of code but creating pathways to innovation, efficiency, and a better tomorrow.`,
    content: [
      'You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.',
      'No previous design experience is needed.',
      'No previous Adobe XD skills are needed.',
    ],
  },
  {
    id: 5,
    date: '24 October, 2022',
    img: img4,
    title: 'Design Alchemy: Transforming Ideas into Experiences',
    desc: `"Design Alchemy" is a voyage into the mystical world where concepts and creativity converge, giving rise to the transformative magic of design. This blog unravels the secrets behind the art of turning raw ideas into immersive and captivating experiences. Explore the fusion of innovation and aesthetics, witnessing the alchemical process that breathes life into websites, apps, and tangible creations. From wireframes to the final masterpiece, embark on a journey that demystifies the design process, revealing the careful balance of intention, intuition, and ingenuity. Join us as we delve into the enchanting realm where ideas take shape, and design becomes the catalyst for turning the ordinary into the extraordinary.`,
    content: [
      'You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.',
      'No previous design experience is needed.',
      'No previous Adobe XD skills are needed.',
    ],
  },
];

// single job datas
export const requirements = [
  {
    text: 'Strong core experience of Javascript.',
  },
  {
    text: 'Strong Expertise in CodeIgniter Framework .',
  },
  {
    text: 'Understanding of MVC design pattern.',
  },
  {
    text: 'Expertise in PHP, MVC Frameworks and good technology exposure of Codeigniter .',
  },
  {
    text: 'Basic understanding of front-end technologies, such as JavaScript, HTML5, and CSS3',
  },
  {
    text: 'Good knowledge of relational databases, version control tools and of developing web services.',
  },
  {
    text: 'Proficient understanding of code versioning tools, such as Git.',
  },
];

export const skills = [
  {
    text: 'Role',
    position: 'UI/UX Designer',
  },
  {
    text: 'Industry',
    position: 'TypeAdvertising & Marketing',
  },
  {
    text: 'Functional Area',
    position: 'Engineering - Software',
  },
  {
    text: 'Employment Type',
    position: 'Full Time, Permanent',
  },
  {
    text: 'Role Category',
    position: 'DBA / Data warehousing',
  },
];
