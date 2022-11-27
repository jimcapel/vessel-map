import styled from "styled-components";

import { BACKGROUND_COLOUR, WHITE } from "../../../styles/styles";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${BACKGROUND_COLOUR};
    border-bottom-right-radius: 25px;
    padding-top: 1vh;
    padding-left: 1vw;
    padding-bottom: 1vh;
    padding-right: 1vw;
    position: absolute;
    top: 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 1;
`;

const Header = styled.header`
    color: ${WHITE};
    font-size: 24px;
`;

const Text = styled.div`
    color: ${WHITE};
    padding-top: 1vh;
`;

export { Wrapper, Header, Text };
