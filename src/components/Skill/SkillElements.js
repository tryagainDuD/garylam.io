import styled from 'styled-components'

export const SkillTitle = styled.div`
    padding-top: 275px;
    color: #029fe8;
    font-size: 4.0rem;
    font-weight: bold;

    @media screen and (max-width: 576px) {
        padding-top: 120px;
        font-size: 3.5rem;
    }
`;

export const SkillContent = styled.div`
    padding-top: 30px;
    padding-bottom: 40px;
    font: 1.2rem 'Open Sans', sans-serif;
    color: #fff;

    @media screen and (max-width: 576px) {
        font-size: 0.9rem;
    }
`;

export const Span = styled.span`
    font-family: 'Open Sans', sans-serif;
`

export const PS = styled.div`
    padding-top: 100px;
    font: bold 0.9rem 'Open Sans', sans-serif;
    color: #b6b3b3;

    @media screen and (max-width: 576px) {
        padding-top: 40px;
        font-size: 0.7rem;
    }
`;

export const ChartContainer = styled.div`
    width: 100%;
    height: 750px;
    padding: 150px 100px 0px 50px;

    @media screen and (max-width: 1400px) {
        padding-top: 85px;
    }

    @media screen and (max-width: 768px) {
        height: 700px;
        padding: 125px 40px 0px 25px;
    }

    @media screen and (max-width: 576px) {
        height: 450px;
        padding: 30px 40px 0px 25px;
    }
`;

export const LegendsContainer = styled.div`
    width: 100%;
    padding: 0px 50px 0px 70px;
    margin-bottom: 50px;
    height: 50px;
    font-family: 'Open Sans', sans-serif;

    @media screen and (max-width: 1750px) {
        padding-right: 0px;
        padding-left: 60px;
    }

    @media screen and (max-width: 1400px) {
        margin-bottom: 50px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 85px;
        padding-right: 50px;
        padding-left: 85px;
    }

    @media screen and (max-width: 576px) {
        margin-bottom: 220px;
        padding-right: 30px;
        padding-left: 60px;
    }

`;

export const Legends = styled.ul`
    width: 100%;
    height: 60px;
    list-style: none;
    font-family: 'Open Sans', sans-serif;
    flex-flow: row wrap;
    display: flex;
`;

export const Legend = styled.li`
    height: 30px;
    margin-right: 10px;
`;

export const ColorBlock = styled.div`
    padding-left: 18px;
    margin-right: 5px;
    height: 40px;
    border-radius: 2px;
    background-color: ${ props => props.color };
    display: inline;
`;

export const DotTitle = styled.span`
    width: 70px;
    font: bold 0.8rem 'Ubuntu';
    color: #d5d5d6;
`;