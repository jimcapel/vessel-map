import { ColorRing } from "react-loader-spinner";

import { Wrapper, Container } from "./LoadingIndicator.styles";

const LoadingIndicator = () => {
    return (
        <Wrapper>
            <Container>
                <ColorRing
                    visible={true}
                    height={180}
                    width={180}
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                        "#e15b64",
                        "#f47e60",
                        "#f8b26a",
                        "#abbd81",
                        "#849b87",
                    ]}
                />
            </Container>
        </Wrapper>
    );
};

export default LoadingIndicator;
