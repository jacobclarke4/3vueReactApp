
import './global.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Module1 from './components/Modules/Module1';
import Module2 from './components/Modules/Module2';


// Renders the App
function App() {
    // State for data
    const [data, setData] = useState(null);
    // State for whether the data is loaded or not
    const [loading, setLoading] = useState(true);

    // OnMount fetch the data from the given API endpoint
    // After fetching data, set loading to false and setData with the fetched data
    // Catch any errors
    useEffect(() => {
        fetch('https://code-interview-challenge-default-rtdb.firebaseio.com/modules.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network error: ' + response);
            }
            return response.json();
        })
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error:', error);
            setLoading(false);
        });
    },[])

  return (
        <Router>
            <div className='page-margin p-top p-bottom'>
                <div className='flex flex-column gap-1'>
                    {/* Render the Modules when data has been loaded (loading == false) */}
                    {loading ? (
                        <></>
                    ):
                        <>
                            {data && <Module2 data={data}/>}
                            {data && <Module1 data={data}/>}
                        </>
                    }
                </div>
            </div>
        </Router>
  );
}
export default App;
