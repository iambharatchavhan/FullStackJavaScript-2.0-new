import Card from './Card';
import './FontFamily.css';

import useAPI from '../Utils/useAPI';


const Home = () => {

  const {data} = useAPI();
  console.log(data);
  return data?.data?.Response === 'True' ?  (
    <div className='min-h-screen min-w-full  bg-zinc-900 quattrocento flex flex-wrap justify-center items-center gap-10 p-5'>
      { 
        data?.data?.Search?.map((movie)=>{
         
          return <Card  key={movie.imdbID} details={movie} />
        })
      }
    </div>
  )
  :
  (
    <h1 className='min-h-screen min-w-full  bg-zinc-900 quattrocento font-semibold text-3xl text-teal-400 flex justify-center items-center'>{data?.data?.Error}</h1>
  )
}

export default Home;