import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    border: 1px solid gray;
    padding: 10px;
    min-width: 220px;
    max-width: 220px;
    min-height: 350px;

    img {
        height: 100px;
    }

    .add-to__container {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
        
        
        button {
            width: 100%;
            height: 30px;
        }
    }


`