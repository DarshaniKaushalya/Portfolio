import {RiComputerLine} from 'react-icons/ri'
import {FaDev, FaServer} from 'react-icons/fa'
import {MdDeveloperMode} from 'react-icons/md'
import { AiOutlineAntDesign,AiOutlineApi } from 'react-icons/ai'
import {GrStackOverflow} from 'react-icons/gr'
import { IService, ISkill } from './type'
import {BsCircleFill} from 'react-icons/bs'


export const services:IService[] = [
    {
        title: 'Frontend Dev',
        about:'Html Css JavaScript ',
        Icon: RiComputerLine,

    },
    {
        title:'Backend Dev',
        about:'Backend',
        Icon: FaServer,

    },
    {
        title: 'Dev',
        about:'Development & Testing',
        Icon: FaDev,

    },
    {
        title:'UI/UX',
        about:'TailwindCss',
        Icon: MdDeveloperMode,

    },
    {
        title: 'QA',
        about:'Quality Assuarance',
        Icon: AiOutlineAntDesign,

    },
    {
        title:'Full Stack',
        about:'Fullstack',
        Icon: GrStackOverflow,

    },
]

export const languages: ISkill[] = [
  
    {
        name:'Java',
        level:'70%',
        Icon: BsCircleFill,
    },
    {
        name:'Reactjs',
        level:'50%',
        Icon: BsCircleFill,
    },
    {
        name:'Nextjs',
        level:'70%',
        Icon: BsCircleFill,
    },
    {
        name:'TailwindCss',
        level:'80%',
        Icon: BsCircleFill,
    },
    {
        name:'PHP',
        level:'60%',
        Icon: BsCircleFill,
    },
    {
        name:'MySQL',
        level:'90%',
        Icon: BsCircleFill,
    },
]

export const tools: ISkill[] = [
  
    {
        name:'Photoshop',
        level:'70%',
        Icon: BsCircleFill,
    },
    {
        name:'Affter Effect',
        level:'65%',
        Icon: BsCircleFill,
    },
    {
        name:'Premiere Pro',
        level:'70%',
        Icon: BsCircleFill,
    },
    {
        name:'Video Editing',
        level:'80%',
        Icon: BsCircleFill,
    },
    {
        name:'Art',
        level:'60%',
        Icon: BsCircleFill,
    },
    {
        name:'Singing',
        level:'90%',
        Icon: BsCircleFill,
    },
]