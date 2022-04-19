import { RiComputerLine } from 'react-icons/ri'
import { FaDev, FaServer } from 'react-icons/fa'
import { MdDeveloperMode } from 'react-icons/md'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { GrStackOverflow } from 'react-icons/gr'
import { IProject, IService, ISkill } from './type'
import { BsCircleFill } from 'react-icons/bs'

export const services: IService[] = [
  {
    title: 'Frontend Dev',
    about: 'Html Css JavaScript ',
    Icon: RiComputerLine,
  },
  {
    title: 'Backend Dev',
    about: 'Backend',
    Icon: FaServer,
  },
  {
    title: 'Dev',
    about: 'Development & Testing',
    Icon: FaDev,
  },
  {
    title: 'UI/UX',
    about: 'TailwindCss',
    Icon: MdDeveloperMode,
  },
  {
    title: 'QA',
    about: 'Quality Assuarance',
    Icon: AiOutlineAntDesign,
  },
  {
    title: 'Full Stack',
    about: 'Fullstack',
    Icon: GrStackOverflow,
  },
]

export const languages: ISkill[] = [
  {
    name: 'Java',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'Reactjs',
    level: '50%',
    Icon: BsCircleFill,
  },
  {
    name: 'Nextjs',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'TailwindCss',
    level: '80%',
    Icon: BsCircleFill,
  },
  {
    name: 'J2ee',
    level: '60%',
    Icon: BsCircleFill,
  },
  {
    name: 'MySQL',
    level: '90%',
    Icon: BsCircleFill,
  },
]

export const tools: ISkill[] = [
  {
    name: 'Photoshop',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'After Effect',
    level: '65%',
    Icon: BsCircleFill,
  },
  {
    name: 'Premiere Pro',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'Video Editing',
    level: '80%',
    Icon: BsCircleFill,
  },
  {
    name: 'Audacity',
    level: '60%',
    Icon: BsCircleFill,
  },
  {
    name: 'YouCut',
    level: '90%',
    Icon: BsCircleFill,
  },
]

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Covid Tracker',
    description: 'Covid Tracker- Web & Mobile Application | Group Project',
    image_path: '/images/covid.jpg',
    deployed_url:
      'https://images.indianexpress.com/2020/03/Coronavirus-1200-12.jpg',
    github_url: 'https://github.com/DarshaniKaushalya',
    category: ['react'],
    key_techs: ['React', 'Node'],
  },

  {
    id: 2,
    name: 'University App',
    description: 'University App Mobile Application | Group Project',
    image_path: '/images/uni.jpg',
    deployed_url:
      'https://www.nsbm.ac.lk/wp-content/uploads/2019/08/nsbm-slider-0-1.jpg',
    github_url: 'https://github.com/DarshaniKaushalya',
    category: ['node'],
    key_techs: ['React', 'Node'],
  },

  {
    id: 3,
    name: 'Eduzone',
    description:
      'Educational App - Web & Mobile Application | Final Year Project ',
    image_path: '/images/edu.jpg',
    deployed_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltiFYDUcE7RwXrxJ-2UAkDX5wDXRXZkzGmhzqDqKShtgC3P0PBzleWVsXi7UWQHytLOg&usqp=CAU',
    github_url: 'https://github.com/DarshaniKaushalya',
    category: ['java'],
    key_techs: ['React', 'Node'],
  },

  {
    id: 4,
    name: 'University Accommodation App',
    description:
      'University Accommodation App - Web Application | Group Project',
    image_path: '/images/col.jpg',
    deployed_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalIGIc_efPA95XZvel9oYceUZjaodlHnaHw6oncMLmmENEaW91fn8MeP8Z_jsQVLTKoo&usqp=CAU',
    github_url: 'https://github.com/DarshaniKaushalya',
    category: ['java'],
    key_techs: ['React', 'Node'],
  },

  {
    id: 5,
    name: 'Distributed System',
    description:
      'Distributed System - Web & Mobile Application | Group Project',
    image_path: '/images/dis.jpg',
    deployed_url:
      'http://www.ejbtutorial.com/wp-content/uploads/2013/09/challenges-distributed-systems.png',
    github_url: 'https://github.com/DarshaniKaushalya',
    category: ['react'],
    key_techs: ['React', 'Node'],
  },

  {
    id: 6,
    name: 'MyProtfolio',
    description: 'MyProtfolio - Web Application | Solo Project',
    image_path: '/images/pot.jpg',
    deployed_url:
      'https://s3.theasianparent.com/cdn-cgi/image/width=1200,fit=crop/tap-assets-prod/wp-content/uploads/sites/25/2021/02/What-should-a-good-portfolio-consist-of-w-650x322.jpg',
    github_url: 'https://github.com/DarshaniKaushalya',
    category: ['php'],
    key_techs: ['React', 'Node'],
  },

  {
    id: 7,
    name: 'Cycle Rental App',
    description: 'Cycle Rental App - Mobile App | Group Project',
    image_path: '/images/cycle.jpg',
    deployed_url:
      'https://thumbs.dreamstime.com/b/bike-rental-smartphone-application-map-menu-vector-illustration-white-backgorund-230155221.jpg',
    github_url: 'https://github.com/DarshaniKaushalya',
    category: ['php'],
    key_techs: ['React', 'Node'],
  },
]
