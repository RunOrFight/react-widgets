import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout";
import { FlightWidgetPage } from "./pages";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={<MainLayout />}>
                    <Route
                        index
                        element={<FlightWidgetPage />}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
