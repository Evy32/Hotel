import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [dataHoteles, setDataHoteles] = useState([]);

     

    useEffect(() => {
        const fetchData = async () => {

            try {
                const responseproductos = await fetch("http://localhost:3004/hoteles");
                console.log(responseproductos);
                const jsonDataProducts = await responseproductos.json();

                setDataHoteles(jsonDataProducts);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    

    return (
        <dataContext.Provider value={{ dataHoteles }}>
            {children}
        </dataContext.Provider>
    );
};

export default DataProvider;