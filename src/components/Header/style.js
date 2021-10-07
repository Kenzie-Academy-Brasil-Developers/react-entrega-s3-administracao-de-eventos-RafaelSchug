import styled from "styled-components";

export const Container = styled.header`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    box-shadow: 0px 2px 2px 0px #d4d4d4;
    padding: 0 30px;
    gap: 10px;
    width: 100%;
    position: fixed;
    top: 0;
    background: white;

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
        border-radius: 8px;
        position: relative;
    }

    ul li:hover {
        color: #252525;
        box-shadow: inset 0 0 4px 0px #cac8c8;
    }

    li.selected {
        box-shadow: inset 0 0 4px 0px #8a8a8a!important;
        color: #252525;
    }

    ul li .list_counter {
        position: absolute;
        top: 0;
        right: 0;
        pointer-events: none;
        width: 30px;
        line-height: 20px;
        background: #c170ff;
        border-radius: 4px;
        color: white;
        font-size: 14px;
    }

    img {
        height: 30px;
    }


    @media screen and (max-width: 650px){
        ul li span {
            display: none;
        }
    }

`