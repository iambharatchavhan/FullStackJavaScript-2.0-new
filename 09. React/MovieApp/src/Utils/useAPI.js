import {useState,useEffect , useContext} from 'react'
import axios from 'axios';
import { context } from '../App';
import { API_KEY } from './Constants';

const useAPI = () => {

    const [data,setData] = useState({});
    const {onchangeValue} = useContext(context);

    useEffect(() => { 

        const fetchApi = async() => {
    
          const fetchData = await axios.get(`https://www.omdbapi.com/?s=${onchangeValue}&apikey=${API_KEY}`);
          setData(fetchData);
    
        }
    
        fetchApi();
        
        return(()=>{
          fetchApi();
        })
      
      },[onchangeValue])
 
      return {data};
}

export default useAPI;