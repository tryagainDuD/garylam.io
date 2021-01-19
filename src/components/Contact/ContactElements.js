import styled, { keyframes } from 'styled-components'
import { TiTick } from 'react-icons/ti'

const dotFloating = keyframes`
    50% {
        transform: translateY(-10px)
    }
    100% {
        transform: translateY(1px)
    }
`

const popup = keyframes`
    0% {
        transform: scale(1, 1)
    }
    50% {
        transform: scale(1.2, 1.2)
    }
    100% {
        transform: scale(1, 1)
    }
`

export const ContactTitle = styled.div`
    padding-top: 10vh;
    color: #029fe8;
    font-size: 4.0rem;
    font-weight: bold;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 1055px) {
        padding-top: 200px;
    }

    @media screen and (max-width: 630px) {
        padding-top: 50px;
        font-size: 3.5rem;
    }
`;

export const ContactText = styled.div`
    padding-top: 0px;
    padding-bottom: 25px;
    font: 1.2rem 'Open Sans', sans-serif;
    color: #fff;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 630px) {
        font-size: 0.9rem;
    }
`;

export const EmailForm = styled.form`
    height: 65%;
`

export const SendingModalContent = styled.div`
    display:  ${ props =>  {
        if (props.sent) return "none"
        else return "inline-block"  
    }};
    width: 100%;
    height: 100%;
`

export const SentModalContent = styled.div`
    display:  ${ props =>  {
        if (props.sent) return "inline-block"
        else return "none"  
    }};
    width: 100%;
    height: 100%;
`

export const SendingText = styled.span`
    color: #029fe8;
    font-size: 2.0rem;
    display: inline-block;
    padding-left: 20px;
    margin-right: 3px;
`

export const SentText = styled.span`
    color: #029fe8;
    font-size: 2.0rem;
    display: inline-block;
    padding-left: 20px;
    margin-right: 10px;
    animation: ${popup} 1s;
`

export const FirstDot = styled.span`
    color: #029fe8;
    font-size: 2.0rem;
    display: inline-block;
    animation: ${dotFloating} 0.8s infinite;
`

export const SecondDot = styled.span`
    color: #029fe8;
    font-size: 2.0rem;
    display: inline-block;
    animation: ${dotFloating} 0.8s infinite;
    animation-delay: 0.1s;
`

export const ThirdDot = styled.span`
    color: #029fe8;
    font-size: 2.0rem;
    display: inline-block;
    animation: ${dotFloating} 0.8s infinite;
    animation-delay: 0.2s;
`

export const Tick = styled(TiTick)`
    color: #029fe8;
    font-size: 2.0rem;
    display: inline-block;
    margin-bottom: 11px;
    animation: ${popup} 1s;
`

export const SendBtnContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`
