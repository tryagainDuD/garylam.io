import styled, { keyframes } from 'styled-components'

const logoSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const FooterContainer = styled.div`
    width: 100%;
    height: 200px;
`;

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-flow: row wrap;

    @media screen and (max-width: 768px) {
        padding-top: 50px;
        height: 70%;
    }
`;

export const CopyrightContent = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    color: #b6b3b3;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const FrameworkText = styled.div`
    font-weight: bold;
    font-size: 1rem;
    color: #b6b3b3;
    display: block;

    @media screen and (max-width: 768px) {
        font-size: 0.5rem;
    }
`;

export const FrameworkLogo = styled.img`
    display: block;
    height: 100px;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${logoSpin} infinite 20s linear;
    }

    @media screen and (max-width: 768px) {
        height: 65px;
    }
`;

export const SocialLink = styled.a`
    font-size: 2rem;
    color: #b6b3b3;
    margin-right: 20px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`;