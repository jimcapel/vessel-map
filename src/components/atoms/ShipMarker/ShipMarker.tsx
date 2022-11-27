import { Marker } from "react-map-gl";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Vessel } from "../../../types/types";
import { getVesselTypeColour } from "../../../utils/helpers";

interface ShipMarkerProps {
    vessel: Vessel;
    onClick: (vessel: Vessel) => void;
}

const ShipMarker = (props: ShipMarkerProps) => {
    const { vessel, onClick } = props;

    return (
        <Marker
            latitude={vessel.lat}
            longitude={vessel.long}
            onClick={() => onClick(vessel)}
            anchor="bottom"
        >
            <FontAwesomeIcon
                icon={faShip}
                style={{ width: 24, height: 24 }}
                color={getVesselTypeColour(vessel.type)}
            />
        </Marker>
    );
};

export default ShipMarker;
