import {RiComputerLine} from 'react-icons/ri'
import {FaDev, FaServer} from 'react-icons/fa'
import {MdDeveloperMode} from 'react-icons/md'
import { AiOutlineAntDesign,AiOutlineApi } from 'react-icons/ai'
import {GrStackOverflow} from 'react-icons/gr'
import { IService } from './type'


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