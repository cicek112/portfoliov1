import React, { useEffect } from 'react'
import styled from "styled-components"
import Aos from "aos"
import "aos/dist/aos.css"

import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';


function Salam() {
    
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
  return (
    <First>
            <Flex>
                <div className='Top'>
                    <h3 data-aos="fade-right">My Projects</h3>
                    <h2 data-aos="fade-right" >What have I done?</h2>
                </div>
                

                <p data-aos="fade-left">
                I have done a lot of
projects but
these are my
favorite.
                </p>

                
            </Flex>
        </First>
  )
}

export default Salam

const First=styled.div`
    background: #1D9EA6;
    flex:1;
    height:70vh;

    @media only screen and (max-width:768px){
        width:100%;
        height:50vh;
    }

    
`

const Flex=styled.div`
    padding:3.5em 0;
    height:100%;
    width:80%;
    margin:auto;
    color:white;
   
    display:flex;
    justify-content: space-between;
    flex-direction:column;

    .Top{
        h3{
            font-weight:300;
        }
        
    }

    p{
        width:90%;
        font-size:3.25em;
        font-weight:600;
    }

    .bottom a{
        color:white;
        text-decoration:none;
        display:flex;
        align-items:center;
        padding-left:24em;
        h3{
            font-weight:500;
            margin-right:0.25em;
            font-size:2em;
        }
    }


    @media only screen and (max-width:768px){

        padding:2em 0;

        p{
            font-size:2.5em;
            width:100%;
            margin:auto;
            text-align:center;
        }


        .bottom a{
            color:white;
            text-decoration:none;
            display:flex;
            align-items:center;
            flex-direction:column;
            padding:0;
            h3{
                font-weight:500;
                margin-right:0em;
                font-size:2em;
            }
        }
    

    }
`
