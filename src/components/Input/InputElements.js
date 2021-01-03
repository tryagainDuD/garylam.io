import styled from 'styled-components'

export const Input = styled.input`
    background-color: #292929;
    padding-left: 30px;
    width: ${ props => props.width };
    height: 13%;
    display: ${ props => props.display };
    margin-bottom: 20px;
    float: ${ props => props.float };
    color: #b6b3b3;
    -webkit-text-fill-color: #b6b3b3;
    -webkit-box-shadow: 0 0 0 100px #292929 inset !important;
    border: none;
    border-bottom: 3px solid #b6b3b3;
    font-size: 1.5rem;
    font-weight: bold;
    transition: 0.3s ease-in-out;

    &:focus {
        border-bottom: 3px solid #029fe8;
        outline: none;
        color: #029fe8;
        -webkit-text-fill-color: #029fe8;
    }

    @media screen and (max-width: 1055px) {
        padding-left: 15px; 
        height: 7%;
        font-size: 0.8rem;
    }

`

export const TextArea = styled.textarea`
    background-color: #292929;
    padding-top: 15px;
    padding-left: 30px;
    margin-bottom: 50px;
    width: ${ props => props.width };
    height: ${ props => props.height };
    color: #b6b3b3;
    -webkit-text-fill-color: #b6b3b3;
    border: none;
    border-bottom: 3px solid #b6b3b3;
    font-size: 1.5rem;
    font-weight: bold;
    transition: 0.3s ease-in-out;
    display: ${ props => props.display };

    &:focus {
        border-bottom: 3px solid #1eb1f5;
        outline: none;
        color: #029fe8;
        -webkit-text-fill-color: #029fe8;
    }

    @media screen and (max-width: 1055px) {
        padding-left: 15px; 
        height: 17%;
        font-size: 0.8rem;
    }

`