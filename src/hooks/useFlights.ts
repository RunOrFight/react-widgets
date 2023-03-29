import { useMemo, useState } from "react";
import { Arrival, Departure, Flights } from "../types";
import config from "../../config/flight-widget.json";
import { get12HoursRange } from "../utils";

export default function (): [Departure[], Arrival[], () => void] {
    const [departures, setDepartures] = useState<Departure[]>([]);
    const [arrivals, setArrivals] = useState<Arrival[]>([]);
    const [from, to] = get12HoursRange();

    const loadFlights = () => {
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key":
                    "40a226f7edmsh97c4a131b19dd02p1b1aafjsn66e75b7bef90",
                "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com"
            }
        };

        fetch(
            `${config.apiUrl}/${config.minskAirportICAO}/${from}/${to}`,
            options
        )
            .then((response) => response.json())
            .then((response: Flights) => {
                setDepartures(response.departures);
                setArrivals(response.arrivals);
            })
            .catch((err) => console.error(err));
    };

    useMemo(() => {
        departures.sort((a, b) => {
            const _a = new Date(a.movement.scheduledTimeLocal);
            const _b = new Date(b.movement.scheduledTimeLocal);
            if (_a > _b) return 1;
            else return -1;
        });
    }, [departures, arrivals]);

    return [departures, arrivals, loadFlights];
}
