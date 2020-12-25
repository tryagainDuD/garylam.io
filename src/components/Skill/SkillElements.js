import styled from 'styled-components'

export const SkillTitle = styled.div`
    padding-top: 325px;
    color: #029fe8;
    font-size: 5.0rem;
    font-weight: bold;
`;

export const SkillContent = styled.div`
    padding-top: 30px;
    padding-bottom: 40px;
    font-size: 1.5rem;
    font-family: 'Open Sans', sans-serif;
    color: #fff;
`;

export const Span = styled.span`
    font-family: 'Open Sans', sans-serif;
`

export const PS = styled.div`
    padding-top: 100px;
    font: bold 1.1rem 'Open Sans', sans-serif;
    color: #b6b3b3;
`;

export const ChartContainer = styled.div`
    width: 100%;
    height: 900px;
    padding: 180px 150px 0px 100px;

    @media screen and (max-width: 2300px) {
        padding-top: 100px;
    }

    @media screen and (max-width: 768px) {
        height: 800px;
        padding: 225px 40px 0px 25px;
    }
`;

export const LegendsContainer = styled.div`
    width: 100%;
    padding: 0px 110px 0px 120px;
    margin-bottom: 40px;
    height: 50px;
    font-family: 'Open Sans', sans-serif;

    @media screen and (max-width: 2300px) {
        margin-bottom: 80px;
    }

    @media screen and (max-width: 1750px) {
        padding-right: 0px;
        padding-left: 60px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 85px;
        padding-right: 50px;
        padding-left: 85px;
    }
`;

export const Legends = styled.ul`
    width: 100%;
    height: 80px;
    list-style: none;
    font-family: 'Open Sans', sans-serif;
    flex-flow: row wrap;
    display: flex;
`;

export const Legend = styled.li`
    height: 25px;
    margin-right: 10px;
`;

export const ColorBlock = styled.div`
    padding-left: 18px;
    margin-right: 5px;
    height: 20px;
    border-radius: 2px;
    background-color: ${ props => props.color };
    display: inline;
`;

export const DotTitle = styled.span`
    width: 70px;
    font: bold 1rem 'Ubuntu';
    color: #d5d5d6;
`;