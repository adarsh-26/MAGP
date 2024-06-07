
import React from 'react'
import Fav from "../components/fav";
import Intro from "../components/intro";
import "../components/fav.css"
import Footer from '../components/footer';


export default function page() {
    const img="./images/Photo.jpg"
    const imgl="./images/faq.jpg"
    const head="Favourites"
    const imgs= <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.942 36.8975C28.6613 37.8554 20.4433 31.7837 18.8694 31.7704C17.2955 31.7571 8.98504 37.6891 7.71922 36.7098C6.4534 35.7304 9.42928 25.6714 8.95504 24.1001C8.48079 22.5289 0.524045 16.0869 1.02246 14.5239C1.52099 12.9608 11.5781 12.8156 12.8589 11.8578C14.1396 10.9001 17.5326 0.986784 19.1066 1.00001C20.6805 1.01336 23.9202 10.9827 25.186 11.962C26.4518 12.9413 36.5055 13.2565 36.9799 14.8277C37.4541 16.3989 29.3992 22.7056 28.9007 24.2687C28.4023 25.8317 31.2228 35.9397 29.942 36.8975Z" stroke="#868D98"/>
    </svg>
    const para1="Click "
    const subh="Sit pellentesque laoreet sit malesuada pharetra cras. Diam nunc tellus nulla egestas felis amet. Gravida eu egestas adipiscing suspendisse ut fermentum quam tincidunt."
    const para2=" to add or remove Favorites"
    const ch="Preface and Objectives"
    const chh="Preface"
    const csh="of Procurement Manual"
    const para="This Procurement Manual is a new edition of the Procurement Policies, Procedures & Guidelines (3rd Edition, January 2008) or widely known as 3Ps. The purpose of this new edition of Procurement Manual remains as in the previous editions that is to create standard policies and procedures in all procurement activities throughout Malaysia Airports Group of Companies. It lays out the policies and procedures for raising business cases, developing annual procurement plans, raising requisitions, sourcing quotations and proposals, managing tenders, contract administration and vendor management........."
  return (
    <div>
    <Intro heading={head}
          subhead={subh} introimg={img}>

          </Intro>
    <div className='mid'>
    <h1>{head}</h1>
    <p>{para1}{imgs}{para2}</p>
    </div>
    <div className='cards'>
    <Fav chh={chh} ch={ch} csh={csh} para={para} imgl={imgl}></Fav>
    <Fav chh={chh} ch={ch} csh={csh} para={para} imgl={imgl}></Fav>

    </div>
    <Footer></Footer>
    </div>

  )
}
