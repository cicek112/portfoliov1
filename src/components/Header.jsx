import React, { useState } from 'react'
import styled from "styled-components"

import arka from './images/arka.png'

import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const [bar, setBar] = useState(false)
    
    function open (){
        setBar(!bar);
      
    }


  return (
    <Main>
        <Navbar>
            <h2 className='name'>Osman</h2>
            <ul className={bar?"acik":"kapali"} >
                <li><a href="#about">About</a></li>
                <li><a href="https://www.linkedin.com/in/osman-çiçek-60489621a/">Contact</a></li>
                <li><a href="#projects">Projects</a></li>
                
            </ul>

            

            <div><MenuIcon  fontSize="large" onClick={open}></MenuIcon></div>
            

        </Navbar>

        <Middle>
            
            <h1>Hi , Welcome to my personal <span>portfolio</span></h1>
            <h3>Osman Cicek</h3>
            <div className='buton'> <a href="https://www.linkedin.com/in/osman-çiçek-60489621a/">Contact</a></div>
        </Middle>
    </Main>
  )
}

export default Header


const Main =styled.div`
    
    height:100vh;
    background-image:
    linear-gradient(to bottom, rgba(56, 56, 56, 0.20), rgba(0, 0, 0, 0.20)),
    url('${arka}');

    background-position:center;
    
    background-size: cover;
    
    

`

const Navbar=styled.div`

width:80%;
margin:auto;
padding-top:1em;

display:flex;
align-items:center;
justify-content:space-between;

img{
    width:350px;
}

h2{
    color:#10C2E9;
}

ul{
    display:flex;
}

ul li a{
    color:white;
    text-decoration:none;
    margin-right:1em;
}

div{
    display:none;
}


    @media only screen and (max-width:768px){

        img{
            width:150px;
        }

        div{
            display:block;
            color:white;
        }

        ul{
            top:10%;
            width: 100vw;
            position: absolute;
            height:0;
            left: 0;
            right: 0;
            background-color: black;
            z-index:+1;
            color:white;
            transition: 0.2s;
            overflow: hidden;
            
            padding: 1em 0em ;
    
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            text-align: center;
            align-items: center;  
        }

        .acik{
            background-color:black;
            height:30vh;
            padding: 2em 0em ;
            transition-duration: 1s;
            transition-property: height;
            transition-timing-function:ease-out;
        }

        .kapali{
            padding: 0em 0em ;
            transition-duration: 1s;
            transition-property: height;
            height:0;
            
            
        }

        

        
    }

`

const Middle=styled.div`
    margin-top:2em;
   
    text-align:center;
    
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);

    color:white;

    h1{
        margin-top:-0.5em;
        margin-bottom:0.25em;
        font-weight:700;
        font-size:2.90em;
    }

    span{
        color:#0CE1EF;
    }

    h3{
        font-weight:300;
        font-size:1em;
    }

    .buton{
       
        padding:0.5em;
        width:20%;
        margin:auto;
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

    @media only screen and (max-width:768px){

        top:50%;
        width:100%;
        img{
            width:250px;
        }

        h1{
            margin-bottom:1em;
           
            font-size:2.2em;
        }
        h3{
            margin-bottom:2em;
            font-size:1em;
        }
        .buton{
            margin-top:3em;
            width:50%;
        }
    }

   
`