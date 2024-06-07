import React from 'react'
import ".././components/intro.css"


export default function Intro(props) {
  return (
    <div>
        <div className="intro">  
      <img alt='introimg' src={props.introimg}></img>
        <div className="intro-text">
            <h1>{props.heading}</h1>
            <p>{props.subhead}</p>
        </div>
    </div>
    
    </div>
    
  )
}
