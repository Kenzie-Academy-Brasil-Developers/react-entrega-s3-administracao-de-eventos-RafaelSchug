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
    border: 1px solid #a5a5a5;
    border-radius: 5px;
    box-shadow: 0 0 3px 1px #a5a5a5;

    img {
        height: 100px;
    }

    > button {
        background: red;
        color: white;
        width: 100%;
        height: 30px;
        border: none;
        font-weight: bold;
        cursor: pointer;
    }

    .add-to__container {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
        
        
        button {
            width: 100%;
            height: 30px;
            background: #778a86;
            color: white;
            border: none;
            font-weight: bold;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            cursor: pointer;
        }

        button:hover {
            background: #04ad4d;
        }


        button svg {
            transition: .1s linear;
        }
        
        button:active svg {
            transform: scale(1.3);
        }
    }

    


`