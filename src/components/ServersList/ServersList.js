import { useState, useEffect } from 'react';

import "./serversList.scss"

export default function ServersList() {
    const [servers, setServers] = useState();
    const [filteredData, setFilteredData] = useState();

    useEffect(() => {
        fetchServerList();
    }, []);


    const fetchServerList = async () => {
        const token = localStorage.getItem("token");
        const url = "https://playground.tesonet.lt/v1/servers"

        try {
          const response = await fetch(url, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          const data = await response.json();
          setServers(data);
          setFilteredData(data);

        } catch (error) {
          console.error(error);
        }
      };

    const filterByDistance = () => {
        const sortedByDistance = [...servers].sort((a, b) => a.distance - b.distance);
        setFilteredData(sortedByDistance);
    }

    const filterByName = () => {
        const sortedByName = [...servers].sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        setFilteredData(sortedByName);
    };

    return (
        <div className="server-list">
            <>
                <div className="server-list__filters flex flex-wrap">
                    <div className="server-list__filters__column" onClick={filterByName}>
                        <span>Servers</span>
                    </div>
                    <div className="server-list__filters__column" onClick={filterByDistance}>
                        <span>Distance</span>
                    </div>
                </div>

                <ul>
                    {filteredData?.map((server, index) => {
                        return  (
                            <li key={index} className="flex space-between">
                                <span>{server.name}</span>
                                <span>{server.distance}</span>
                            </li>
                        )
                    })}
                </ul>
            </>
        </div>
    )
}
