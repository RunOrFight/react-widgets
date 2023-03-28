import "./App.css";
import { Table } from "./components";

function App() {
    return (
        <div className='bg-neutral-900 rounded-lg p-2.5 shadow-xl font-mono text-neutral-100 text-4xl'>
            <header className='p-2.5'>DEPARTURES</header>
            <Table />
        </div>
    );
}

export default App;
