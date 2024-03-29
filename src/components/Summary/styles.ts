import styled from "styled-components";

export const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--green);
            color: #fff;
        }
    }

    @media (max-width: 768px) {
        overflow-x: scroll;
        margin-right: -15px;
        padding-right: 15px;
        padding-bottom: 5px;
        
        ::-webkit-scrollbar {
            height: 8px;
            background-color: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background-color: var(--background);
            border-radius: 1rem;
        }
    }
`