import styled from "styled-components";

export const Container = styled.header`

    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #c3c3c3;
    padding: 0 30px;
    gap: 10px;
    width: 100vw;

    ul {
        display: flex;
        height: 60px;
        gap: 10px;
    }

    ul li {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        cursor: pointer;
        position: relative;
        font-weight: bold;
        color: gray;
    }

    ul li:hover {
        color: black;
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