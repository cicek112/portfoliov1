import React, { useEffect } from 'react'
import styled from "styled-components"
import img1 from "./images/tesla.png"

import img3 from "./images/earth.png"
import img4 from "./images/elipse.png"
import img5 from "./images/sushi.png"
import img6 from "./images/cry.png"
import img7 from "./images/portfolio.png"
import talent from "./images/food.png"

import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Aos from "aos"
import "aos/dist/aos.css"


function Three() {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <Main id="projects">
        <Mother>
            <Su img = {img5} data-aos="fade-up">
                <div className='high'>
                    <h3><a href="https://glittering-gnome-e4fee4.netlify.app/">Live</a></h3>
                    <h3><a href="https://github.com/cicek112/sushistore">Code</a></h3>
                    
                    
                </div>
                
                <div>
                    <h4>A landing page</h4>
                    <h2>Sushi Shop with Animations & Git</h2>
                </div>
            </Su>
    
            <Su img = {img6} data-aos="fade-up">
                <div className='high'>
                    <h3><a href="https://fabulous-gecko-53af41.netlify.app/">Live</a></h3>
                    <h3><a href="https://github.com/cicek112/crypto-app">Code</a></h3>
                
                </div>
                
                <div>
                    <h4>A website for viewing crypto news,stats and price history chart.</h4>
                    <h2>Crypto Website with Rest API & Chart Js</h2>
                </div>
            </Su>

            
        </Mother> 
        
        <Resim className='resim'><img src={img4} alt="" /></Resim>
        <Mother>
            <Su img = {img1} data-aos="fade-up">
                <div className='high'>
                    <h3><a href="https://helpful-cendol-883f06.netlify.app/">Live</a></h3>
                    <h3><a href="https://github.com/cicek112/TeslaClone">Code</a></h3>
                    
                    
                </div>
                
                <div>
                    <h4>tesla.com clone</h4>
                    <h2>Tesla Clone with React & Redux & Material UI</h2>
                </div>
            </Su>
            
            

{/* asdfıoasdf */}
            <Su img = {talent} className='ma' data-aos="fade-up">
                <div className='high'>
                    <h3><a href="https://cicek112.github.io/food">Live</a></h3>
                    <h3><a href="https://github.com/cicek112/food">Code</a></h3>
                   
                </div>
                
                <div>
                    <h4>I always wonder what can I cook with the last food </h4>
                    <h2>A Meal Finder with TailwindCss & React </h2>
                </div>
            </Su>

        </Mother> 
    </Main>
  )
}

export default Three

const Main=styled.div`
    height:100vh;
    
    display:flex;

    @media only screen and (max-width:768px){
        margin-top:0em;
        display:block;
        height:auto;
        
        
        
    }
    
`



const Resim=styled.div`
    z-index:0;
    opacity:0.7;
    position:absolute;
    left:35%;
    top:195%;
    transform: rotate(70deg);
    img{
        width:400px;
    }

    @media only screen and (max-width:768px){
        top:180%;
        left:0;
        img{
            width:300px;
        }
    }

`


const Mother=styled.div`
    height:100vh;
    flex:1;
    width:100%;
    display:flex;
    
    flex-direction:column; 
`

const Su=styled.div`


    background-image:url(${props=>props.img});
    
    background-position: center;
    background-size: cover;
    flex:1;
    display:flex;
    justify-content:space-between;
    flex-direction:column;

    color:white;
    padding:1.25em;

    .high{
        display:flex;
        align-items:center;
        flex-direction:column;
        height:30%;
        justify-content:space-between;
        margin-left:80%; //AYARLANACAK
    }
    
    .higher{
        height:50%
    }


    h3 a{
        
        font-weight:600;
        color:white;
        text-decoration:none;
        
        color:white;
        padding:0.1em 1em;
        
        border:1px solid lightgray;
    }

    
    
    h4{
        font-weight:500;
    }

    .ma{
        margin-bottom:1em;
    }


    @media only screen and (max-width:768px){
        .high{
            margin-left:70%;
        }
    }


`
