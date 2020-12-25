import styled from 'styled-components'

export const AboutTitle = styled.div`
    padding-top: 325px;
    color: #029fe8;
    font-size: 5.0rem;
    font-weight: bold;
`;

export const AboutContent = styled.div`
    padding-top: 30px;
    padding-bottom: 40px;
    font: 1.5rem 'Open Sans', sans-serif;
    color: #fff;
`;

export const ProgramWrapper = styled.div`
    padding: 300px 0px 0px 70px;

    @media screen and (max-width: 1500px) {
        display: none;
    }

    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

export const FileName = styled.div`
    padding: 20px 0px 50px 0px;
    font: bold 2.5rem 'Consolas';
    color: #029fe8;

    @media screen and (max-width: 1800px) {
        font-size: 1.9rem;
    }
`;

export const Code = styled.div`
    padding-bottom: 10px;
    white-space: pre-wrap;
    font: bold 1.9rem 'Consolas';
    color: #a9aaac;

    @media screen and (max-width: 1800px) {
        font-size: 1.5rem;
    }
`;