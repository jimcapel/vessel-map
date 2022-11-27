import { VesselPosition, VesselTypes } from "../types/types";

export const getVesselTypeColour = (vesselType: string | undefined) => {
    switch (vesselType) {
        case VesselTypes.bulkCarrier:
            return "orange";
        case VesselTypes.cargoShip:
            return "green";
        case VesselTypes.highSpeedCraft:
            return "red";
        case VesselTypes.tanker:
            return "purple";
        default:
            return "yellow";
    }
};

export const generateGeoJson = (vesselHistory: VesselPosition[]) => {
    const geojson = {
        type: "FeatureCollection" as "FeatureCollection",
        features: [
            {
                type: "Feature" as "Feature",
                geometry: {
                    type: "LineString" as "LineString",
                    coordinates: vesselHistory.map((history) => [
                        history.long,
                        history.lat,
                    ]),
                },
            },
        ],
    };
    return geojson;
};

export const layerStyle = (
    vesselName: string,
    vesselType: string | undefined
) => {
    const colour = getVesselTypeColour(vesselType);
    return {
        id: vesselName,
        type: "line" as "line",
        paint: {
            "line-color": colour,
            "line-width": 5,
        },
        layout: {
            "line-join": "round" as "round",
            "line-cap": "round" as "round",
        },
    };
};
