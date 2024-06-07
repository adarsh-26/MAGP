import React from 'react'
import ".././components/fav.css"

export default function Fav(props) {
    const imgl=props.imgl 
    const chh=props.chh 
    const ch=props.ch 
    const csh=props.csh 
    const para=props.para 
  return ( 
    <div className='card'>  
        <div className='acard'>  
            <h2>{chh}</h2>  
            <svg className="star" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.2367 59.8292C46.1021 61.4256 32.4056 51.3062 29.7824 51.2839C27.1591 51.2619 13.3084 61.1485 11.1987 59.5163C9.089 57.884 14.0488 41.1189 13.2584 38.5002C12.468 35.8815 -0.793258 25.1449 0.037436 22.5398C0.868313 19.9347 17.6302 19.6927 19.7648 18.0964C21.8994 16.5002 27.5544 -0.0220275 30.1777 2.20494e-05C32.8008 0.0222633 38.2003 16.6378 40.31 18.2701C42.4197 19.9021 59.1758 20.4275 59.9664 23.0462C60.7568 25.6649 47.332 36.176 46.5012 38.7811C45.6705 41.3862 50.3713 58.2328 48.2367 59.8292Z" fill="#6E25A7"/>
</svg>  
        </div>  
        <div className='bcard'>  
            <div className="fav1">  
      <img alt='fav1img' src={imgl}></img>  
        <div className="fav1-text">  
            <h1>{ch}</h1>  
            <p>{csh}</p>  
        </div>  
    </div>    
            <div className='rcard'>
            <p>{para}</p>
            <button>See More</button>
            </div>
        </div>  
    </div>
  )
}
