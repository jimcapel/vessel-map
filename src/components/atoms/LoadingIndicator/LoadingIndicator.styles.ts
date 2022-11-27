import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 2;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export { Wrapper, Container };
