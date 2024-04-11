//Dependency Array: Component that fetches data from an API when a specific prop changes, 
//using useEffect with a dependency array.

import { useEffect, useState } from "react"; //import hooks from react library

function DataFetcher({ userId }) { //declaring functional component as DataFetcher & props as userId , also call this function in index.js
    const [userData, setUserData] = useState([]); //initially declaring state variable with value null

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users`)//fetching data from api
            .then(response => response.json()) //once it fetches the data it converts to json 
            .then(data => setUserData(data)) // then it will be stored in setUserData function
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    return (
        <div>
            <ul>
                {userData.map((list, index) => (
                    <li key={index}>{list.id} | {list.name}</li>
//It maps over the userData array and renders a list item <li> for each user, displaying their ID and name.
                ))}
            </ul>
        </div>
    );
}


export default DataFetcher;