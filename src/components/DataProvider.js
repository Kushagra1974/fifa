import { createContext, useState, useEffect } from "react"
import { csv } from "d3"
export const DataContext = createContext();

function DataProvider({ children }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const dt = await csv("./data/data.csv");
                setData(dt);
            }
            catch (e) {
                console.error("Error", e);
            }
        }
        fetchData();
    }, [])
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
