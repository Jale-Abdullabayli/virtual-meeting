import React from 'react'
import './Main.scss';
import Partipicants from '../Partipicants/Partipicants';
import Pagination from '../Pagination/Pagination';

function Main() {
  return (
    <div className='main'>
     <Partipicants/>
     <Pagination/>
    </div>
  )
}

export default Main