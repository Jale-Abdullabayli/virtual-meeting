import React from 'react';
import checked from '../../images/checkedIcon.png';
import microfon from '../../images/microfonIcon.png';
import './Partipicant.scss'

function Partipicant(props) {
    return (
        <div className='col-md-3 partipicantCol'>
           <div className={props.active?'active partipicant':'partipicant'}>
           <img alt='profilImg' className='profilImg' src={props.imgSrc} />
            <div className='colFooter'>
                <div className='name'>
                    {props?.checked ? <img src={checked} alt='check' /> : ''}

                    <span>{props.name}</span>
                </div>
                {props?.microfon ?
                    <div className='microfon'>
                        <img src={microfon} alt='microfon' />
                    </div>
                    : ''}
            </div>
           </div>
        </div>
    )
}

export default Partipicant