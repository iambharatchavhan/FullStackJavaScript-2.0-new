import {FaHome,FaPizzaSlice} from "react-icons/fa"
import {GiTeapotLeaves,GiChopsticks,GiFastNoodles} from "react-icons/gi"
import styled from "styled-components"
import { NavLink } from "react-router-dom"



const Category = ()=>{
    return(
        <List>
        <Slink to='/'>
            <FaHome/>
            <h3>Home</h3>
        </Slink>
            <Slink to="/cuisine/Indian">
            <GiTeapotLeaves/>
            <h3>Indian</h3>
        </Slink>
        <Slink to="/cuisine/American">
            <FaPizzaSlice/>
            <h3>American</h3>
        </Slink>
        <Slink to="/cuisine/Thai">
            <GiFastNoodles/>
            <h3>Thai</h3>
        </Slink>
        <Slink to="/cuisine/Japanese">
            <GiChopsticks/>
            <h3>Japanese</h3>
        </Slink>
        </List>



    )
}

const List = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:2rem;
    text-align:center;
    margin:1.5rem 0;

    div{
        cursor: pointer;
    }

    @media(max-width: 768px) {
      gap:1rem;

    }

 
`
const Slink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    background:linear-gradient(to right, #434343 0%, black 100%);
    width:4rem;
    height:4rem;
    border-radius:50%;
    color:#e3e3e3;

  

    h3{
        font-size:.8rem;
    }
    svg{
        font-size:1.2rem;
    }
    &.active{
        background:linear-gradient(to right, #ee6a12 0%, #e05a5a 100%);

    }


    @media(max-width: 768px) {
     width:3rem;
     height:3rem;
     h3{
        font-size:.5rem;
    }
    svg{
        font-size:1rem;
    }

    }
`

export default Category;