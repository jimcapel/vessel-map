import { useEffect, useState } from "react";
import Map, { Layer, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { isWithinInterval, sub } from "date-fns";

import MapHeader from "./components/atoms/MapHeader";
import VesselTypeSelection from "./components/molecules/VesselTypeSelection";
import VesselInformation from "./components/atoms/VesselInformation";
import ShipMarker from "./components/atoms/ShipMarker";
import LoadingIndicator from "./components/atoms/LoadingIndicator";

import { getVesselHistory, getVesselInfo, getVesselPositions } from "./api";
import { Vessel } from "./types/types";
import { vesselTypes } from "./utils/constants";
import { generateGeoJson, layerStyle } from "./utils/helpers";
import { Wrapper } from "./App.styles";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [vessels, setVessels] = useState<Vessel[]>([]);
    const [selectedVessel, setSelectedVessel] = useState<Vessel>();

    const [showVesselInformation, setShowVesselInformation] = useState(false);

    const [
        showVesselHistoryCheckBoxStates,
        setShowVesselHistoryCheckBoxStates,
    ] = useState<boolean[]>([]);
    const [vesselTypeCheckBoxStates, setVesselTypeCheckBoxStates] = useState<
        boolean[]
    >(new Array(vesselTypes.length).fill(true));

    useEffect(() => {
        fetchVesselData();
    }, []);

    //  fetches vessel position data and vessel information, then merges both into one object
    const fetchVesselData = async () => {
        const vesselPositions = await getVesselPositions();

        if (!vesselPositions) return;

        const vessels: Vessel[] = [];

        await Promise.all(
            vesselPositions.map(async (vesselPosition) => {
                const vesselInfo = await getVesselInfo(vesselPosition.name);

                if (!vesselInfo) {
                    vessels.push(vesselPosition);
                } else {
                    vessels.push(vesselInfo);
                }
            })
        );

        setShowVesselHistoryCheckBoxStates(
            new Array(vessels?.length).fill(false)
        );
        setVessels(vessels);
        setIsLoading(false);
    };

    //  fetches vessel history and removes any with timestamps that are > 7days old
    const fetchVesselHistory = async (vesselName: string) => {
        const vesselHistory = await getVesselHistory(vesselName);

        const vesselsCopy = vessels;
        const vesselIndex = vesselsCopy.findIndex(
            (vessel) => vessel.name === vesselName
        );

        if (vesselIndex === -1) return;

        if (vesselHistory.length === 0) {
            vesselsCopy[vesselIndex].history = vesselHistory;
            setVessels([...vesselsCopy]);
            return;
        }

        const today = new Date(
            vesselHistory[vesselHistory.length - 1].timestamp
        );
        const sevenDaysAgo = sub(today, { days: 7 });

        const vesselHistoryOverLast7Days = vesselHistory.filter((history) =>
            isWithinInterval(new Date(history.timestamp), {
                start: sevenDaysAgo,
                end: today,
            })
        );

        vesselsCopy[vesselIndex].history = vesselHistoryOverLast7Days;

        setVessels([...vesselsCopy]);
    };

    const onShipMarkerClick = (vessel: Vessel) => {
        setSelectedVessel(vessel);
        setShowVesselInformation(true);
    };

    //  if no history data present on Vessel object, first fetches, then displays
    const onShowHistory = async (vessel: Vessel) => {
        if (!vessel?.history) {
            await fetchVesselHistory(vessel.name);
        }

        const vesselIndex = vessels.findIndex((v) => v.name === vessel.name);

        const currentShowVesselHistoryCheckBoxStates =
            showVesselHistoryCheckBoxStates;
        currentShowVesselHistoryCheckBoxStates[vesselIndex] =
            !showVesselHistoryCheckBoxStates[vesselIndex];

        setShowVesselHistoryCheckBoxStates([
            ...currentShowVesselHistoryCheckBoxStates,
        ]);
    };

    const showHistory = (vesselName: string) => {
        const vesselIndex = vessels.findIndex((v) => v.name === vesselName);

        return showVesselHistoryCheckBoxStates[vesselIndex];
    };

    const isTypeSelected = (type: string | undefined) => {
        if (!type)
            return vesselTypeCheckBoxStates[
                vesselTypeCheckBoxStates.length - 1
            ];

        let typeIndex = vesselTypes.findIndex(
            (typeOption) => typeOption === type
        );

        return vesselTypeCheckBoxStates[typeIndex];
    };

    return (
        <Wrapper>
            <MapHeader />
            {isLoading && <LoadingIndicator />}
            {showVesselInformation && selectedVessel && (
                <VesselInformation
                    vessel={selectedVessel}
                    vessels={vessels}
                    showVesselHistoryCheckBoxStates={
                        showVesselHistoryCheckBoxStates
                    }
                    setShowVesselInformation={() =>
                        setShowVesselInformation(false)
                    }
                    onShowHistory={onShowHistory}
                />
            )}
            {vessels?.length > 0 && (
                <VesselTypeSelection
                    vesselTypes={vesselTypes}
                    vesselTypeCheckBoxStates={vesselTypeCheckBoxStates}
                    setVesselTypeCheckBoxStates={setVesselTypeCheckBoxStates}
                />
            )}
            <Map
                mapboxAccessToken={process.env.REACT_APP_GEOLLECT_API_KEY}
                initialViewState={{
                    latitude: 51.5072,
                    longitude: -0.1276,
                    zoom: 4,
                }}
                style={{ width: "100vw", height: "100vh" }}
                mapStyle="mapbox://styles/mapbox/outdoors-v12"
            >
                {vessels.map(
                    (vessel, index) =>
                        isTypeSelected(vessel?.type) && (
                            <div key={index}>
                                <ShipMarker
                                    vessel={vessel}
                                    onClick={onShipMarkerClick}
                                />
                                {vessel.history && showHistory(vessel.name) && (
                                    <Source
                                        type="geojson"
                                        //@ts-ignore
                                        data={generateGeoJson(vessel.history)}
                                    >
                                        <Layer
                                            {...layerStyle(
                                                vessel.name,
                                                vessel?.type
                                            )}
                                        />
                                    </Source>
                                )}
                            </div>
                        )
                )}
            </Map>
        </Wrapper>
    );
};

export default App;
