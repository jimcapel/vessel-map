import logo from "../../../assets/images/geollect-logo-no-background.png";

import { Container, HeaderText, Logo, Wrapper } from "./MapHeader.styles";

const MapHeader = () => {
    return (
        <Wrapper>
            <Container>
                <Logo src={logo} />
                <HeaderText>Vessel map</HeaderText>
            </Container>
        </Wrapper>
    );
};

export default MapHeader;
