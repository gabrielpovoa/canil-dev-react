import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        text-transform: capitalize;
        transition: all .2s linear;
        outline: none;
        list-style: none;
        border: none;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        overflow-x: hidden;
    }
    body {
        background-color: #F6F6F6;
        color: #454545;
    }
`;