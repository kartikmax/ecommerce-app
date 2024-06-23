import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomCard from "../components/CustomCard";
import { CircularProgress } from "@mui/material";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");

        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress style={{ width: 100, height: 100 }} />
      </div>
    );

  return (
    <>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: 10,
        }}
      >
        {data &&
          data.map((details) => (
            <CustomCard
              key={details.id}
              id={details.id}
              title={details.title}
              description={details.description}
              image={details.image}
              price={details.price}
              rating={details.rating}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
