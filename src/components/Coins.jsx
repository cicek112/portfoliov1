import React, { useEffect } from 'react'
import styled from "styled-components"

import avax from "./images/react2.png"
import acoin from "./images/js.png"
import ethereium from "./images/redux.png"
import koin from "./images/figma.png"
import mcoin from "./images/css.png"
import tail from "./images/tailwind.png"
import Aos from "aos"
import "aos/dist/aos.css"

import figma from "./images/figma.png"

function Coins() {
    useEffect(()=>{
        Aos.init({duration:500})
    },[])
  return (
    <Main>
        <h2 data-aos="fade-down">Technologies I Skilled</h2>
        <div className='coins' data-aos="fade-up">
            <img src={avax} alt="" />
            <img src={acoin} alt="" />
            <img src={ethereium} alt="" />
            <img  className='bg' src={koin} alt="" />
            <img className='bg' src={mcoin} alt="" />
            <img className='bg' src={tail} alt="" />
            
        </div>
        <div className='buton'> <a href="https://www.linkedin.com/in/osman-çiçek-60489621a/">Contact</a></div>
    </Main>
  )
}

export default Coins


const Main = styled.div`
    height:57vh;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-direction:column;


    h2{
        font-weight:700;
        font-size:2.25em;
    }

    @media only screen and (max-width:768px){
        h2{
            text-align:center;
        }
    }

    .coins{
        display:flex;
        align-items:center;
        justify-content:space-evenly;
        background: linear-gradient(270deg, #E8E8E8 0%, rgba(216, 216, 216, 0) 12.36%),
        linear-gradient(90deg, #EBEBEB -8.24%, rgba(223, 223, 223, 0) 9.17%);
        width:100%;

        @media only screen and (max-width:768px){
            flex-wrap: wrap;
            padding:0 1em;
            img{
                margin-top:1em;
                width:90px;
            }
        }
    }

    img{
        width:100px;
    }

    

    .buton{
       
        padding:0.5em;
        width:20%;
        
        margin-top:1em;
        background: #10C2E9;
        border-radius:10px;
        text-align:center;
        
        a{
            color:white;
            text-decoration:none;
            font-weight:700;
            font-size:1.2em;
        }
    }

    .bg{
        width:120px
    }


    @media only screen and (max-width:768px){
        height:72vh;
        .buton{
            width:50%;
        }
    }

    
`