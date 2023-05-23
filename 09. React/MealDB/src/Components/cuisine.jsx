import React,{useEffect,useState} from "react";
import styled from "styled-components";
import { Link ,useParams} from "react-router-dom";
import { motion } from "framer-motion";



const Cuisine = ()=>{

    const [cuisine,setCuisine] = useState([]);
    const params = useParams();
    
    useEffect(()=>{
        dynamicData(params.type);
        // console.log(params.type);
    },[params.type])

    const dynamicData = async (name) =>{
      
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const data = await response.json()

        setCuisine(data.results)
    }
    console.log(cuisine);

    return(
     <Grid
     animate={{opacity:1}}
     initial={{opacity:0}}
     exit={{opacity:0}}
    transition ={{duration:0.5}}

     >
        {cuisine.map((item)=>{
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

const Grid = styled(motion.div)`
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
export default Cuisine;