import React from 'react'
import Partipicant from './Partipicant';
import Partipicant1 from '../../images/partipicant1.png';
import Partipicant2 from '../../images/partipicant2.png';
import Partipicant3 from '../../images/partipicant3.png';
import Partipicant4 from '../../images/partipicant4.png';
import Partipicant5 from '../../images/partipicant5.png';
import Partipicant6 from '../../images/partipicant6.png';
import Partipicant7 from '../../images/partipicant7.png';
import Partipicant8 from '../../images/partipicant8.png';
import Partipicant9 from '../../images/partipicant9.png';
import Partipicant10 from '../../images/partipicant10.png';
import Partipicant11 from '../../images/partipicant11.png';
import Partipicant12 from '../../images/partipicant12.png';
import Partipicant13 from '../../images/partipicant13.png';
import Partipicant14 from '../../images/partipicant14.png';
import Partipicant15 from '../../images/partipicant15.png';
import Partipicant16 from '../../images/partipicant16.png';

import './Partipicants.scss';


function Partipicants() {
    return (
        <div className='partipicants'>
            <div className='row partipicantsRow'>
                <Partipicant imgSrc={Partipicant1} name='Natura' checked='true' microfon='true'/>
                <Partipicant imgSrc={Partipicant2} name='Cecile' checked='true' active='true'/>
                <Partipicant imgSrc={Partipicant3} name='Nico'/>
                <Partipicant imgSrc={Partipicant4} name='Bryan' microfon='true'/>
                <Partipicant imgSrc={Partipicant5} name='Azzura'  microfon='true'/>
                <Partipicant imgSrc={Partipicant6} name='Ahmed'  microfon='true'/>
                <Partipicant imgSrc={Partipicant7} name='Marry' />
                <Partipicant imgSrc={Partipicant8} name='Diana'/>
                <Partipicant imgSrc={Partipicant9} name='Lucas' />
                <Partipicant imgSrc={Partipicant10} name='Mike' microfon='true'/>
                <Partipicant imgSrc={Partipicant11} name='Daniel' microfon='true'/>
                <Partipicant imgSrc={Partipicant12} name='Shandy'  microfon='true'/>
                <Partipicant imgSrc={Partipicant13} name='Stephany'  microfon='true'/>
                <Partipicant imgSrc={Partipicant14} name='Robert'  microfon='true'/>
                <Partipicant imgSrc={Partipicant15} name='Lily'  microfon='true'/>
                <Partipicant imgSrc={Partipicant16} name='Michael' microfon='true'/>
            </div>
        </div>
    )
}

export default Partipicants