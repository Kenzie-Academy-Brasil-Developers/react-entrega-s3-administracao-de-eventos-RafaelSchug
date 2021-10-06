import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    border: 1px solid gray;
    padding: 10px;
    width: 220px;
    min-height: 350px;
    border: 1px solid #f7f7f7;
    border-radius: 5px;
    box-shadow: 0px 0px 4px 2px #d7d5d5;

    img {
        height: 100px;
    }

    > button {
        background: #f1f1f1;
        color: #848484;
        border-radius: 6px;
        width: 100%;
        height: 30px;
        border: none;
        font-weight: bold;
        cursor: pointer;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    > button:hover {
        background: linear-gradient(90deg, #f7891e, #ff3a3a);
        color: #f1f1f1;
    }

    > button svg {
        transition: transform .1s linear;
    }
        
    > button:active svg {
        transform: scale(1.3);
    }

    .add-to__container {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
        
        
        button {
            width: 100%;
            height: 30px;
            background: #f1f1f1;
            color: #848484;
            border: none;
            font-weight: bold;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            cursor: pointer;
            padding: 0 10px;
            border-radius: 6px;

        }

        button:hover {
            background: linear-gradient(75deg, #7cdd9e, #6bc5c9);
            color: #f1f1f1;
        }


        button svg {
            transition: transform .1s linear;
        }
        
        button:active svg {
            transform: scale(1.3);
        }
    }

    


`