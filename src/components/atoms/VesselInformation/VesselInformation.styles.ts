import styled from "styled-components";

import { BACKGROUND_COLOUR, WHITE } from "../../../styles/styles";

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 1;
    background-color: ${BACKGROUND_COLOUR};
    margin-left: auto;
    padding-left: 1vw;
    padding-right: 1vw;
    padding-top: 1vh;
    border-bottom-left-radius: 25px;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Header = styled.header`
    color: ${WHITE};
    font-size: 24px;
`;

const HistoryOptionContainer = styled.div`
    display: flex;
    justify-content: "column";
    align-items: "center";
`;

const HistoryText = styled.p`
    color: ${WHITE};
    padding-left: 1vw;
    font-size: 20px;
`;

const Text = styled.p`
    color: ${WHITE};
`;

export {
    Wrapper,
    HeaderContainer,
    Header,
    HistoryOptionContainer,
    Text,
    HistoryText,
};
