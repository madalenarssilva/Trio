import { useEffect, useState } from 'react';

//Similar to componentDidMount in class components
//useEffect sets the state each time it renders *
export default function useFetch(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function loadData() {
            const response = await fetch(url);
            if(!response.ok) {
                //something went wrong
                return;
            }
    
            const posts = await response.json();
            setData(posts);
        }
    
        loadData();
    }, [url]); // *
    
    return data;
}