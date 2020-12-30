import styled from 'styled-components'

export const ContactTitle = styled.div`
    padding-top: 125px;
    color: #029fe8;
    font-size: 4.0rem;
    font-weight: bold;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 630px) {
        padding-top: 100px;
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

export const SendBtnContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`
