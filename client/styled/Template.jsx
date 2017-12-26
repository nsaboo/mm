import React from 'react'
import styled, { css } from 'styled-components'


export const media = {
        handheld: (...args) => css`
                @media (max-width: 800px) {
                        ${ css(...args) }
                }
        `
};

export const Header = styled.header`
        text-align: center;
        font-size: 2em;
        font-family: 'Roboto', sans-serif;
`;

export const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        width: 80%;
        min-height: 80vh;
        ${media.handheld`
                width: 100%;
        `}
`;

export const Main = (props) => {
        return (
                <Container>
                        {props.children}
                </Container>
        )
};
