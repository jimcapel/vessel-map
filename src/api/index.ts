import { Vessel, VesselPosition } from "../types/types";

export const getVesselPositions = async () => {
    try {
        const response = await fetch(
            "https://zruqk52qub.execute-api.us-east-1.amazonaws.com/v3/vessels/positions",
            {
                headers: {
                    "x-api-key": "OdYTEpiTcrg5syMlp5Fz5J7FEjYxxF1cHXXdFF30",
                    "Content-Type": "application/json",
                },
            }
        );

        const responseJSON: VesselPosition[] = await response.json();

        return responseJSON;
    } catch (error) {
        return undefined;
    }
};

export const getVesselInfo = async (vesselName: string) => {
    try {
        const response = await fetch(
            `https://zruqk52qub.execute-api.us-east-1.amazonaws.com/v3/vessels/${vesselName}/info`,
            {
                headers: {
                    "x-api-key": "OdYTEpiTcrg5syMlp5Fz5J7FEjYxxF1cHXXdFF30",
                    "Content-Type": "application/json",
                },
            }
        );

        const responseJSON: Vessel = await response.json();
        return responseJSON;
    } catch (error) {
        return undefined;
    }
};

export const getVesselHistory = async (vesselName: string) => {
    try {
        const response = await fetch(
            `https://zruqk52qub.execute-api.us-east-1.amazonaws.com/v3/vessels/${vesselName}/history`,
            {
                headers: {
                    "x-api-key": "OdYTEpiTcrg5syMlp5Fz5J7FEjYxxF1cHXXdFF30",
                    "Content-Type": "application/json",
                },
            }
        );

        const responseJSON: VesselPosition[] = await response.json();
        return responseJSON;
    } catch (error) {
        return [];
    }
};
