import { useContext } from "react";
import Movie from "./Movie";
import {theme } from "antd";
import ContextMovies from "../context/ContextMovies";
const MovieList = ({ movies }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { arrayOfMovies, setArrayOfMovies } = useContext(ContextMovies);
  
  const deleteMovie = (id)=>{
    const item = arrayOfMovies.filter((_, index) => index !== id);
    setArrayOfMovies(item)
    console.log(arrayOfMovies)
  }


  return (
    <div
      className="gridMovies"
      style={{
        background: colorBgContainer,
        minHeight: 280,
        padding: 15,
        borderRadius: borderRadiusLG,
        height: "100%",
        width: "85%",
        overflowX: "hidden",
      }}
    >
      {arrayOfMovies?.map((item, index) => (
        <Movie data={item} key={index} id={index} deleteMovie={deleteMovie}/>
      ))}
         
   
    </div>
  );
};

export default MovieList;




