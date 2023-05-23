import { useState } from "react"
import {RiSearch2Fill} from "react-icons/ri"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const Search = ()=>{
    const [input, setInput]= useState("");
    const navigate = useNavigate();

    const  handleOnSubmit= (e)=>{
        e.preventDefault();
        navigate("/searched/" + input)
        
    }
    return(
        <FormStyle onSubmit={handleOnSubmit}>
                 <RiSearch2Fill/>
            <input onChange={(e)=>setInput(e.target.value)} type="text" />
       
        </FormStyle>
    )
}

const FormStyle = styled.form`
    margin: .5rem 20rem 0 20rem;
    position:relative;
    width:100%;

    input{
           border:none;
           outline:none;
           font-size:1rem;
           color:#fff;
           padding:.5rem 4rem;
           background:linear-gradient(to right, #434343 0%, black 100%);
           border-radius:2rem;
           width:48%;
        }
     svg{
        position:absolute;
        top:1rem;
        font-size:1.3rem;
        z-index:20;
        color:#f3f3f3;
        transform:translate(100%,-50%)
     }
        
     @media(max-width: 768px) {
        margin:0;
        margin-top: 2rem;
        input{
           border:none;
           outline:none;
           font-size:.8rem;
           color:#fff;
           padding:.5rem 3rem;
           width:100%;
        }

    }

  
`


export default Search