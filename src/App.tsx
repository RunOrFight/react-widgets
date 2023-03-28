import { useState } from "react";
import "./App.css";
import { ArrivalTable, Button, DepartureTable, Tabbar } from "./components";
import { useFlights } from "./hooks";
import { get12HoursRange } from "./utils";
import config from "../config/flight-widget.json";

function App() {
    const [from] = get12HoursRange();
    const [activeTab, setActiveTab] = useState("departures");
    const [departures, arrivals, loadFlights] = useFlights();
    return (
        <div className='bg-neutral-900 font-mono text-neutral-100 text-xl p-4 min-h-full flex items-start gap-5'>
            <div className='w-fit whitespace-nowrap'>
                <div>Airport: Minsk({config.minskAirportICAO})</div>
                <div>Date: {new Date(from).toDateString()}</div>
                <div>Range: 12h</div>
                <Button onClick={() => loadFlights()}>Load</Button>
            </div>

            <div className='flex w-full justify-center flex-col'>
                <Tabbar
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    tabs={[
                        { id: "departures", caption: "DEPARTURES" },
                        { id: "arrivals", caption: "ARRIVALS" }
                    ]}
                />
                {activeTab === "departures" ? (
                    <DepartureTable departures={departures} />
                ) : (
                    <ArrivalTable arrivals={arrivals} />
                )}
            </div>
        </div>
    );
}

export default App;
