import React, { FunctionComponent } from 'react'
import { Category } from '../type'

export const NavItem: FunctionComponent<{
  value: Category | 'all'
  handlerFliterCategory: Function
  active: string
}> = ({ value, handlerFliterCategory, active }) => {
  let className = 'capitalize cursor-pointer hover:text-lime-500'

  if (active === value) className += ' text-lime-500'

  return (
    <li className={className} onClick={() => handlerFliterCategory(value)}>
      {value}
    </li>
  )
}

const ProjectNavbar: FunctionComponent<{
  handlerFliterCategory: Function
  active: string
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props}></NavItem>
      <NavItem value="react" {...props}></NavItem>
      <NavItem value="node" {...props}></NavItem>
      <NavItem value="java" {...props}></NavItem>
      <NavItem value="php" {...props}></NavItem>
    </div>
  )
}

export default ProjectNavbar
