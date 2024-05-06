import React from 'react'
import './card.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Card(props) {
  return (
    <div className='card' style={{
        backgroundColor:props.color,
        color:props.textColor,
        borderRadius:props.boarderRadius
    }}>
        <div>
        <p>{props.text1}</p>
        <h3>{props.text2}</h3>
        </div>
        <div className='down-logo'><KeyboardArrowDownIcon/></div>
    </div>
  )
}

export default Card