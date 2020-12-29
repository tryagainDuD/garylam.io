import styled from 'styled-components'

export const ProjectContainer = styled.div`
    width: 100%;
    position: relative;
    display: none;
`
export const ProjectTitle = styled.div`
    padding-top: 175px;
    margin-bottom: 10px;
    color: #029fe8;
    font-size: 4.0rem;
    font-weight: bold;

    @media screen and (max-width: 576px) {
        padding-top: 100px;
        font-size: 3.5rem;
    }

    @media screen and (max-width: 1540px) {
        padding-top: 80px;
    }
`;

export const ProjectSmallTitle = styled.div`
    padding-top: 40px;
    padding-bottom: 8px;
    font: bold 2rem 'Open Sans', sans-serif;
    color: #fff;
    display: block;

    @media screen and (max-width: 855px) {
        font-size: 1.3rem;
    }
`

export const ProjectContent = styled.div`
    width: 40%;
    padding-top: 10px;
    font: 1.2rem 'Open Sans', sans-serif;
    color: #fff;
    display: inline;
    float: left;

    @media screen and (max-width: 1540px) {
        width: 100%;
        display: block;
    }

    @media screen and (max-width: 855px) {
        font-size: 1.0rem;
    }

`;

export const ArrayBarContainer = styled.div`
    width: 50%;
    height: 30px;
    display: block;
`

export const SquareBracket = styled.div`
    color: #b6b3b3;
    font-size: 2rem;
    display: inline;
    margin: ${ props => {
        if (props.isLeftBracket) { return '0px 20px 0px 0px' }
        else { return '0px 0px 0px 20px' }
    }};
`

export const ArrayIndex = styled.a`
    color: #b6b3b3;
    font-size: 2rem;
    display: inline;
    border-radius: 5px;
    padding: 0px 10px 3px 10px;
    cursor: pointer;
    box-sizing: content-box;
    transition: 0.3s ease-in-out;

    &:hover {
        text-decoration: none;
        background-color: #029fe8; 
        transition: 0.1s ease-in-out;
    }

`
export const Comma = styled.span`
    color: #b6b3b3;
    font-size: 2rem;
    padding-right: 10px;
    padding-left: 10px;
    cursor: default;
`

export const ProjectVideoContainer = styled.div`
    display: inline-block;
    padding-left: 200px;

    @media screen and (max-width: 1640px) {
        padding-left: 130px;
    }

    @media screen and (max-width: 1540px) {
        display: block;
        padding-left: 0px;
        padding-bottom: 50px;
    }

    @media screen and (max-width: 855px) {
        width: 100%;
        height: 100%;
    }
`

export const ProjectVideoBg = styled.video`
    -o-object-fit: cover;
    object-fit: cover;
    background: #fff;
    transform: translateY(-65px);

    @media screen and (max-width: 1540px) {
        transform: translateY(30px);
    }

    @media screen and (max-width: 855px) {
        width: 100%;
        height: 100%;
    }

`