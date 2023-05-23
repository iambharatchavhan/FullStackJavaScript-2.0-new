import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe =()=>{
    const [recipeInfo,setRecipeInfo] = useState({})
    const [activTab , setActivTab] = useState('instructions')
    let params = useParams();

    useEffect(()=>{fetchData(params.id)},[])

    const fetchData = async()=>{
        const res = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information/?apiKey=${process.env.REACT_APP_API_KEY}`) 
        const details = await res.json();

        setRecipeInfo(details)
        // console.log(details);
    }
    return(
        <DetailsWrap>
            <div>
        <h2>{recipeInfo.title}</h2>
        <img src={recipeInfo.image} alt="" />

            </div>
            <Info>
                <Flex>
                <Button className={activTab === 'instructions' ? 'active' : ""} onClick={()=>setActivTab("instructions")}>Instructions</Button>
                <Button className={activTab === 'ingredients' ? 'active' : ""}  onClick={()=>setActivTab("ingredients")} >Ingredients</Button>
                </Flex>
               
              {activTab === "instructions" && (
                <div>
                <h3 dangerouslySetInnerHTML= {{__html:recipeInfo.summary}}></h3>
                <h3 dangerouslySetInnerHTML= {{__html:recipeInfo.instructions}}></h3>
             </div>
              )}
             
             {activTab === "ingredients" && (
                 <ul>
                 {recipeInfo.extendedIngredients.map((ingredient)=>(
                    
        
                       <li  key = {ingredient.id}>{ingredient.original}</li>
               
                   
                 ))}
              </ul> 
             )}
            
            </Info>
        </DetailsWrap>
    )
  
    
}

const DetailsWrap = styled.div`
    margin-top:2rem;
    margin-bottom:5rem;
    display:flex;
    /* flex-wrap:wrap; */
    .active{
    background:linear-gradient(to right, #434343 0%, black 100%);
    color:#fff;

    
    }
    img{
        width:640px;
    }
    h2{
      margin-bottom:2rem;
      font-size:1rem;

    }
   
    li{
        margin-top:1rem;
        line-height:2.5rem;
        list-style:circle;
       

    }
    ul{
        margin-top:2rem;
    }

    @media(max-width: 768px) {
      flex-wrap:wrap;

      img{
        width:320px;
      }

    }
`;
const Button = styled.button`
    padding:1rem 2rem;
    border:2px solid black;
    background:#fff;
    color:#313131;
    margin-right:2rem;
    font-weight:600;
    margin-bottom:2rem;

    @media(max-width: 768px) {
    padding:.7rem 1rem;
    margin-left:.5rem;
}
   
`;

const Flex = styled.div`
 display:flex;
 width:100%;
 
 @media(max-width: 768px) {

    margin-left:-5rem;

}

`
const Info = styled.div`
margin-left:5rem;

    
`

export default Recipe;