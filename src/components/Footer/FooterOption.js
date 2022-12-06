import React from 'react'
import './FooterOption.scss';
import upArrow from '../../images/upArrow.png';
import upArrowActive from '../../images/upArrowActive.png';

function FooterOption(props) {
    return (
        <div className={props?.active ? 'active footerOption' : 'footerOption'}>
            <img src={props.imgSrc} />
            {props?.arrow ? <img className='upArrow' src={props?.active ? upArrowActive : upArrow} /> : ''}
        </div>
    )
}

export default FooterOption