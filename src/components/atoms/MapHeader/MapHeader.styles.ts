import styled from "styled-components";

import { BACKGROUND_COLOUR, WHITE } from "../../../styles/styles";

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${BACKGROUND_COLOUR};
    padding-top: 1vh;
    padding-bottom: 1vh;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
`;

const Logo = styled.img`
    width: 32px;
    height: 32px;
`;

const HeaderText = styled.header`
    color: ${WHITE};
    padding-left: 1vw;
    font-size: 24px;
`;

export { Wrapper, Container, Logo, HeaderText };
