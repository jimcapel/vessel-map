import { useEffect, useMemo, useState } from "react";
import { Vessel } from "../../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import {
    Header,
    HeaderContainer,
    HistoryOptionContainer,
    HistoryText,
    Text,
    Wrapper,
} from "./VesselInformation.styles";
import { WHITE } from "../../../styles/styles";
import { RotatingLines } from "react-loader-spinner";

interface VesselInformationProps {
    vessel: Vessel;
    vessels: Vessel[];
    showVesselHistoryCheckBoxStates: boolean[];

    setShowVesselInformation: (show: boolean) => void;
    onShowHistory: (vessel: Vessel) => void;
}

const VesselInformation = (props: VesselInformationProps) => {
    const {
        vessel,
        vessels,
        showVesselHistoryCheckBoxStates,
        setShowVesselInformation,
        onShowHistory,
    } = props;

    const [historyFetchedStates, setHistoryFetchedStates] = useState<boolean[]>(
        new Array(vessels.length).fill(false)
    );

    const informationNotAvailable = "Information not available";

    const onPressClose = () => {
        setShowVesselInformation(false);
    };

    const onPressShowHistory = () => {
        const historyFetchedStatesCopy = historyFetchedStates;
        historyFetchedStatesCopy[getVesselIndex()] = true;
        setHistoryFetchedStates([...historyFetchedStatesCopy]);
        onShowHistory(vessel);
    };

    const getVesselIndex = () =>
        vessels.findIndex((v) => v.name === vessel?.name);

    const isChecked = useMemo(() => {
        const vesselIndex = getVesselIndex();

        return showVesselHistoryCheckBoxStates[vesselIndex];
    }, [vessel, showVesselHistoryCheckBoxStates]);

    //  states to determine if history is loading/ no information found
    const loadingHistory =
        historyFetchedStates[getVesselIndex()] && !vessel?.history;

    const noHistoryInformationAvailable =
        historyFetchedStates[getVesselIndex()] && vessel?.history?.length === 0;

    const getHistoryText = useMemo(() => {
        if (loadingHistory) return "Loading...";
        else if (noHistoryInformationAvailable)
            return "No history information available";

        return "Show vessel history";
    }, [loadingHistory, noHistoryInformationAvailable]);

    return (
        <Wrapper>
            <HeaderContainer>
                <Header>Vessel information</Header>
                <div onClick={onPressClose}>
                    <FontAwesomeIcon icon={faX} color={WHITE} />
                </div>
            </HeaderContainer>
            <HistoryOptionContainer onClick={onPressShowHistory}>
                {loadingHistory && (
                    <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="16"
                        visible={true}
                    />
                )}
                {noHistoryInformationAvailable || loadingHistory ? null : (
                    <input type="checkbox" checked={isChecked} readOnly />
                )}
                <HistoryText>{getHistoryText}</HistoryText>
            </HistoryOptionContainer>
            <div>
                <Text>
                    Name: {vessel?.name ? vessel.name : informationNotAvailable}
                </Text>
                <Text>
                    Type: {vessel?.type ? vessel.type : informationNotAvailable}
                </Text>
                <Text>
                    Course:{" "}
                    {vessel?.course ? vessel.course : informationNotAvailable}
                </Text>
                <Text>
                    Destination:{" "}
                    {vessel?.destination
                        ? vessel.destination
                        : informationNotAvailable}
                </Text>
                <Text>
                    Eta: {vessel?.eta ? vessel.eta : informationNotAvailable}
                </Text>
                <Text>
                    Flag: {vessel?.flag ? vessel.flag : informationNotAvailable}
                </Text>
                <Text>
                    Heading:{" "}
                    {vessel?.heading ? vessel.heading : informationNotAvailable}
                </Text>
                <Text>
                    Imo: {vessel?.imo ? vessel.imo : informationNotAvailable}
                </Text>
                <Text>
                    Latitude:{" "}
                    {vessel?.lat ? vessel.lat : informationNotAvailable}
                </Text>
                <Text>
                    Longitude:{" "}
                    {vessel?.long ? vessel.long : informationNotAvailable}
                </Text>
                <Text>
                    Length:{" "}
                    {vessel?.length ? vessel.length : informationNotAvailable}
                </Text>
                <Text>
                    Mmsi: {vessel?.mmsi ? vessel.mmsi : informationNotAvailable}
                </Text>
                <Text>
                    Speed:{" "}
                    {vessel?.speed ? vessel.speed : informationNotAvailable}
                </Text>
                <Text>
                    Timestamp:{" "}
                    {vessel?.timestamp
                        ? vessel.timestamp
                        : informationNotAvailable}
                </Text>
                <Text>
                    Vessel width:{" "}
                    {vessel?.width ? vessel.width : informationNotAvailable}
                </Text>
            </div>
        </Wrapper>
    );
};

export default VesselInformation;
