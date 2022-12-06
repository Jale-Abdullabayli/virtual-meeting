import React from 'react'
import './Header.scss';
import protect from '../../images/Protect.png';
import frame1 from '../../images/frame1.png'
import frame2 from '../../images/frame2.png'
import frame3 from '../../images/frame3.png'
import frame4 from '../../images/frame4.png'
import MenuList from '../MenuList/MenuList';


function Header() {
  return (
    <header>
      <img src={protect} alt='protect' />
      <ul className='menuItems'>
        <MenuList imgSrc={frame1} active='true'/>
        <MenuList imgSrc={frame2} />
        <MenuList imgSrc={frame3} />
        <MenuList imgSrc={frame4} />
      </ul>
      <div className='timer'>
        <div className='timerIcon'>
          <span></span>
        </div>
        <span className='timerText'>13:03:34</span>
      </div>
    </header>
  )
}

export default Header