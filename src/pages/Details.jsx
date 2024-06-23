// src/pages/Details.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Rating,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { addItem } from "../redux/slices/cartSlice";

const Details = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${itemId}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [itemId]);

  const handleAddToCart = () => {
    dispatch(addItem(data));
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  

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
    <div style={{ padding: "20px" }}>
       <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              image={data.image}
              alt={data.title}
              sx={{ height: 400, objectFit: "contain" }}
            />
            <CardContent>
              <Typography variant="h6" color="primary" sx={{ marginBottom: 1 }}>
                ₹{data.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                endIcon={<AddShoppingCartOutlined />}
                fullWidth
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                onClick={() => navigate("/")}
                sx={{ marginTop: 1 }}
              >
                Back
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {data.description}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Rating name="read-only" value={data.rating.rate} readOnly />
            <Typography>({data.rating.count} reviews)</Typography>
          </Stack>
          <Typography variant="body1" color="text.primary" paragraph>
            Available offers:
          </Typography>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Item is added to the cart.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Details;
