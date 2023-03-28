import { useState } from "react";
import "./App.css";
import { Table } from "./components";
import { Flights } from "./types";
import { debounce, get12HoursRange } from "./utils";

function App() {
    const [departures, setDepartures] = useState<Flights["departures"]>([]);
    const [arrivals, setArrivals] = useState<Flights["arrivals"]>([]);
    const [from, to] = get12HoursRange();
    const minskAirportICAO = "UMMS";

    const callback = () => {
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key":
                    "40a226f7edmsh97c4a131b19dd02p1b1aafjsn66e75b7bef90",
                "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com"
            }
        };

        const url = "https://aerodatabox.p.rapidapi.com/flights/airports/icao";

        fetch(`${url}/${minskAirportICAO}/${from}/${to}`, options)
            .then((response) => response.json())
            .then((response: Flights) => {
                setDepartures(response.departures);
                setArrivals(response.arrivals);
            })
            .catch((err) => console.error(err));
    };

    const debounced = debounce(callback, 1000);

    return (
        <div className='bg-neutral-900 font-mono text-neutral-100 text-xl p-4'>
            <div>
                <div>Airport: Minsk({minskAirportICAO})</div>
                <div>Date: {new Date(from).toDateString()}</div>
                <div>Range: 12h</div>
                <button
                    className='bg-neutral-800 rounded-lg px-5 py-2 '
                    onClick={debounced}>
                    Show
                </button>
            </div>

            <div className='flex flex-col gap-2'>
                <Table
                    title='DEPARTURES'
                    cols={[
                        "",
                        "Airline",
                        "FLIGHT",
                        "Destination",
                        "Time",
                        "Terminal",
                        "Gate",
                        "Status"
                    ]}
                    rows={departures?.map((departure) => {
                        const { movement, number, status, airline } = departure;
                        const regex = /(\d{2}:\d{2})/;

                        return [
                            airline.name,
                            number.replace(" ", ""),
                            movement.airport.name,
                            movement.scheduledTimeLocal.match(regex)![0],
                            movement.terminal,
                            movement.gate,
                            status
                        ];
                    })}
                />

                <Table
                    title='ARRIVALS'
                    cols={[
                        "",
                        "AIRLINE",
                        "FLIGHT",
                        "ARRIVES FROM",
                        "Terminal",
                        "ARRIVAL TIME",
                        "Status"
                    ]}
                    rows={arrivals?.map((departure) => {
                        const { movement, number, status, airline } = departure;
                        const regex = /(\d{2}:\d{2})/;

                        return [
                            airline.name,
                            number.replace(" ", ""),
                            movement.airport.name,
                            movement.terminal,
                            movement.scheduledTimeLocal.match(regex)![0],
                            status
                        ];
                    })}
                />
            </div>
        </div>
    );
}

export default App;
