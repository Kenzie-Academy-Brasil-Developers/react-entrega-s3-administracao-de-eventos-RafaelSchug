import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;


    .placeholder {
        min-height: calc(100vh - 100px);
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .placeholder h4 {
        color: #838383;
    }

    .placeholder img{
        width: 100%;
        max-width: 300px;
        
    }

`