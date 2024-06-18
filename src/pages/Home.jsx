import React,{ useState, useEffect} from 'react';
import axios from 'axios';
// import {CustomCard} from '../components/CustomCard';
import CustomCard from '../components/CustomCard';
const Home = () => {


  const [data,setData] =useState();
  const [loading,setLoading ]= useState(true )

  useEffect(()=>{

    const fetchData=async()=>{
      try{
 
        const response = await axios.get('https://fakestoreapi.com/products')

        setData(response.data)

      }catch(error){

        console.log(error)

      } finally{
        setLoading(false)
      }
    }

    fetchData();

  },[])

  console.log(data)

  if (loading) return <h1>loading... </h1>

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {data && data.map((details)=>(

          <CustomCard key={details.id} title={details.title} description={details.description} image={details.image}
          price={details.price} rating={details.rating}
          />
          ))
        }
      </div>
    </div>
  );
};

export default Home;
