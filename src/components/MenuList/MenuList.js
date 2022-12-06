import React from 'react'
import './MenuList.scss';

function MenuList(props) {
  return (
    <li className={props?.active ? 'active' : ''}>
        <img src={props.imgSrc} alt='menuItem'/>
    </li>
  )
}

export default MenuList