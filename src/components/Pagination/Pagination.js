import React from 'react'
import leftArrow from '../../images/paginationLeftArrow.png';
import RightArrow from '../../images/paginationRightArrow.png';
import './Pagination.scss';
import Dot from './Dot'; 

function Pagination() {
    return (
        <div className='pagination'>
            <img src={leftArrow} className='leftArrow'/>
            <Dot active='true'/>
            <Dot/>
            <Dot/>
            <img src={RightArrow} className='RightArrow'/>
        </div>
    )
}

export default Pagination