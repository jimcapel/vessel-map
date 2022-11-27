import styled from "styled-components";
import { WHITE } from "../../../styles/styles";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Text = styled.p`
    color: ${WHITE};
    padding-right: 1vw;
    padding-left: 0.5vw;
`;

export { Wrapper, Text };
