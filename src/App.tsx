import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout";
import { FlightWidgetPage, HomePage, TicTacToePage } from "./pages";

function App() {
    return (
        <div className='bg-sky-300 h-full min-h-[1px]'>
            <Routes>
                <Route
                    path='/react-widgets'
                    element={<HomePage />}></Route>
                <Route
                    path='/react-widgets/:widget'
                    element={<MainLayout />}></Route>
            </Routes>
        </div>
    );
}

export default App;
