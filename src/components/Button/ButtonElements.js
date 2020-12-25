import styled from 'styled-components'

export const Btn = styled.a`
    position: relative;
    display: inline-block;
    font: bold 1.5rem "Montserrat";
    border: 3px solid #029fe8;
    text-transform: uppercase;
    letter-spacing: 10px;
    overflow: hidden;
    color: #babcbd;
    background-color: #141313;
    height: 100px;
    padding: ${ props => props.padding };
    cursor: pointer;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #babcbd;
    }

    @media screen and (max-width: 768px) {
        padding: 30px 150px;
    }
`;