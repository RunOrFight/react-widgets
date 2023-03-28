export interface Flights {
    departures: Departure[];
    arrivals: Arrival[];
}

export interface Departure {
    movement: Movement;
    number: string;
    status: string;
    codeshareStatus: string;
    isCargo: boolean;
    aircraft: Aircraft;
    airline: Airline;
    callSign?: string;
}

export interface Movement {
    airport: Airport;
    scheduledTimeLocal: string;
    actualTimeLocal: string;
    scheduledTimeUtc: string;
    actualTimeUtc: string;
    terminal: string;
    checkInDesk: string;
    gate: string;
    quality: string[];
    runwayTimeLocal?: string;
    runwayTimeUtc?: string;
}

export interface Airport {
    name: string;
    icao?: string;
    iata?: string;
}

export interface Aircraft {
    model: string;
    reg?: string;
    modeS?: string;
}

export interface Airline {
    name: string;
    iata: string;
    icao: string;
}

export interface Arrival {
    movement: Movement2;
    number: string;
    status: string;
    codeshareStatus: string;
    isCargo: boolean;
    aircraft: Aircraft2;
    airline: Airline2;
    callSign?: string;
}

export interface Movement2 {
    airport: Airport2;
    scheduledTimeLocal: string;
    actualTimeLocal: string;
    scheduledTimeUtc: string;
    actualTimeUtc: string;
    terminal: string;
    baggageBelt: string;
    quality: string[];
}

export interface Airport2 {
    icao: string;
    iata: string;
    name: string;
}

export interface Aircraft2 {
    model: string;
    reg?: string;
    modeS?: string;
}

export interface Airline2 {
    name: string;
    iata: string;
    icao: string;
}
