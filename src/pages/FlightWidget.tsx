import React, { useEffect, useState } from "react";
import { ArrivalTable, Button, DepartureTable, Tabbar } from "../components";
import { useFlights, useLocalStorage } from "../hooks";
import { get12HoursRange } from "../utils";
import config from "../../config/flight-widget.json";

const FlightWidget = () => {
    const [from] = get12HoursRange();
    const [activeTab, setActiveTab] = useState("departures");
    const [departures, arrivals, loadFlights] = useFlights();

    const [timerSeconds, setTimerSeconds] = useLocalStorage(
        "timerSeconds",
        config.timerDelay
    );
    const [isTimerActive, setIsTimerActive] = useLocalStorage(
        "isTimerActive",
        false
    );

    useEffect(() => {
        if (timerSeconds > 0 && isTimerActive) {
            setTimeout(setTimerSeconds, 100, timerSeconds - 1);
        } else {
            setIsTimerActive(false);
            setTimerSeconds(config.timerDelay);
        }
    }, [timerSeconds, isTimerActive]);

    return (
        <div className='bg-neutral-900 font-mono text-neutral-100 text-xl p-4 flex items-start gap-5 h-full overflow-auto'>
            <div className='w-fit whitespace-nowrap'>
                <div>Airport: Minsk({config.minskAirportICAO})</div>
                <div>Date: {new Date(from).toDateString()}</div>
                <div>Range: 12h</div>
                <Button
                    disabled={isTimerActive}
                    onClick={() => {
                        loadFlights();
                        setIsTimerActive(true);
                    }}>
                    {isTimerActive ? timerSeconds : "Load"}
                </Button>
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
};

export default FlightWidget;
