import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Rubik;
    src: url('https://fonts.google.com/specimen/Rubik?query=rubik#standard-styles');
    font-weight: normal;
    margin: 0;
    /*cursor: url("Cursor.png"), auto;*/
    cursor: none;
}

p,
h1,
h2 {
    z-index: 1000;
    position: relative;
}

.button {
    color: white;
    background-color: #006eff;
    width: 50%;
    min-height: 35px;
    border-radius: 20px;
    font-size: 18px;
    font-family: Rubik;
    padding: 0.25rem 0;
    border: none;
    margin-top: 1rem;
    margin-bottom: 2rem;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
}

.color-animation {
    animation: color-change linear 3s infinite;
}

.color-animation-button {
    animation: color-change-button linear 3s infinite;
}

@font-face {
    font-family: Masqualero;
    src: url("Masqualero.otf") format("opentype");
}

@font-face {
    font-family: "Rubik";
    src: url("Rubik-Regular.ttf") format("truetype");
}

@keyframes color-change {
    0%,
    34% {
        color: #e7346b;
    }
    35%,
    64% {
        color: #ed7b23;
    }
    65%,
    99% {
        color: #9f4c99;
    }
    100% {
        color: #e7346b;
    }
}

@keyframes color-change-button {
    0%,
    34% {
        background-color: #e7346b;
    }
    35%,
    64% {
        background-color: #ed7b23;
    }
    65%,
    99% {
        background-color: #9f4c99;
    }
    100% {
        background-color: #e7346b;
    }
}
`