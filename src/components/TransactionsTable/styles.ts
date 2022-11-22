import styled from "styled-components";

export const Container = styled.div `
    margin-top: 4rem;
    
    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }

        @media (max-width: 530px) {
            th {
                display: none;
            }

            td {
                display: grid;
        
                font-size: 1.1rem;

                &:first-child {
                    margin-bottom: -1.8rem;
                }

                &.deposit {
                    font-size: 2rem;
                }

                &.withdraw {
                    font-size: 2rem;
                }

                &:last-child {
                    text-align: right;
                    margin-top: -3.5em;
                    margin-bottom: 1em;
                }
            }
        }
    }
`