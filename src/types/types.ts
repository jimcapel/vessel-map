export interface VesselPosition {
    course: number;
    heading: number;
    imo: number;
    lat: number;
    long: number;
    mmsi: number;
    name: string;
    speed: number;
    timestamp: string;
}

export interface Vessel extends VesselPosition {
    destination?: string;
    eta?: string;
    flag?: string;
    length?: number;
    type?: string;
    width?: number;
    history?: VesselPosition[];
}

export enum VesselTypes {
    bulkCarrier = "Bulk Carrier",
    cargoShip = "Cargo Ship",
    highSpeedCraft = "High-speed Craft",
    tanker = "Tanker",
    unknown = "Vessel type unknown",
}
