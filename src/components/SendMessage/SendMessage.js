import React from 'react'
import './SendMessage.scss'
import RightArrow from '../../images/paginationRightArrow.png';
import documentIcon from '../../images/documentIcon.png';
import smileIcon from '../../images/smileIcon.png';
import sendIcon from '../../images/sendIcon.png';

function SendMessage() {
    return (
        <div className='sendMessage'>
            <div className='sendMessageTitle'>
                <div className='to'>
                    <span>Everyone</span>
                    <img src={RightArrow} className='RightArrow' />
                </div>
                <div className='icons'>
                    <img src={documentIcon} />
                    <img src={smileIcon} />
                </div>
            </div>
            <form className='sendMessageContent'>
                <input placeholder='Message to everyone...' />
                <button><img src={sendIcon} /></button>
            </form>
        </div>
    )
}

export default SendMessage