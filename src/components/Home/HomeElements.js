import styled, { keyframes } from 'styled-components'

// Animations
const letterFloatIn = keyframes`
    0% {
        display: none;
        transform: translate(-500px)
    }
    50% {
        display: inline-block;
        transform: translate(40px) rotate(10deg);
        transition: 0.8s ease-in-out;
    }
`

export const HomeContent = styled.div`
    height: 90px;
    color: #fff;
    font-size: 5rem;
    font-weight: bold;

    @media screen and (max-width: 1200px) {
        height: 80px;
        font-size: 4.5rem;
    }
`;

export const Slogan = styled.div`
    color: #9C9B9A;
    font-size: 1.5rem;
    font: 500 1.5rem "Consolas";
    padding: 225px 0px 170px 0px;

    @media screen and (max-width: 1200px) {
        height: 50px;
        padding-top: 250px;
        font-size: 1.1rem;
    }

    @media screen and (max-width: 768px) {
        padding-top: 250px;
    }
`;

export const BigSlogan = styled.div`
    transform: translateX(-120px);
    padding-top: 100px; 
    color: #029fe8;
    font-size: 10rem;
    font-style: italic;
    font-weight: bold;

    @media screen and (max-width: 1800px) {
        transform: translateX(-20px);
        padding-top: 180px;
        font-size: 8rem;
    }

    @media screen and (max-width: 1500px) {
        display: none;
    }

    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

export const Description = styled.div`
    padding-top: 75px;
    padding-bottom: 40px;
    color: #9C9B9A;
    font-size: 1.5rem;
    font: bold italic 1.5rem "Consolas";

    @media screen and (max-width: 1200px) {
        font-size: 1.1rem;
    }
`;

export const SpecialLetter = styled.span`
    display: inline-block;
    padding-right: 12px;
    font: 900 italic 8rem "Teko";
    color: #029fe8;
    animation-name: ${letterFloatIn};
    animation-duration: 1s;

    @media screen and (max-width: 768px) {
        font-size: 7rem;
    }
`;