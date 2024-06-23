import React from "react";
import { useSelector } from "react-redux";
import CustomCard from "../components/CustomCard";
import { Grid, Typography } from "@mui/material";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Wishlist
      </Typography>
      {wishlistItems.length ? (
        <Grid container spacing={4}>
          {wishlistItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <CustomCard {...item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>Your wishlist is empty</Typography>
      )}
    </div>
  );
};

export default Wishlist;
