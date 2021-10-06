import styled from "styled-components";

export const Container = styled.header`

    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 60px;
    box-shadow: 0px 2px 2px 0px #d4d4d4;
    padding: 0 30px;
    gap: 10px;
    width: 100%;

    ul {
        display: flex;
        align-items: center;
        height: 60px;
        gap: 10px;
        filter: hue-rotate(285deg);
    }

    ul li {
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        cursor: pointer;
        position: relative;
        font-weight: bold;
        color: #535353;
        padding: 0 10px;
    }

    ul li:hover {
        color: #252525;
    }

    li.selected {
        box-shadow: inset 0 0 4px 0px #8a8a8a;
        border-radius: 4px;
        color: #252525;
    }

    /* ul li::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 4px;
        background: black;
        width: 2%;
        margin: 0 auto;
        transition: .2s linear;
    }

    ul li:hover::after {
        width: 100%;
    } */

    img {
        height: 30px;
    }

`