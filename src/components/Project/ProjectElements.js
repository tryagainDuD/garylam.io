import styled from 'styled-components'

export const ProjectContainer = styled.div`
    width: 100%;
    position: relative
`

export const ProjectTitle = styled.div`
    padding-top: 275px;
    color: #029fe8;
    font-size: 4.0rem;
    font-weight: bold;

    @media screen and (max-width: 576px) {
        padding-top: 100px;
        font-size: 3.5rem;
    }
`;

export const ProjectSmallTitle = styled.div`
    padding-top: 10px;
    padding-bottom: 8px;
    font: 2rem 'Open Sans', sans-serif;
    color: #fff;
    display: block;

    @media screen and (max-width: 576px) {
        font-size: 1.6rem;
    }
`

export const ProjectContent = styled.div`
    width: 40%;
    padding-top: 10px;
    font: 1.2rem 'Open Sans', sans-serif;
    color: #fff;
    display: inline;
    float: left;

    @media screen and (max-width: 576px) {
        font-size: 0.9rem;
    }
`;

export const ProjectVideoContainer = styled.div`
    display: inline-block;
    padding-left: 230px;
    transform: translateY(-60px)
`

export const ProjectVideoBg = styled.video`
    -o-object-fit: cover;
    object-fit: cover;
    background: #fff;
`