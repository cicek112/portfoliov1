import React, { useEffect } from 'react'
import styled from "styled-components"
import img1 from "./images/kart.png"
import Aos from "aos"
import "aos/dist/aos.css"

function Hakkımızda() {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <Main id='about'>
        <Text>
            <h3 data-aos="fade-up">About</h3>
            <p data-aos="fade-up" >I am a self-taught developer.I was the software leader at a
            robotic team . I coded the robot all myself in a
            language I dont know ( Java ) with a special
            library in 3 weeks. <br/>
            <br data-aos="fade-up"/>


                I am a fast learner and very ambitious person. I
                wont stop until I get what I want.I also prepare social content like banners , posts for the team.I design a website in figma for local business company and make it real.<br/>
                <br/>


                I was teaching python to my teammates and
                primary school kids. I am good at teamwork.


                I also a street musician who plays violin.I like
                music and reading books.I have one shelf sci-fi
                books.If you are wondering Seek And Destroy
                from Metallica is my favorite .</p>
        </Text>
        <img src={img1} data-aos="fade-up"  alt="" />
    </Main>
  )
}

export default Hakkımızda


const Main=styled.div`
    height:100vh;
    background-color:white;
    
    width:80%;
    margin:auto;

    display:flex;
    align-items:center;
    justify-content:space-between;


    img{
        width:350px;
    }

    @media only screen and (max-width:768px){
        height:80vh;
        img{
            width:100%;
            display:none;
        }

    }
`

const Text=styled.div`
    padding-right:10%;

    h3{
        font-size:2.5em;
        font-weight:700;
    }

    p{
        margin-top:2em;
    }

    @media only screen and (max-width:768px){
        text-align:center;
        padding:0;
    }

`