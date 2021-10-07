import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 50px 20px;
    gap: 20px;
    max-width: 1300px;
    margin: 0 auto;

    @keyframes placeholder_anim {
        0% {
            opacity: 0;
            transform: scale(0.9);
        }
        80% {
            transform: scale(1.01);
        }
    }

    .placeholder {
        min-height: calc(100vh - 160px);
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        animation: placeholder_anim .3s 1 ease-in-out;
    }

    .placeholder h4 {
        color: #838383;
        font-variant: petite-caps;
    }

    .placeholder img{
        width: 100%;
        max-width: 300px;
        
    }

`