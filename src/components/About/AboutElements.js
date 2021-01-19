import styled from 'styled-components'

export const AboutTitle = styled.div`
    padding-top: 30vh;
    color: #029fe8;
    font-size: 4.0rem;
    font-weight: bold;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
        padding-top: 150px;
        font-size: 3.5rem;
    }

    @media screen and (max-width: 576px) {
        padding-top: 100px;
        font-size: 3.5rem;
    }
`;

export const AboutContent = styled.div`
    padding-top: 30px;
    padding-bottom: 40px;
    font: 1.2rem 'Open Sans', sans-serif;
    color: #fff;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 576px) {
        font-size: 0.9rem;
    }
`;

export const ProgramWrapper = styled.div`
    padding: 240px 0px 0px 120px;

    @media screen and (max-width: 1500px) {
        display: none;
    }

    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

export const FileName = styled.div`
    padding: 20px 0px 50px 0px;
    font: bold 2rem 'Consolas';
    color: #029fe8;

    @media screen and (max-width: 1800px) {
        font-size: 1.9rem;
    }
`;

export const Code = styled.div`
    padding-bottom: 10px;
    white-space: pre-wrap;
    font: bold 1.5rem 'Consolas';
    color: #a9aaac;

    @media screen and (max-width: 1800px) {
        font-size: 1.5rem;
    }
`;