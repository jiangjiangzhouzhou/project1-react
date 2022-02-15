import React from "react";
import styled from "styled-components";

const Box = styled.div`
background-color: #2B2B2B;
    width: 350px;
    height: 500px;
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
    
    &:hover{
        transform: translateY(-10px);
        transition: all ease 0.3s;
    }`

const ImgContanier = styled.div`
    width: 100%;
    height: 60%;`

const Type = styled.div`
    font-family: calibri;
    color: #FFFFFF;
    background-color: #151515;
    padding: 10px 130px;
    font-size: 18px;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);`

const Text = styled.div`
    width: 100%;
    height: 40%;
    background-color: #1e1e1e;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px; `

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;`

const Link = styled.a`
    margin: 0px;
    color: #FFFFFF;
    font-size: 1.1rem;
    font-family: calibri;
    display: block;
    display: -webkit-box;
    max-width: 80%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    
    &:hover{
        color: rgba(255, 255, 255, 0.5);
    }`
const Skill = ({type, image, message, content}) =>(
    <Box>
        <ImgContanier>
            <Type>{type}</Type>
            <Img src={image} alt={message}/>
        </ImgContanier>
        <Text>
            <Link href='#'>{content}</Link>	
        </Text>
    </Box>
)

export default Skill