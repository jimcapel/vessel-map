import VesselType from "../../atoms/VesselType";
import { Wrapper, Header, Text } from "./VesselTypeSelection.styles";

interface VesselTypeSelectionProps {
    vesselTypes: string[];
    vesselTypeCheckBoxStates: boolean[];
    setVesselTypeCheckBoxStates: (states: boolean[]) => void;
}

const VesselTypeSelection = (props: VesselTypeSelectionProps) => {
    const {
        vesselTypes,
        vesselTypeCheckBoxStates,
        setVesselTypeCheckBoxStates,
    } = props;

    return (
        <Wrapper>
            <Header>Vessel Type</Header>
            <Text>Click to show/hide</Text>
            {vesselTypes.map((vesselType, index) => (
                <VesselType
                    key={index}
                    vesselType={vesselType}
                    typeIndex={index}
                    vesselTypeCheckBoxStates={vesselTypeCheckBoxStates}
                    setVesselTypeCheckBoxStates={setVesselTypeCheckBoxStates}
                />
            ))}
        </Wrapper>
    );
};

export default VesselTypeSelection;
