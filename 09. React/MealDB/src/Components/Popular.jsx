import { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    apiData();
  }, []);

  const apiData = async () => {
    const checkLocalStorage = localStorage.getItem("popular");
    //Checking the data available in local storage

    if (checkLocalStorage) {
      setPopular(JSON.parse(checkLocalStorage));
      // if data found then set to the original state
    } else {
      // if data not found then first fetch the data set to the local storage in string format
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await response.json();

      console.log(data);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      // set key is popular   and data to local storage as cache data
      setPopular(data.recipes);
      // also set data to state to show on page
    }
  };

  return (
    <div>
      <Wrapper>
        <h1>Trending</h1>
        <Splide
          options={{
            perPage: 4,
            breakpoints: {
              320: {
                perPage: 2,
              },},
            gap        : '1rem',
            pagination: false,
            arrows: false,
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={"/recipe/" + recipe.id}>
                  <Card>
                    <img src={recipe.image} alt={recipe.title} />
                    <p>{recipe.title}</p>

                    <Gradient />
                  </Card>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 1rem 0;
  h1 {
    font-size: 1rem;
    color: gray;
    padding: 0.5rem;
  }
`;
const Card = styled.div`
  height: 15rem;
  width: 16rem;
  border-radius: 2rem;
  background-color: #cfcfcf;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  p {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    z-index: 10;
    font-size: 1rem;
    color: white;
    text-align: center;
    transform: translate(-50%, 0%);
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 768px) {
     height:10rem;
     width:8rem;

  }



  
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;
