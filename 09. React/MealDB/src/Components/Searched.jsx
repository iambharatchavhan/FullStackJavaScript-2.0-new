import React,{useEffect,useState} from "react";
import { Link,useParams } from "react-router-dom";
import styled from "styled-components";


const Searched =()=>{
    const [searchDish,setSearchDish]=useState([])
    const params = useParams();

    useEffect(()=>{
        searchedApi(params.search)
    },[params.search])
    

    const searchedApi = async(name)=>{
       
        const res= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const data = await res.json();

        setSearchDish(data.results);
    }

    return(
        <Grid>
           {searchDish.map((item)=>{
               return(
                   <Card key={item.id}>
                        <Link to={"/recipe/" + item.id}>
                        <img src={item.image} alt="" />
                         <h4>{item.title}</h4>
                        </Link>
                      
                   </Card>
               )
           })}
        </Grid>
       )
   }
   
   const Grid = styled.div`
       display:grid;
       grid-template-columns:repeat(auto-fit,minmax(13rem,1fr));
       grid-gap:2rem;
   `
   const Card = styled.div`
       img{
           width:100%;
           border-radius:2rem;
   
       }
       a{
           text-decoration:none;
       }
       h4{
           text-align:center;
           color:#675D50;
       }
   `



export default Searched;