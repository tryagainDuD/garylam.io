import styled from 'styled-components'

export const ContentContainer = styled.div`
    margin-left: 80px;
    display: block;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px) {
        margin-left: 0px;
    }
`;

export const BlankArea = styled.div`
    width: 100%;
    height: 150px;
`