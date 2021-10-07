import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-top: -50px;
    padding: 20px 0;
    
    .input_content {

        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        
    }

    svg:hover {
        transform: scale(1.1)
    }
    
    svg {
        position: absolute;
        right: 10px;
        color: #ff0c0c;
        cursor: pointer;
        transition: .1s linear;
        font-size: 22px;
        
    }
    
    input {
        padding: 0 5px;
        padding-right: 30px;
        min-width: 250px;
        border: 5px double #e5e5e5;
        height: 40px;
        border-radius: 8px;
        outline: none;
        color: #252525;
    }

    input:focus {
        border-color: #b4b4b4;
    }

`