import React from 'react'
import ChatMessage from './ChatMessage';
import Partipicant7 from '../../images/partipicant7.png';
import Partipicant3 from '../../images/partipicant3.png';
import document from '../../images/document.png';
import './ChatMessages.scss'

function ChatMessages() {
    return (
        <div className='chatMessages'>
            <ChatMessage from='Marry' to='Everyone' time='05:32 PM' imgSrc={Partipicant7}>
                Hi there, how are you?
            </ChatMessage>
            <ChatMessage from='you' to='Everyone' time='05:32 PM' imgSrc={Partipicant3}>
                I am great, Thanks!<br />
                How are you?
            </ChatMessage>
            <ChatMessage from='Marry' to='Everyone' time='05:32 PM' imgSrc={Partipicant7}>
                Fine thanks. Can you send me my newest workout schedule?
            </ChatMessage>
            <ChatMessage from='you' to='Everyone' time='05:32 PM' imgSrc={Partipicant3} document='true'>
                <div className='document'>
                    <img src={document} />
                    <div className='documentDetail'>
                        <span className='name'>workout schedule.xlsx</span>
                        <span className='size'>43 Kb</span>
                    </div>
                </div>
            </ChatMessage>
        </div>
    )
}

export default ChatMessages