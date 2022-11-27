import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import { Wrapper, Text } from "./VesselType.styles";
import { getVesselTypeColour } from "../../../utils/helpers";

interface VesselTypeProps {
    vesselType: string;
    typeIndex: number;
    vesselTypeCheckBoxStates: boolean[];

    setVesselTypeCheckBoxStates: (states: boolean[]) => void;
}

const VesselType = (props: VesselTypeProps) => {
    const {
        vesselType,
        typeIndex,
        vesselTypeCheckBoxStates,
        setVesselTypeCheckBoxStates,
    } = props;

    const onClickCheckbox = () => {
        const currentCheckBoxStates = vesselTypeCheckBoxStates;
        currentCheckBoxStates[typeIndex] = !vesselTypeCheckBoxStates[typeIndex];
        setVesselTypeCheckBoxStates([...currentCheckBoxStates]);
    };

    return (
        <Wrapper onClick={() => onClickCheckbox()}>
            <input
                type="checkbox"
                checked={vesselTypeCheckBoxStates[typeIndex]}
                readOnly
            />
            <Text>{vesselType}</Text>
            <FontAwesomeIcon
                icon={faCircle}
                color={getVesselTypeColour(vesselType)}
            />
        </Wrapper>
    );
};

export default VesselType;
