import React from 'react'
import './Dot.scss';

function Dot(props) {


  

  return (
    <div className={props?.active?'active ':'dot g'}></div>
  )
}

export default Dot