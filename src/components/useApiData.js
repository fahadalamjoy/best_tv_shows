import {useState,useEffect} from 'react';
import axios from 'axios'

const useApiData=(tvData)=>{
    const [apiData,setApiData]= useState([]);

    useEffect(()=>{
        (async (tvData)=>{
            const response = await axios.get(`https://api.tvmaze.com/shows/${tvData}/cast`);
                setApiData(response.data);

        })(tvData);
    },[tvData]);

    return apiData;
}

export default useApiData