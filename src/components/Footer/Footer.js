import React from 'react'
import './Footer.scss';
import voice from '../../images/voice.png';
import voiceRange from '../../images/voiceRange.png';
import FooterOption from './FooterOption';
import Option1 from '../../images/option1.png';
import Option2 from '../../images/option2.png';
import Option3 from '../../images/option3.png';
import Option4 from '../../images/option4.png';
import Option5 from '../../images/option5.png';
import Option6 from '../../images/option6.png';
import Option7 from '../../images/option7.png';

function Footer() {
  return (
    <footer>
      <div className='voice'>
        <img src={voice} />
        <img src={voiceRange} />
      </div>
      <div className='options'>
        <FooterOption imgSrc={Option1} arrow='true' />
        <FooterOption imgSrc={Option2} arrow='true' />
        <FooterOption imgSrc={Option3} arrow='true' />
        <FooterOption imgSrc={Option4} arrow='true' active='true' />
        <FooterOption imgSrc={Option5} />
        <div className='line'></div>
        <FooterOption imgSrc={Option6} arrow='true' />
        <FooterOption imgSrc={Option7} arrow='true' />
      </div>
      <button className='leaveBtn'>
        Leave Meeting
      </button>
    </footer>
  )
}

export default Footer